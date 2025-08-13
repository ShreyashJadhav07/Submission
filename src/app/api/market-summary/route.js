export async function GET() {
  const nse = { index: 19850, change: 0.85 };
  const bse = { index: 66750, change: -0.45 };

  return new Response(JSON.stringify({ nse, bse }), {
    headers: { "Content-Type": "application/json" },
  });
}
