"use client"
import React, { useState } from "react"
import Link from "next/link"

// --- MOCK DATA ---
const stats = {
  transactions: { total: 1250, last_24h: 15, pending: 8 },
  revenue: { today: 450000, this_month: 12500000 },
  testimoni: { total: 320, average_rating: 4.8, last_24h: 3 },
}

const mockPendingTransactions = [
  {
    id: 101,
    order_id: "TRX-9981",
    frame: { name: "Wedding Classic" },
    amount: 25000,
    created_at: "10 menit yang lalu",
  },
  {
    id: 102,
    order_id: "TRX-9982",
    frame: { name: "Birthday Fun" },
    amount: 15000,
    created_at: "1 jam yang lalu",
  },
  {
    id: 103,
    order_id: "TRX-9983",
    frame: { name: "Premium Gold" },
    amount: 35000,
    created_at: "2 jam yang lalu",
  },
]

const mockRecentTransactions = [
  {
    id: 99,
    order_id: "TRX-9980",
    frame: { name: "Basic Frame" },
    amount: 0,
    status: "approved",
  },
  {
    id: 98,
    order_id: "TRX-9979",
    frame: { name: "Vintage Polar" },
    amount: 20000,
    status: "pending",
  },
  {
    id: 97,
    order_id: "TRX-9978",
    frame: { name: "Neon Vibes" },
    amount: 15000,
    status: "rejected",
  },
]

const mockRecentTestimoni = [
  {
    id: 1,
    name: "Sarah Johnson",
    message: "Hasil fotonya berkualitas tinggi dan framenya beragam!",
    rating: 5,
  },
  {
    id: 2,
    name: "Budi Santoso",
    message: "Keren banget buat acara ultah anak saya.",
    rating: 4,
  },
]

export default function AdminDashboard() {
  // State untuk data agar bisa diubah (dihapus/approve) secara UI
  const [pendingTrx, setPendingTrx] = useState(mockPendingTransactions)

  const approveTransaction = (id: number) => {
    if (!confirm("Apakah Anda yakin ingin menyetujui transaksi ini?")) return
    alert(`Transaksi ID: ${id} disetujui! (Akan connect ke backend nanti)`)
    setPendingTrx(pendingTrx.filter((trx) => trx.id !== id))
  }

  const rejectTransaction = (id: number) => {
    if (!confirm("Apakah Anda yakin ingin menolak transaksi ini?")) return
    alert(`Transaksi ID: ${id} ditolak!`)
    setPendingTrx(pendingTrx.filter((trx) => trx.id !== id))
  }

  // Format Tanggal Hari Ini
  const todayDate = new Date().toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="flex-1">
        <header className="bg-white shadow rounded-b-lg lg:rounded-none mb-6">
          <div className="py-4 px-4 md:px-6 lg:px-8">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
              Dashboard
            </h1>
            <p className="text-gray-600 text-xs sm:text-sm mt-1">{todayDate}</p>
          </div>
        </header>

        <main className="pb-8">
          {/* Statistik Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 mb-8">
            {/* Total Transaksi */}
            <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-blue-100 text-blue-600 flex-shrink-0">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    ></path>
                  </svg>
                </div>
                <div className="ml-4 min-w-0 flex-1">
                  <p className="text-sm font-medium text-gray-500 truncate">
                    Total Transaksi
                  </p>
                  <p className="text-2xl font-bold text-gray-900">
                    {stats.transactions.total.toLocaleString("id-ID")}
                  </p>
                  <p className="text-xs font-medium text-blue-600 mt-1">
                    24 jam: +{stats.transactions.last_24h}
                  </p>
                </div>
              </div>
            </div>

            {/* Pending Transaksi */}
            <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-yellow-100 text-yellow-600 flex-shrink-0">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <div className="ml-4 min-w-0 flex-1">
                  <p className="text-sm font-medium text-gray-500 truncate">
                    Menunggu Approve
                  </p>
                  <p className="text-2xl font-bold text-gray-900">
                    {stats.transactions.pending}
                  </p>
                  <p className="text-xs font-medium text-yellow-600 mt-1">
                    Perlu ditinjau
                  </p>
                </div>
              </div>
            </div>

            {/* Revenue */}
            <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-green-100 text-green-600 flex-shrink-0">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                    ></path>
                  </svg>
                </div>
                <div className="ml-4 min-w-0 flex-1">
                  <p className="text-sm font-medium text-gray-500 truncate">
                    Revenue Hari Ini
                  </p>
                  <p className="text-xl font-bold text-gray-900">
                    Rp {stats.revenue.today.toLocaleString("id-ID")}
                  </p>
                  <p className="text-xs font-medium text-green-600 mt-1 truncate">
                    Bulan ini: Rp{" "}
                    {stats.revenue.this_month.toLocaleString("id-ID")}
                  </p>
                </div>
              </div>
            </div>

            {/* Testimoni */}
            <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-purple-100 text-purple-600 flex-shrink-0">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    ></path>
                  </svg>
                </div>
                <div className="ml-4 min-w-0 flex-1">
                  <p className="text-sm font-medium text-gray-500 truncate">
                    Testimoni
                  </p>
                  <p className="text-2xl font-bold text-gray-900">
                    {stats.testimoni.total}
                  </p>
                  <p className="text-xs font-medium text-purple-600 mt-1">
                    Rating: {stats.testimoni.average_rating}/5 ⭐
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-8">
            {/* Transaksi Pending */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <h3 className="text-lg font-bold text-gray-800">
                  Transaksi Menunggu Approve
                </h3>
                <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-3 py-1 rounded-full self-start sm:self-auto">
                  {pendingTrx.length} pending
                </span>
              </div>
              <div className="p-6">
                {pendingTrx.length > 0 ? (
                  <div className="space-y-4">
                    {pendingTrx.map((transaction) => (
                      <div
                        key={transaction.id}
                        className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 bg-yellow-50/50 rounded-xl border border-yellow-100 gap-4"
                      >
                        <div className="min-w-0 flex-1">
                          <p className="font-bold text-gray-900">
                            #{transaction.order_id}
                          </p>
                          <p className="text-sm text-gray-600 truncate">
                            {transaction.frame.name}
                          </p>
                          <p className="text-xs text-gray-400 mt-1">
                            {transaction.created_at}
                          </p>
                        </div>
                        <div className="flex flex-col sm:text-right gap-3">
                          <p className="font-bold text-gray-900">
                            Rp {transaction.amount.toLocaleString("id-ID")}
                          </p>
                          <div className="flex flex-row gap-2">
                            <button
                              onClick={() => approveTransaction(transaction.id)}
                              className="px-4 py-1.5 bg-green-600 text-white text-sm font-semibold rounded-lg hover:bg-green-700 transition-colors"
                            >
                              Approve
                            </button>
                            <button
                              onClick={() => rejectTransaction(transaction.id)}
                              className="px-4 py-1.5 bg-red-600 text-white text-sm font-semibold rounded-lg hover:bg-red-700 transition-colors"
                            >
                              Reject
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <p className="mt-3 text-sm text-gray-500 font-medium">
                      Tidak ada transaksi yang menunggu approve
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Activity 24 Jam */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <h3 className="text-lg font-bold text-gray-800">
                  Aktivitas 24 Jam Terakhir
                </h3>
                <span className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full self-start sm:self-auto">
                  {stats.transactions.last_24h + stats.testimoni.last_24h}{" "}
                  aktivitas
                </span>
              </div>
              <div className="p-6">
                <div className="space-y-6">
                  {/* Recent Transactions */}
                  {mockRecentTransactions.map((transaction) => (
                    <div
                      key={transaction.id}
                      className="flex items-start space-x-4"
                    >
                      <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg
                          className="w-4 h-4 text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                          ></path>
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-gray-900">
                          Transaksi baru #{transaction.order_id}
                        </p>
                        <p className="text-sm text-gray-500 mt-0.5">
                          {transaction.frame.name} - Rp{" "}
                          {transaction.amount.toLocaleString("id-ID")}
                        </p>
                      </div>
                      <span
                        className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider
                                        ${transaction.status === "approved" ? "bg-green-100 text-green-700" : ""}
                                        ${transaction.status === "pending" ? "bg-yellow-100 text-yellow-700" : ""}
                                        ${transaction.status === "rejected" ? "bg-red-100 text-red-700" : ""}`}
                      >
                        {transaction.status}
                      </span>
                    </div>
                  ))}

                  {/* Recent Testimoni */}
                  {mockRecentTestimoni.map((testimoni) => (
                    <div
                      key={testimoni.id}
                      className="flex items-start space-x-4"
                    >
                      <div className="w-8 h-8 bg-purple-50 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg
                          className="w-4 h-4 text-purple-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                          ></path>
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-gray-900">
                          Testimoni baru dari {testimoni.name}
                        </p>
                        <p className="text-sm text-gray-500 mt-0.5 line-clamp-1">
                          "{testimoni.message}"
                        </p>
                      </div>
                      <div className="flex text-yellow-400 text-xs">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span
                            key={i}
                            className={
                              i < testimoni.rating ? "" : "text-gray-300"
                            }
                          >
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100">
              <h3 className="text-lg font-bold text-gray-800">
                Aksi Cepat (Quick Actions)
              </h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link
                  href="/admin/categories"
                  className="block p-5 bg-purple-50 hover:bg-purple-100 border border-purple-100 rounded-xl transition-colors group"
                >
                  <h3 className="font-bold text-lg text-purple-900 group-hover:text-purple-700">
                    Kelola Kategori
                  </h3>
                  <p className="text-purple-600/80 text-sm mt-2">
                    Tambah, edit, dan hapus kategori frame.
                  </p>
                </Link>
                <Link
                  href="/admin/frames"
                  className="block p-5 bg-blue-50 hover:bg-blue-100 border border-blue-100 rounded-xl transition-colors group"
                >
                  <h3 className="font-bold text-lg text-blue-900 group-hover:text-blue-700">
                    Kelola Frame
                  </h3>
                  <p className="text-blue-600/80 text-sm mt-2">
                    Tambah dan desain frame photobooth baru.
                  </p>
                </Link>
                <Link
                  href="/admin/testimoni"
                  className="block p-5 bg-green-50 hover:bg-green-100 border border-green-100 rounded-xl transition-colors group"
                >
                  <h3 className="font-bold text-lg text-green-900 group-hover:text-green-700">
                    Kelola Testimoni
                  </h3>
                  <p className="text-green-600/80 text-sm mt-2">
                    Moderasi testimoni dari pengguna.
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
