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

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const frame_id = formData.get("frame_id")
    const customer_name = formData.get("customer_name") as string
    const whatsapp_number = formData.get("whatsapp_number") as string
    const amount = formData.get("amount")
    const payment_method = formData.get("payment_method") as string
    const proofFile = formData.get("payment_proof") as File | null

    let payment_proof_path = null

    // Upload Bukti Pembayaran jika ada
    if (proofFile && proofFile.name) {
      const fileExt = proofFile.name.split(".").pop()
      const fileName = `proof-${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`

      const { data: uploadData, error: uploadError } =
        await supabaseAdmin.storage
          .from("payment_proofs") // Pastikan membuat bucket ini di Supabase
          .upload(fileName, proofFile)

      if (uploadError) throw uploadError
      payment_proof_path = uploadData.path
    }

    const { data, error } = await supabaseAdmin
      .from("transactions")
      .insert([
        {
          order_id: `TRX-${Date.now()}`,
          frame_id: Number(frame_id),
          customer_name,
          whatsapp_number,
          amount: Number(amount),
          payment_method,
          payment_proof: payment_proof_path,
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
