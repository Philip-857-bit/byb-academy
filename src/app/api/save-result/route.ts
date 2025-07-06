import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
  try {
    const { username, email, xHandle, score, time } = await req.json();

    if (!username || !email || !xHandle || !score || !time) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const { data, error } = await supabase
      .from("leaderboard")
      .insert([{ username, email, xHandle, score, time }]);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ message: "Success", data }, { status: 200 });
  } catch (err) {
    console.error("API Error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}