-- =========================================================================
-- COMBINED SUPABASE SCHEMA MIGRATION FOR TEXTILE INTELLIGENCE PLATFORM
-- Copy all of this and run it in:
-- https://supabase.com/dashboard/project/ilcrawcvsuscenolcdyo/sql/new
-- =========================================================================

-- Extensions
CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE EXTENSION IF NOT EXISTS pg_trgm;

-- Enums
CREATE TYPE public.app_role AS ENUM ('admin', 'analyst', 'viewer');
CREATE TYPE public.company_status AS ENUM ('pending_review', 'verified', 'rejected', 'archived');
CREATE TYPE public.risk_level AS ENUM ('low', 'medium', 'high');

-- updated_at helper
CREATE OR REPLACE FUNCTION public.tg_set_updated_at()
RETURNS TRIGGER LANGUAGE plpgsql SET search_path = public AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END;
$$;

-- ============= profiles =============
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT,
  full_name TEXT,
  avatar_url TEXT,
  company TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE ON public.profiles TO authenticated;
GRANT ALL ON public.profiles TO service_role;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "profiles_select_all_auth" ON public.profiles FOR SELECT TO authenticated USING (true);
CREATE POLICY "profiles_update_own" ON public.profiles FOR UPDATE TO authenticated USING (auth.uid() = id);
CREATE POLICY "profiles_insert_own" ON public.profiles FOR INSERT TO authenticated WITH CHECK (auth.uid() = id);
CREATE TRIGGER trg_profiles_updated BEFORE UPDATE ON public.profiles FOR EACH ROW EXECUTE FUNCTION public.tg_set_updated_at();

-- ============= user_roles =============
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role app_role NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(user_id, role)
);
GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "user_roles_select_own" ON public.user_roles FOR SELECT TO authenticated USING (user_id = auth.uid());

CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role);
$$;

-- Auto-create profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE
  _email TEXT;
  _domain TEXT;
  _company_name TEXT;
  _company_slug TEXT;
BEGIN
  _email := NEW.email;
  
  -- Extract domain from email (e.g. user@arvindmills.com -> arvindmills.com)
  _domain := SUBSTRING(_email FROM '@(.*)$');
  
  -- Check if it is a standard public domain
  IF _domain IS NOT NULL AND _domain NOT IN ('gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'live.com', 'icloud.com', 'aol.com', 'zoho.com', 'proton.me', 'protonmail.com') THEN
    -- Extract company name from domain (e.g. arvindmills.com -> arvindmills -> Arvind Mills)
    _company_name := REGEXP_REPLACE(SUBSTRING(_domain FROM '^([^\.]+)'), '[_-]', ' ', 'g');
    -- Capitalize words (e.g. arvind mills -> Arvind Mills)
    _company_name := INITCAP(_company_name);
    _company_slug := LOWER(REGEXP_REPLACE(_company_name, '\s+', '-', 'g'));
    
    -- Insert company if it doesn't exist
    INSERT INTO public.companies (slug, name, status, business_type)
    VALUES (_company_slug, _company_name, 'pending_review', 'manufacturer')
    ON CONFLICT (slug) DO NOTHING;
    
    -- Insert profile with company name
    INSERT INTO public.profiles (id, email, full_name, company)
    VALUES (
      NEW.id, 
      _email, 
      COALESCE(NEW.raw_user_meta_data->>'full_name', _email),
      _company_name
    )
    ON CONFLICT (id) DO UPDATE 
    SET company = EXCLUDED.company, full_name = EXCLUDED.full_name;
  ELSE
    -- Insert default profile
    INSERT INTO public.profiles (id, email, full_name)
    VALUES (NEW.id, _email, COALESCE(NEW.raw_user_meta_data->>'full_name', _email))
    ON CONFLICT (id) DO NOTHING;
  END IF;

  -- Default role 'viewer'
  INSERT INTO public.user_roles (user_id, role) 
  VALUES (NEW.id, 'viewer')
  ON CONFLICT DO NOTHING;

  RETURN NEW;
END;
$$;

-- Now trigger on auth.users (after user_roles exists)
CREATE TRIGGER on_auth_user_created AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Admin visibility policies
CREATE POLICY "user_roles_admin_all" ON public.user_roles FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- ============= countries =============
CREATE TABLE public.countries (
  code TEXT PRIMARY KEY,          -- ISO 3166-1 alpha-2
  name TEXT NOT NULL,
  region TEXT,
  lat NUMERIC,
  lng NUMERIC,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT ON public.countries TO anon, authenticated;
GRANT ALL ON public.countries TO service_role;
ALTER TABLE public.countries ENABLE ROW LEVEL SECURITY;
CREATE POLICY "countries_read_all" ON public.countries FOR SELECT USING (true);
CREATE POLICY "countries_admin_write" ON public.countries FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- ============= categories =============
CREATE TABLE public.categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  parent_id UUID REFERENCES public.categories(id) ON DELETE SET NULL,
  kind TEXT NOT NULL DEFAULT 'product',  -- product | fabric | service
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT ON public.categories TO anon, authenticated;
GRANT ALL ON public.categories TO service_role;
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
CREATE POLICY "categories_read_all" ON public.categories FOR SELECT USING (true);
CREATE POLICY "categories_admin_write" ON public.categories FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- ============= companies =============
CREATE TABLE public.companies (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  logo_url TEXT,
  country_code TEXT REFERENCES public.countries(code),
  city TEXT,
  address TEXT,
  lat NUMERIC,
  lng NUMERIC,
  website TEXT,
  email TEXT,
  phone TEXT,
  whatsapp TEXT,
  linkedin TEXT,
  instagram TEXT,
  facebook TEXT,
  year_founded INT,
  employees_range TEXT,          -- e.g. "50-200"
  factory_size_sqm INT,
  monthly_capacity INT,
  moq INT,
  lead_time_days INT,
  products TEXT[] DEFAULT '{}',
  certifications TEXT[] DEFAULT '{}',
  export_countries TEXT[] DEFAULT '{}',
  brands_served TEXT[] DEFAULT '{}',
  business_type TEXT,            -- manufacturer, supplier, exporter, brand, etc.
  status company_status NOT NULL DEFAULT 'pending_review',
  ai_summary TEXT,
  ai_risk_score NUMERIC,         -- 0-100
  ai_quality_score NUMERIC,
  ai_trust_score NUMERIC,
  ai_sustainability_score NUMERIC,
  ai_risk_level risk_level,
  source_url TEXT,
  created_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX companies_country_idx ON public.companies(country_code);
CREATE INDEX companies_status_idx ON public.companies(status);
CREATE INDEX companies_business_type_idx ON public.companies(business_type);
CREATE INDEX companies_name_trgm ON public.companies USING gin (name gin_trgm_ops);
GRANT SELECT ON public.companies TO anon;
GRANT SELECT, INSERT, UPDATE ON public.companies TO authenticated;
GRANT ALL ON public.companies TO service_role;
ALTER TABLE public.companies ENABLE ROW LEVEL SECURITY;
CREATE POLICY "companies_read_verified_public" ON public.companies FOR SELECT
  USING (status = 'verified');
CREATE POLICY "companies_read_all_auth" ON public.companies FOR SELECT TO authenticated USING (true);
CREATE POLICY "companies_insert_analyst" ON public.companies FOR INSERT TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'analyst') OR public.has_role(auth.uid(), 'admin'));
CREATE POLICY "companies_update_admin" ON public.companies FOR UPDATE TO authenticated
  USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE TRIGGER trg_companies_updated BEFORE UPDATE ON public.companies FOR EACH ROW EXECUTE FUNCTION public.tg_set_updated_at();

-- ============= company_media =============
CREATE TABLE public.company_media (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id UUID NOT NULL REFERENCES public.companies(id) ON DELETE CASCADE,
  url TEXT NOT NULL,
  kind TEXT NOT NULL DEFAULT 'image',  -- image | video
  caption TEXT,
  sort_order INT DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT ON public.company_media TO anon, authenticated;
GRANT ALL ON public.company_media TO service_role;
ALTER TABLE public.company_media ENABLE ROW LEVEL SECURITY;
CREATE POLICY "media_read_all" ON public.company_media FOR SELECT USING (true);
CREATE POLICY "media_admin_write" ON public.company_media FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- ============= news_items =============
CREATE TABLE public.news_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  summary TEXT,
  url TEXT NOT NULL,
  source TEXT,
  category TEXT,                 -- factory_opening, trade_policy, price, etc.
  country_code TEXT REFERENCES public.countries(code),
  company_id UUID REFERENCES public.companies(id) ON DELETE SET NULL,
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX news_published_idx ON public.news_items(published_at DESC);
GRANT SELECT ON public.news_items TO anon, authenticated;
GRANT ALL ON public.news_items TO service_role;
ALTER TABLE public.news_items ENABLE ROW LEVEL SECURITY;
CREATE POLICY "news_read_all" ON public.news_items FOR SELECT USING (true);
CREATE POLICY "news_admin_write" ON public.news_items FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- ============= price_points =============
CREATE TABLE public.price_points (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  product TEXT NOT NULL,
  country_code TEXT REFERENCES public.countries(code),
  currency TEXT NOT NULL DEFAULT 'USD',
  unit TEXT NOT NULL DEFAULT 'piece',
  price_low NUMERIC,
  price_high NUMERIC,
  observed_at DATE NOT NULL DEFAULT CURRENT_DATE,
  source TEXT,
  is_estimate BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX price_product_idx ON public.price_points(product, observed_at DESC);
GRANT SELECT ON public.price_points TO anon, authenticated;
GRANT ALL ON public.price_points TO service_role;
ALTER TABLE public.price_points ENABLE ROW LEVEL SECURITY;
CREATE POLICY "prices_read_all" ON public.price_points FOR SELECT USING (true);
CREATE POLICY "prices_analyst_write" ON public.price_points FOR INSERT TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'analyst') OR public.has_role(auth.uid(), 'admin'));
CREATE POLICY "prices_admin_update" ON public.price_points FOR UPDATE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- ============= saved_searches =============
CREATE TABLE public.saved_searches (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  query TEXT NOT NULL,
  filters JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.saved_searches TO authenticated;
GRANT ALL ON public.saved_searches TO service_role;
ALTER TABLE public.saved_searches ENABLE ROW LEVEL SECURITY;
CREATE POLICY "saved_own" ON public.saved_searches FOR ALL TO authenticated
  USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

-- ============= chat_threads / chat_messages =============
CREATE TABLE public.chat_threads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  title TEXT NOT NULL DEFAULT 'New conversation',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.chat_threads TO authenticated;
GRANT ALL ON public.chat_threads TO service_role;
ALTER TABLE public.chat_threads ENABLE ROW LEVEL SECURITY;
CREATE POLICY "threads_own" ON public.chat_threads FOR ALL TO authenticated
  USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE TRIGGER trg_threads_updated BEFORE UPDATE ON public.chat_threads FOR EACH ROW EXECUTE FUNCTION public.tg_set_updated_at();

CREATE TABLE public.chat_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  thread_id UUID NOT NULL REFERENCES public.chat_threads(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role TEXT NOT NULL,     -- user | assistant | system
  parts JSONB NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX chat_messages_thread_idx ON public.chat_messages(thread_id, created_at);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.chat_messages TO authenticated;
GRANT ALL ON public.chat_messages TO service_role;
ALTER TABLE public.chat_messages ENABLE ROW LEVEL SECURITY;
CREATE POLICY "msgs_own" ON public.chat_messages FOR ALL TO authenticated
  USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

-- ============= rfqs =============
CREATE TABLE public.rfqs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  product TEXT NOT NULL,
  quantity INT,
  target_price NUMERIC,
  currency TEXT DEFAULT 'USD',
  country_code TEXT REFERENCES public.countries(code),
  moq INT,
  lead_time_days INT,
  certifications TEXT[] DEFAULT '{}',
  notes TEXT,
  status TEXT NOT NULL DEFAULT 'draft',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.rfqs TO authenticated;
GRANT ALL ON public.rfqs TO service_role;
ALTER TABLE public.rfqs ENABLE ROW LEVEL SECURITY;
CREATE POLICY "rfq_own" ON public.rfqs FOR ALL TO authenticated
  USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE TRIGGER trg_rfqs_updated BEFORE UPDATE ON public.rfqs FOR EACH ROW EXECUTE FUNCTION public.tg_set_updated_at();

-- ============= reports =============
CREATE TABLE public.reports (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  kind TEXT NOT NULL,     -- supplier | country | market | trend | pricing | competitor
  title TEXT NOT NULL,
  params JSONB DEFAULT '{}'::jsonb,
  content_url TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.reports TO authenticated;
GRANT ALL ON public.reports TO service_role;
ALTER TABLE public.reports ENABLE ROW LEVEL SECURITY;
CREATE POLICY "reports_own" ON public.reports FOR ALL TO authenticated
  USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

-- ============= audit_logs =============
CREATE TABLE public.audit_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  actor_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  action TEXT NOT NULL,
  entity TEXT NOT NULL,
  entity_id TEXT,
  meta JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT ON public.audit_logs TO authenticated;
GRANT ALL ON public.audit_logs TO service_role;
ALTER TABLE public.audit_logs ENABLE ROW LEVEL SECURITY;
CREATE POLICY "audit_admin_read" ON public.audit_logs FOR SELECT TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- Revoke permissions for extra safety
REVOKE EXECUTE ON FUNCTION public.handle_new_user() FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.tg_set_updated_at() FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) FROM PUBLIC, anon;

-- ============= SAMPLE DATA =============
INSERT INTO public.countries (code, name, region, lat, lng) VALUES
  ('IN', 'India', 'Asia', 20, 77),
  ('BD', 'Bangladesh', 'Asia', 24, 90),
  ('TR', 'Turkey', 'Europe', 39, 35),
  ('VN', 'Vietnam', 'Asia', 16, 108),
  ('CN', 'China', 'Asia', 35, 105)
ON CONFLICT (code) DO NOTHING;

INSERT INTO public.companies (slug, name, country_code, city, business_type, ai_trust_score, ai_risk_level, status) VALUES
  ('atlas-knitwear', 'Atlas Knitwear', 'TR', 'Izmir', 'manufacturer', 84, 'low', 'verified'),
  ('dhaka-denim', 'Dhaka Denim Works', 'BD', 'Dhaka', 'manufacturer', 72, 'medium', 'verified'),
  ('shanghai-linen', 'Shanghai Linen House', 'CN', 'Shanghai', 'manufacturer', 80, 'low', 'verified'),
  ('mumbai-organic', 'Mumbai Organic Mills', 'IN', 'Mumbai', 'manufacturer', 89, 'low', 'verified'),
  ('hanoi-active', 'Hanoi Active', 'VN', 'Hanoi', 'manufacturer', 82, 'low', 'verified')
ON CONFLICT (slug) DO NOTHING;

-- ============= PRE-REGISTER TEST USER =============
-- This inserts the dev@gmail.com user directly into Supabase auth.users
-- with password 'Password123!' and confirmed status, bypassing SMTP limits.
DELETE FROM auth.users WHERE email = 'dev@gmail.com';

INSERT INTO auth.users (
  instance_id, id, aud, role, email, encrypted_password, 
  email_confirmed_at, raw_app_meta_data, raw_user_meta_data, 
  created_at, updated_at, is_super_admin, phone_confirmed_at
) VALUES (
  '00000000-0000-0000-0000-000000000000',
  gen_random_uuid(),
  'authenticated',
  'authenticated',
  'dev@gmail.com',
  crypt('Password123!', gen_salt('bf')),
  now(),
  '{"provider": "email", "providers": ["email"]}',
  '{"full_name": "Developer Test User"}',
  now(),
  now(),
  false,
  now()
);


