import { NextResponse } from "next/server"
import { supabaseAdmin } from "@/lib/supabase"

export async function POST(
  request: Request,
  { params }: { params: { id: string } },
) {
  try {
    const transactionId = params.id

    // Update status transaksi menjadi approved
    const { data, error } = await supabaseAdmin
      .from("transactions")
      .update({ status: "approved", approved_at: new Date().toISOString() })
      .eq("id", transactionId)
      .select()
      .single()

    if (error) throw error

    return NextResponse.json(
      {
        success: true,
        message: `Transaksi #${data.order_id} berhasil disetujui!`,
      },
      { status: 200 },
    )
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 },
    )
  }
}
