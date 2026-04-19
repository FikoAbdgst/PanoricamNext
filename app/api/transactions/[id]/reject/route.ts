import { NextResponse } from "next/server"
import { supabaseAdmin } from "@/lib/supabase"

export async function POST(
  request: Request,
  { params }: { params: { id: string } },
) {
  try {
    const { data, error } = await supabaseAdmin
      .from("transactions")
      .update({ status: "rejected" })
      .eq("id", params.id)
      .select()
      .single()

    if (error) throw error

    return NextResponse.json(
      {
        success: true,
        message: `Transaksi #${data.order_id} telah ditolak!`,
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
