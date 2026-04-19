import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { supabaseAdmin } from "@/lib/supabase"

export async function POST() {
  try {
    await supabaseAdmin.auth.signOut()

    // PERBAIKAN: Tambahkan await pada cookies()
    const cookieStore = await cookies()
    cookieStore.delete("admin_session")

    return NextResponse.json(
      { success: true, message: "Berhasil logout" },
      { status: 200 },
    )
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 },
    )
  }
}
