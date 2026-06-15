import { createClient, type SupabaseClient } from "@supabase/supabase-js"

let client: SupabaseClient | null = null

/**
 * Retorna o cliente Supabase, criando-o apenas quando necessário (lazy).
 * Isso evita que o cliente seja instanciado durante o build/prerender,
 * quando as variáveis de ambiente podem não estar disponíveis.
 */
export function getSupabase(): SupabaseClient {
  if (client) return client

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
      "As variáveis NEXT_PUBLIC_SUPABASE_URL e NEXT_PUBLIC_SUPABASE_ANON_KEY não estão configuradas.",
    )
  }

  client = createClient(supabaseUrl, supabaseAnonKey)
  return client
}
