// config/supabase.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://qbbfpqmoytlugqqsgytq.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFiYmZwcW1veXRsdWdxcXNneXRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk1NTQ1NDksImV4cCI6MjA2NTEzMDU0OX0.gr8dZ3oivcuOYpaEqWQ2qb7xzq_rnY1kXW5qdFT0TCI";

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          username: string
          email: string
          created_at: string
        }
        Insert: {
          id?: string
          username: string
          email: string
          created_at?: string
        }
        Update: {
          id?: string
          username?: string
          email?: string
          created_at?: string
        }
      }
    }
  }
}