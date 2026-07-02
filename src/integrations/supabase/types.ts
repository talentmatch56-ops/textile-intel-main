export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      audit_logs: {
        Row: {
          action: string
          actor_id: string | null
          created_at: string
          entity: string
          entity_id: string | null
          id: string
          meta: Json | null
        }
        Insert: {
          action: string
          actor_id?: string | null
          created_at?: string
          entity: string
          entity_id?: string | null
          id?: string
          meta?: Json | null
        }
        Update: {
          action?: string
          actor_id?: string | null
          created_at?: string
          entity?: string
          entity_id?: string | null
          id?: string
          meta?: Json | null
        }
        Relationships: []
      }
      categories: {
        Row: {
          created_at: string
          id: string
          kind: string
          name: string
          parent_id: string | null
          slug: string
        }
        Insert: {
          created_at?: string
          id?: string
          kind?: string
          name: string
          parent_id?: string | null
          slug: string
        }
        Update: {
          created_at?: string
          id?: string
          kind?: string
          name?: string
          parent_id?: string | null
          slug?: string
        }
        Relationships: [
          {
            foreignKeyName: "categories_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
      chat_messages: {
        Row: {
          created_at: string
          id: string
          parts: Json
          role: string
          thread_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          parts: Json
          role: string
          thread_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          parts?: Json
          role?: string
          thread_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "chat_messages_thread_id_fkey"
            columns: ["thread_id"]
            isOneToOne: false
            referencedRelation: "chat_threads"
            referencedColumns: ["id"]
          },
        ]
      }
      chat_threads: {
        Row: {
          created_at: string
          id: string
          title: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          title?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          title?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      companies: {
        Row: {
          address: string | null
          ai_quality_score: number | null
          ai_risk_level: Database["public"]["Enums"]["risk_level"] | null
          ai_risk_score: number | null
          ai_summary: string | null
          ai_sustainability_score: number | null
          ai_trust_score: number | null
          brands_served: string[] | null
          business_type: string | null
          certifications: string[] | null
          city: string | null
          country_code: string | null
          created_at: string
          created_by: string | null
          email: string | null
          employees_range: string | null
          export_countries: string[] | null
          facebook: string | null
          factory_size_sqm: number | null
          id: string
          instagram: string | null
          lat: number | null
          lead_time_days: number | null
          linkedin: string | null
          lng: number | null
          logo_url: string | null
          monthly_capacity: number | null
          moq: number | null
          name: string
          phone: string | null
          products: string[] | null
          slug: string
          source_url: string | null
          status: Database["public"]["Enums"]["company_status"]
          updated_at: string
          website: string | null
          whatsapp: string | null
          year_founded: number | null
        }
        Insert: {
          address?: string | null
          ai_quality_score?: number | null
          ai_risk_level?: Database["public"]["Enums"]["risk_level"] | null
          ai_risk_score?: number | null
          ai_summary?: string | null
          ai_sustainability_score?: number | null
          ai_trust_score?: number | null
          brands_served?: string[] | null
          business_type?: string | null
          certifications?: string[] | null
          city?: string | null
          country_code?: string | null
          created_at?: string
          created_by?: string | null
          email?: string | null
          employees_range?: string | null
          export_countries?: string[] | null
          facebook?: string | null
          factory_size_sqm?: number | null
          id?: string
          instagram?: string | null
          lat?: number | null
          lead_time_days?: number | null
          linkedin?: string | null
          lng?: number | null
          logo_url?: string | null
          monthly_capacity?: number | null
          moq?: number | null
          name: string
          phone?: string | null
          products?: string[] | null
          slug: string
          source_url?: string | null
          status?: Database["public"]["Enums"]["company_status"]
          updated_at?: string
          website?: string | null
          whatsapp?: string | null
          year_founded?: number | null
        }
        Update: {
          address?: string | null
          ai_quality_score?: number | null
          ai_risk_level?: Database["public"]["Enums"]["risk_level"] | null
          ai_risk_score?: number | null
          ai_summary?: string | null
          ai_sustainability_score?: number | null
          ai_trust_score?: number | null
          brands_served?: string[] | null
          business_type?: string | null
          certifications?: string[] | null
          city?: string | null
          country_code?: string | null
          created_at?: string
          created_by?: string | null
          email?: string | null
          employees_range?: string | null
          export_countries?: string[] | null
          facebook?: string | null
          factory_size_sqm?: number | null
          id?: string
          instagram?: string | null
          lat?: number | null
          lead_time_days?: number | null
          linkedin?: string | null
          lng?: number | null
          logo_url?: string | null
          monthly_capacity?: number | null
          moq?: number | null
          name?: string
          phone?: string | null
          products?: string[] | null
          slug?: string
          source_url?: string | null
          status?: Database["public"]["Enums"]["company_status"]
          updated_at?: string
          website?: string | null
          whatsapp?: string | null
          year_founded?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "companies_country_code_fkey"
            columns: ["country_code"]
            isOneToOne: false
            referencedRelation: "countries"
            referencedColumns: ["code"]
          },
        ]
      }
      company_media: {
        Row: {
          caption: string | null
          company_id: string
          created_at: string
          id: string
          kind: string
          sort_order: number | null
          url: string
        }
        Insert: {
          caption?: string | null
          company_id: string
          created_at?: string
          id?: string
          kind?: string
          sort_order?: number | null
          url: string
        }
        Update: {
          caption?: string | null
          company_id?: string
          created_at?: string
          id?: string
          kind?: string
          sort_order?: number | null
          url?: string
        }
        Relationships: [
          {
            foreignKeyName: "company_media_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      countries: {
        Row: {
          code: string
          created_at: string
          lat: number | null
          lng: number | null
          name: string
          region: string | null
        }
        Insert: {
          code: string
          created_at?: string
          lat?: number | null
          lng?: number | null
          name: string
          region?: string | null
        }
        Update: {
          code?: string
          created_at?: string
          lat?: number | null
          lng?: number | null
          name?: string
          region?: string | null
        }
        Relationships: []
      }
      news_items: {
        Row: {
          category: string | null
          company_id: string | null
          country_code: string | null
          created_at: string
          id: string
          published_at: string | null
          source: string | null
          summary: string | null
          title: string
          url: string
        }
        Insert: {
          category?: string | null
          company_id?: string | null
          country_code?: string | null
          created_at?: string
          id?: string
          published_at?: string | null
          source?: string | null
          summary?: string | null
          title: string
          url: string
        }
        Update: {
          category?: string | null
          company_id?: string | null
          country_code?: string | null
          created_at?: string
          id?: string
          published_at?: string | null
          source?: string | null
          summary?: string | null
          title?: string
          url?: string
        }
        Relationships: [
          {
            foreignKeyName: "news_items_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "news_items_country_code_fkey"
            columns: ["country_code"]
            isOneToOne: false
            referencedRelation: "countries"
            referencedColumns: ["code"]
          },
        ]
      }
      price_points: {
        Row: {
          country_code: string | null
          created_at: string
          currency: string
          id: string
          is_estimate: boolean
          observed_at: string
          price_high: number | null
          price_low: number | null
          product: string
          source: string | null
          unit: string
        }
        Insert: {
          country_code?: string | null
          created_at?: string
          currency?: string
          id?: string
          is_estimate?: boolean
          observed_at?: string
          price_high?: number | null
          price_low?: number | null
          product: string
          source?: string | null
          unit?: string
        }
        Update: {
          country_code?: string | null
          created_at?: string
          currency?: string
          id?: string
          is_estimate?: boolean
          observed_at?: string
          price_high?: number | null
          price_low?: number | null
          product?: string
          source?: string | null
          unit?: string
        }
        Relationships: [
          {
            foreignKeyName: "price_points_country_code_fkey"
            columns: ["country_code"]
            isOneToOne: false
            referencedRelation: "countries"
            referencedColumns: ["code"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          company: string | null
          created_at: string
          email: string | null
          full_name: string | null
          id: string
          updated_at: string
        }
        Insert: {
          avatar_url?: string | null
          company?: string | null
          created_at?: string
          email?: string | null
          full_name?: string | null
          id: string
          updated_at?: string
        }
        Update: {
          avatar_url?: string | null
          company?: string | null
          created_at?: string
          email?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string
        }
        Relationships: []
      }
      reports: {
        Row: {
          content_url: string | null
          created_at: string
          id: string
          kind: string
          params: Json | null
          status: string
          title: string
          user_id: string
        }
        Insert: {
          content_url?: string | null
          created_at?: string
          id?: string
          kind: string
          params?: Json | null
          status?: string
          title: string
          user_id: string
        }
        Update: {
          content_url?: string | null
          created_at?: string
          id?: string
          kind?: string
          params?: Json | null
          status?: string
          title?: string
          user_id?: string
        }
        Relationships: []
      }
      rfqs: {
        Row: {
          certifications: string[] | null
          country_code: string | null
          created_at: string
          currency: string | null
          id: string
          lead_time_days: number | null
          moq: number | null
          notes: string | null
          product: string
          quantity: number | null
          status: string
          target_price: number | null
          updated_at: string
          user_id: string
        }
        Insert: {
          certifications?: string[] | null
          country_code?: string | null
          created_at?: string
          currency?: string | null
          id?: string
          lead_time_days?: number | null
          moq?: number | null
          notes?: string | null
          product: string
          quantity?: number | null
          status?: string
          target_price?: number | null
          updated_at?: string
          user_id: string
        }
        Update: {
          certifications?: string[] | null
          country_code?: string | null
          created_at?: string
          currency?: string | null
          id?: string
          lead_time_days?: number | null
          moq?: number | null
          notes?: string | null
          product?: string
          quantity?: number | null
          status?: string
          target_price?: number | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "rfqs_country_code_fkey"
            columns: ["country_code"]
            isOneToOne: false
            referencedRelation: "countries"
            referencedColumns: ["code"]
          },
        ]
      }
      saved_searches: {
        Row: {
          created_at: string
          filters: Json | null
          id: string
          name: string
          query: string
          user_id: string
        }
        Insert: {
          created_at?: string
          filters?: Json | null
          id?: string
          name: string
          query: string
          user_id: string
        }
        Update: {
          created_at?: string
          filters?: Json | null
          id?: string
          name?: string
          query?: string
          user_id?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      show_limit: { Args: never; Returns: number }
      show_trgm: { Args: { "": string }; Returns: string[] }
    }
    Enums: {
      app_role: "admin" | "analyst" | "viewer"
      company_status: "pending_review" | "verified" | "rejected" | "archived"
      risk_level: "low" | "medium" | "high"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "analyst", "viewer"],
      company_status: ["pending_review", "verified", "rejected", "archived"],
      risk_level: ["low", "medium", "high"],
    },
  },
} as const
