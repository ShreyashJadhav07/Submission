import data from "@/data/transactions.json";

export async function GET() {
  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
