import { NextRequest, NextResponse } from "next/server";

export const config = {
  runtime: "edge",
  regions: ["iad1"],
};

export default async (req: NextRequest) => {
  // 调用失败...
  const content = await fetch(
    "https://api.uomg.com/api/rand.qinghua?format=json",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((res) => {
    return res.json();
  });
  console.log("content:", content);

  return NextResponse.json({
    code: 200,
    msg: "ok",
  });
};
