"use client"
import React, { useState, useMemo } from "react"

// Mock Data Transaksi
const mockTransactions = [
  {
    id: 1,
    order_id: "TRX-1001",
    customer_name: "Fiko Abdigusti",
    whatsapp_number: "081234567890",
    frame: { name: "Wedding Classic" },
    amount: 25000,
    payment_method: "qris",
    status: "pending",
    created_at: "14 Apr 2026, 10:30",
  },
  {
    id: 2,
    order_id: "TRX-1002",
    customer_name: "Sarah Johnson",
    whatsapp_number: "089876543210",
    frame: { name: "Basic Frame" },
    amount: 0,
    payment_method: "bank_transfer",
    status: "approved",
    created_at: "14 Apr 2026, 09:15",
  },
  {
    id: 3,
    order_id: "TRX-1003",
    customer_name: "Budi Santoso",
    whatsapp_number: "",
    frame: { name: "Neon Vibes" },
    amount: 15000,
    payment_method: "qris",
    status: "rejected",
    created_at: "13 Apr 2026, 16:45",
  },
]

export default function TransactionsPage() {
  const [transactions, setTransactions] = useState(mockTransactions)
  const [filterStatus, setFilterStatus] = useState<
    "all" | "pending" | "approved" | "rejected"
  >("all")
  const [selectedTrx, setSelectedTrx] = useState<any>(null)

  // Perhitungan dinamis jumlah status
  const counts = {
    total: transactions.length,
    pending: transactions.filter((t) => t.status === "pending").length,
    approved: transactions.filter((t) => t.status === "approved").length,
    rejected: transactions.filter((t) => t.status === "rejected").length,
  }

  const filteredTransactions = useMemo(() => {
    if (filterStatus === "all") return transactions
    return transactions.filter((t) => t.status === filterStatus)
  }, [transactions, filterStatus])

  const updateStatus = (id: number, newStatus: string) => {
    if (!confirm(`Yakin ingin mengubah status menjadi ${newStatus}?`)) return
    setTransactions(
      transactions.map((t) => (t.id === id ? { ...t, status: newStatus } : t)),
    )
    setSelectedTrx(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-6">
      <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Kelola Transaksi
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Pantau dan kelola semua transaksi pembayaran
          </p>
        </div>
        <div className="bg-white rounded-lg px-4 py-2 shadow-sm border text-center sm:text-left">
          <span className="text-sm text-gray-500">Total Transaksi</span>
          <div className="text-xl sm:text-2xl font-bold text-gray-900">
            {counts.total}
          </div>
        </div>
      </div>

      {/* Filter Cards */}
      <div className="bg-white rounded-xl shadow-sm mb-6 p-4 sm:p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Filter Status
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {[
            {
              id: "all",
              label: "Semua",
              count: counts.total,
              icon: "📊",
              activeClass: "from-blue-400 to-purple-300 text-white",
              defaultClass: "bg-gray-50 hover:bg-gray-100 text-gray-700",
            },
            {
              id: "pending",
              label: "Pending",
              count: counts.pending,
              icon: "⏳",
              activeClass: "from-yellow-400 to-orange-300 text-white",
              defaultClass: "bg-gray-50 hover:bg-yellow-50 text-gray-700",
            },
            {
              id: "approved",
              label: "Approved",
              count: counts.approved,
              icon: "✅",
              activeClass: "from-green-400 to-emerald-300 text-white",
              defaultClass: "bg-gray-50 hover:bg-green-50 text-gray-700",
            },
            {
              id: "rejected",
              label: "Rejected",
              count: counts.rejected,
              icon: "❌",
              activeClass: "from-red-400 to-pink-300 text-white",
              defaultClass: "bg-gray-50 hover:bg-red-50 text-gray-700",
            },
          ].map((f) => (
            <button
              key={f.id}
              onClick={() => setFilterStatus(f.id as any)}
              className={`group relative overflow-hidden rounded-xl p-4 transition-all duration-300 text-left ${filterStatus === f.id ? `bg-gradient-to-br shadow-lg ${f.activeClass}` : f.defaultClass}`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs sm:text-sm font-medium opacity-90 mb-1">
                    {f.label}
                  </div>
                  <div className="text-lg sm:text-xl font-bold">{f.count}</div>
                </div>
                <div className="text-2xl opacity-75">{f.icon}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Desktop Table View */}
      <div className="hidden lg:block bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
            <tr>
              {[
                "Order ID",
                "Customer",
                "Frame",
                "Amount",
                "Method",
                "Status",
                "Actions",
              ].map((h) => (
                <th
                  key={h}
                  className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredTransactions.map((trx) => (
              <tr key={trx.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3 whitespace-nowrap text-sm font-mono text-gray-900">
                  {trx.order_id}
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {trx.customer_name}
                  </div>
                  <div className="text-xs text-gray-500">
                    {trx.whatsapp_number}
                  </div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                  🖼️ {trx.frame.name}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm font-semibold text-gray-900">
                  Rp {trx.amount.toLocaleString()}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-xs">
                  <span
                    className={`px-2 py-1 rounded-full ${trx.payment_method === "bank_transfer" ? "bg-blue-100 text-blue-800" : "bg-purple-100 text-purple-800"}`}
                  >
                    {trx.payment_method.toUpperCase()}
                  </span>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-xs font-semibold">
                  {trx.status === "pending" && (
                    <span className="px-2 py-1 rounded-full bg-yellow-100 text-yellow-800">
                      ⏳ Pending
                    </span>
                  )}
                  {trx.status === "approved" && (
                    <span className="px-2 py-1 rounded-full bg-green-100 text-green-800">
                      ✅ Approved
                    </span>
                  )}
                  {trx.status === "rejected" && (
                    <span className="px-2 py-1 rounded-full bg-red-100 text-red-800">
                      ❌ Rejected
                    </span>
                  )}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium space-x-2">
                  <button
                    onClick={() => setSelectedTrx(trx)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Detail
                  </button>
                  {trx.status === "pending" && (
                    <>
                      <button
                        onClick={() => updateStatus(trx.id, "approved")}
                        className="text-green-600 hover:text-green-800"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => updateStatus(trx.id, "rejected")}
                        className="text-red-600 hover:text-red-800"
                      >
                        Reject
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal Detail (React State) */}
      {selectedTrx && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b pb-2">
              Detail Transaksi {selectedTrx.order_id}
            </h3>
            <div className="space-y-2 mb-6 text-gray-700">
              <p>
                <strong>Customer:</strong> {selectedTrx.customer_name}
              </p>
              <p>
                <strong>Frame:</strong> {selectedTrx.frame.name}
              </p>
              <p>
                <strong>Jumlah:</strong> Rp{" "}
                {selectedTrx.amount.toLocaleString()}
              </p>
              <p>
                <strong>Tanggal:</strong> {selectedTrx.created_at}
              </p>
            </div>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setSelectedTrx(null)}
                className="px-4 py-2 bg-gray-200 rounded text-gray-800"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
