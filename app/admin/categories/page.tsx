"use client"
import React, { useState } from "react"

// Mock Data
const mockCategories = [
  { id: 1, name: "Wedding", description: "Frame khusus acara pernikahan" },
  {
    id: 2,
    name: "Birthday",
    description: "Frame penuh warna untuk ulang tahun",
  },
  { id: 3, name: "Basic", description: "Frame standar dan minimalis" },
]

export default function CategoriesPage() {
  const [categories, setCategories] = useState(mockCategories)
  const [search, setSearch] = useState("")

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editData, setEditData] = useState<any>(null)

  const filtered = categories.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase()),
  )

  const handleDelete = (id: number) => {
    if (confirm("Yakin ingin menghapus kategori ini?")) {
      setCategories(categories.filter((c) => c.id !== id))
    }
  }

  const openModal = (data: any = null) => {
    setEditData(data) // Jika null berarti Tambah Baru, jika ada isinya berarti Edit
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setEditData(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-6">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Kelola Kategori</h1>
          <p className="text-gray-600">Total: {categories.length} Kategori</p>
        </div>
        <button
          onClick={() => openModal()}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors shadow-md"
        >
          + Tambah Kategori
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm mb-6 p-4">
        <input
          type="text"
          placeholder="Cari kategori..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      {/* Tabel Kategori */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                ID
              </th>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                Nama Kategori
              </th>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                Deskripsi
              </th>
              <th className="px-6 py-4 text-right text-xs font-bold text-gray-600 uppercase tracking-wider">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filtered.map((cat) => (
              <tr key={cat.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  #{cat.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-purple-700">
                  {cat.name}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {cat.description}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-3">
                  <button
                    onClick={() => openModal(cat)}
                    className="text-blue-600 hover:text-blue-900 bg-blue-50 px-3 py-1 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(cat.id)}
                    className="text-red-600 hover:text-red-900 bg-red-50 px-3 py-1 rounded"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal Tambah/Edit */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">
              {editData ? "Edit Kategori" : "Tambah Kategori Baru"}
            </h3>
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">
                  Nama Kategori
                </label>
                <input
                  type="text"
                  defaultValue={editData?.name}
                  className="w-full border rounded-lg px-3 py-2 outline-none focus:border-purple-500"
                  placeholder="Misal: Graduation"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">
                  Deskripsi
                </label>
                <textarea
                  defaultValue={editData?.description}
                  className="w-full border rounded-lg px-3 py-2 outline-none focus:border-purple-500"
                  rows={3}
                  placeholder="Deskripsi singkat..."
                ></textarea>
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-100 rounded-lg text-gray-800 hover:bg-gray-200"
              >
                Batal
              </button>
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
