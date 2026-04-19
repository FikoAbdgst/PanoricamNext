"use client"
import React, { useState } from "react"
import Link from "next/link"

const mockFrames = [
  {
    id: 1,
    name: "Wedding Classic",
    category: "Wedding",
    price: 25000,
    slug: "wedding-classic",
  },
  {
    id: 2,
    name: "Basic Frame",
    category: "Basic",
    price: 0,
    slug: "basic-frame",
  },
  {
    id: 3,
    name: "Birthday Fun",
    category: "Birthday",
    price: 15000,
    slug: "birthday-fun",
  },
]

export default function FramesPage() {
  const [frames, setFrames] = useState(mockFrames)
  const [search, setSearch] = useState("")

  const filtered = frames.filter((f) =>
    f.name.toLowerCase().includes(search.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-6">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Kelola Frame</h1>
          <p className="text-gray-600">Total: {frames.length} Frame</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700">
          + Tambah Frame Baru
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm mb-6 p-4">
        <input
          type="text"
          placeholder="Cari frame..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-lg outline-none"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((frame) => (
          <div
            key={frame.id}
            className="bg-white rounded-xl shadow-sm border overflow-hidden"
          >
            <div className="h-48 bg-gray-200 flex items-center justify-center relative">
              <span className="text-4xl">🖼️</span>
              <span
                className={`absolute top-2 right-2 px-2 py-1 text-xs rounded-full text-white ${frame.price === 0 ? "bg-green-500" : "bg-blue-500"}`}
              >
                {frame.price === 0
                  ? "Gratis"
                  : `Rp ${frame.price.toLocaleString()}`}
              </span>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg">{frame.name}</h3>
              <p className="text-sm text-gray-500 mb-4">{frame.category}</p>
              <div className="flex gap-2">
                <button className="flex-1 bg-blue-100 text-blue-700 py-2 rounded text-sm hover:bg-blue-200">
                  Edit
                </button>
                <button className="flex-1 bg-red-100 text-red-700 py-2 rounded text-sm hover:bg-red-200">
                  Hapus
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
