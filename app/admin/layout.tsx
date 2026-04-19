import React from "react"
import Sidebar from "@/components/admin/Sidebar"

export const metadata = {
  title: "Panoricam Admin",
  description: "Dashboard Admin Panoricam",
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-gray-100 min-h-screen font-['Poppins']">
      <Sidebar />
      {/* Main content dengan padding left untuk desktop */}
      <main className="lg:ml-64 min-h-screen transition-all duration-300 ease-in-out">
        {/* Content wrapper dengan padding top untuk mobile toggle button */}
        <div className="pt-16 lg:pt-0 px-4 lg:px-6">{children}</div>
      </main>
    </div>
  )
}
