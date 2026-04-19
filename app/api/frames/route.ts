import { NextResponse } from "next/server"
import { supabaseAdmin } from "@/lib/supabase"

// GET: Ambil semua frame beserta nama kategorinya
export async function GET() {
  try {
    const { data, error } = await supabaseAdmin
      .from("frames")
      .select(
        `
        id, name, slug, price, is_free, image_path,
        category:categories(id, name)
      `,
      ) // Melakukan JOIN ke tabel categories
      .order("id", { ascending: false })

    if (error) throw error

    return NextResponse.json({ success: true, data }, { status: 200 })
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 },
    )
  }
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData()

    // Ambil data teks
    const name = formData.get("name") as string
    const price = formData.get("price") as string
    const category_id = formData.get("category_id") as string
    const slug = formData.get("slug") as string

    // Ambil file gambar
    const image = formData.get("image") as File | null
    let image_path = null

    // Jika ada file gambar, upload ke Supabase Storage (Bucket bernama 'frames')
    if (image && image.name) {
      const fileExt = image.name.split(".").pop()
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`

      const { data: uploadData, error: uploadError } =
        await supabaseAdmin.storage.from("frames").upload(fileName, image)

      if (uploadError) throw uploadError
      image_path = uploadData.path // simpan path-nya ke database
    }

    // Insert data ke tabel PostgreSQL
    const { data, error } = await supabaseAdmin
      .from("frames")
      .insert([
        {
          name,
          slug,
          price: Number(price),
          category_id: category_id ? Number(category_id) : null,
          image_path,
        },
      ])
      .select()
      .single()

    if (error) throw error

    return NextResponse.json(
      { success: true, message: "Frame berhasil ditambahkan", data },
      { status: 201 },
    )
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 },
    )
  }
}
