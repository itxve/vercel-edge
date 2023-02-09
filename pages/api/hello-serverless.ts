import { getAll } from "@vercel/edge-config";
import { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  console.log("hello was invoked!");
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
  res.status(200).json({ name: content, items: await getAll() });
}
