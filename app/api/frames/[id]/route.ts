import { NextResponse } from "next/server"
import { supabaseAdmin } from "@/lib/supabase"

// PUT: Update Frame
export async function PUT(
  request: Request,
  { params }: { params: { id: string } },
) {
  try {
    const formData = await request.formData()
    const name = formData.get("name") as string
    const price = formData.get("price") as string
    const category_id = formData.get("category_id") as string
    const slug = formData.get("slug") as string
    const image = formData.get("image") as File | null

    const updateData: any = {
      name,
      slug,
      price: Number(price),
      category_id: category_id ? Number(category_id) : null,
    }

    // Jika admin mengupload gambar baru, simpan ke Supabase Storage
    if (image && image.name) {
      const fileExt = image.name.split(".").pop()
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`

      const { data: uploadData, error: uploadError } =
        await supabaseAdmin.storage.from("frames").upload(fileName, image)

      if (uploadError) throw uploadError
      updateData.image_path = uploadData.path
    }

    const { data, error } = await supabaseAdmin
      .from("frames")
      .update(updateData)
      .eq("id", params.id)
      .select()
      .single()

    if (error) throw error

    return NextResponse.json(
      { success: true, message: "Frame berhasil diupdate", data },
      { status: 200 },
    )
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 },
    )
  }
}

// DELETE: Hapus Frame
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } },
) {
  try {
    const { error } = await supabaseAdmin
      .from("frames")
      .delete()
      .eq("id", params.id)

    if (error) throw error

    return NextResponse.json(
      { success: true, message: "Frame berhasil dihapus" },
      { status: 200 },
    )
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 },
    )
  }
}
