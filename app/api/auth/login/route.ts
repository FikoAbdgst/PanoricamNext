import { NextResponse } from "next/server"
import { supabaseAdmin } from "@/lib/supabase"
import { cookies } from "next/headers"

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()

    // Menggunakan Supabase Auth untuk verifikasi email & password
    const { data, error } = await supabaseAdmin.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      return NextResponse.json(
        { success: false, message: "Email atau password salah!" },
        { status: 401 },
      )
    }

    // PERBAIKAN: Tambahkan await pada cookies()
    const cookieStore = await cookies()
    cookieStore.set("admin_session", data.session.access_token, {
      httpOnly: true, // Sangat aman, tidak bisa dicuri lewat Javascript (XSS)
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24, // 1 hari
      path: "/",
    })

    return NextResponse.json(
      { success: true, message: "Login berhasil", user: data.user },
      { status: 200 },
    )
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 },
    )
  }
}
