import { NextResponse } from "next/server"
import { supabaseAdmin } from "@/lib/supabase"

// DELETE: Hapus Testimoni (Oleh Admin)
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } },
) {
  try {
    const { error } = await supabaseAdmin
      .from("testimoni")
      .delete()
      .eq("id", params.id)

    if (error) throw error

    return NextResponse.json(
      { success: true, message: "Testimoni berhasil dihapus" },
      { status: 200 },
    )
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 },
    )
  }
}
