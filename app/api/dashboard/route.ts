import { NextResponse } from "next/server"
import { supabaseAdmin } from "@/lib/supabase"

export async function GET() {
  try {
    // 1. Ambil data Transaksi
    const { data: trxData, error: trxError } = await supabaseAdmin
      .from("transactions")
      .select("amount, status, created_at")
    if (trxError) throw trxError

    // 2. Ambil data Testimoni
    const { data: testData, error: testError } = await supabaseAdmin
      .from("testimoni")
      .select("rating")
    if (testError) throw testError

    // Hitung Statistik
    const totalTransactions = trxData.length
    const pendingTransactions = trxData.filter(
      (t) => t.status === "pending",
    ).length

    // Hitung Revenue (Total dari transaksi yang 'approved')
    const revenue = trxData
      .filter((t) => t.status === "approved")
      .reduce((sum, t) => sum + (Number(t.amount) || 0), 0)

    // Hitung rata-rata rating testimoni
    const avgRating =
      testData.length > 0
        ? (
            testData.reduce((sum, t) => sum + t.rating, 0) / testData.length
          ).toFixed(1)
        : 0

    const stats = {
      transactions: { total: totalTransactions, pending: pendingTransactions },
      revenue: { total: revenue },
      testimoni: { total: testData.length, average_rating: avgRating },
    }

    return NextResponse.json({ success: true, data: stats }, { status: 200 })
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 },
    )
  }
}
