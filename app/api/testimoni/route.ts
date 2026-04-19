import { NextResponse } from "next/server"
import { supabaseAdmin } from "@/lib/supabase"

// GET: Ambil testimoni untuk ditampilkan di Landing Page dan Dashboard Admin
export async function GET() {
  try {
    const { data, error } = await supabaseAdmin
      .from("testimoni")
      .select("id, name, message, rating, emoji, created_at")
      .order("created_at", { ascending: false })

    if (error) throw error

    return NextResponse.json({ success: true, data }, { status: 200 })
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 },
    )
  }
}
