import { NextResponse } from "next/server"
import { supabaseAdmin } from "@/lib/supabase"

export async function GET(request: Request) {
  try {
    // Mengambil query parameter, misal /api/transactions?status=pending
    const { searchParams } = new URL(request.url)
    const status = searchParams.get("status")

    let query = supabaseAdmin
      .from("transactions")
      .select("*, frames(name, price)") // Relasi join ke tabel frames
      .order("created_at", { ascending: false })

    if (status) {
      query = query.eq("status", status)
    }

    const { data, error } = await query

    if (error) throw error

    return NextResponse.json({ success: true, data }, { status: 200 })
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 },
    )
  }
}

// POST: Dibuat ketika user menekan tombol "Bayar/Checkout" di frontend
export async function POST(request: Request) {
  try {
    const body = await request.json()

    const { data, error } = await supabaseAdmin
      .from("transactions")
      .insert([
        {
          ...body,
          order_id: `TRX-${Date.now()}`,
          status: "pending",
        },
      ])
      .select()
      .single()

    if (error) throw error

    return NextResponse.json(
      { success: true, message: "Transaksi berhasil dibuat", data },
      { status: 201 },
    )
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 },
    )
  }
}
