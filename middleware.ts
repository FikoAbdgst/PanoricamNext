import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Ambil token dari cookie yang diset saat login
  const adminSession = request.cookies.get("admin_session")?.value
  const isLoginPage = request.nextUrl.pathname.startsWith("/login")
  const isAdminPage = request.nextUrl.pathname.startsWith("/admin")

  // Jika mencoba akses /admin tapi tidak punya sesi, lempar ke /login
  if (isAdminPage && !adminSession) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  // Jika sudah login tapi mencoba akses halaman /login, arahkan ke /admin
  if (isLoginPage && adminSession) {
    return NextResponse.redirect(new URL("/admin", request.url))
  }

  return NextResponse.next()
}

// Tentukan rute mana saja yang akan dicek oleh middleware ini
export const config = {
  matcher: ["/admin/:path*", "/login"],
}
