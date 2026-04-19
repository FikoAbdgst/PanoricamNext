import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { supabaseAdmin } from "@/lib/supabase"

export async function POST() {
  try {
    // Opsional: Jika menggunakan Supabase Auth penuh, sign out juga dari server
    await supabaseAdmin.auth.signOut()

    // Hapus cookie sesi
    cookies().delete("admin_session")

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
