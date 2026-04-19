import { NextResponse } from "next/server"
import { supabaseAdmin } from "@/lib/supabase"

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } },
) {
  try {
    const { error } = await supabaseAdmin
      .from("categories")
      .delete()
      .eq("id", params.id)

    if (error) throw error

    return NextResponse.json(
      { success: true, message: "Berhasil dihapus" },
      { status: 200 },
    )
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 },
    )
  }
}
