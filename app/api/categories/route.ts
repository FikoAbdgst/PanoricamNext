import { supabaseAdmin } from "@/lib/supabase"
import { NextResponse } from "next/server"

// GET: Mengambil semua kategori
export async function GET() {
  try {
    const { data, error } = await supabaseAdmin
      .from("categories")
      .select("*")
      .order("id", { ascending: true })

    if (error) throw error

    return NextResponse.json({ success: true, data }, { status: 200 })
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 },
    )
  }
}

// POST: Membuat kategori baru
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, description } = body

    // Validasi sederhana
    if (!name) {
      return NextResponse.json(
        { success: false, message: "Nama kategori wajib diisi" },
        { status: 400 },
      )
    }

    const { data, error } = await supabaseAdmin
      .from("categories")
      .insert([{ name, description }])
      .select()
      .single()

    if (error) throw error

    return NextResponse.json(
      { success: true, message: "Kategori berhasil dibuat", data },
      { status: 201 },
    )
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 },
    )
  }
}
