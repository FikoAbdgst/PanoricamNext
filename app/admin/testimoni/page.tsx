"use client"
import React, { useState } from "react"

const mockTestimoni = [
  {
    id: 1,
    name: "Sarah Johnson",
    message: "PhotoBooth ini sangat keren!",
    rating: 5,
    created_at: "14 Apr 2026",
  },
  {
    id: 2,
    name: "Michael Chen",
    message: "Frame premium benar-benar worth it.",
    rating: 4,
    created_at: "13 Apr 2026",
  },
]

export default function TestimoniPage() {
  const [testimonis, setTestimonis] = useState(mockTestimoni)
  const [search, setSearch] = useState("")

  const filtered = testimonis.filter(
    (t) =>
      t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.message.toLowerCase().includes(search.toLowerCase()),
  )

  const handleDelete = (id: number) => {
    if (confirm("Yakin ingin menghapus testimoni ini?")) {
      setTestimonis(testimonis.filter((t) => t.id !== id))
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-6">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Kelola Testimoni</h1>
          <p className="text-gray-600">Total: {testimonis.length} Testimoni</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm mb-6 p-4">
        <input
          type="text"
          placeholder="Cari testimoni..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 outline-none"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((testimoni) => (
          <div
            key={testimoni.id}
            className="bg-white rounded-xl shadow-sm border p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold">{testimoni.name}</h3>
                <span className="text-yellow-400">
                  {"★".repeat(testimoni.rating)}
                </span>
              </div>
              <p className="text-gray-600 mb-4">"{testimoni.message}"</p>
            </div>
            <div className="flex justify-between items-center border-t pt-4">
              <span className="text-xs text-gray-400">
                {testimoni.created_at}
              </span>
              <button
                onClick={() => handleDelete(testimoni.id)}
                className="text-red-500 text-sm hover:text-red-700"
              >
                Hapus
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
