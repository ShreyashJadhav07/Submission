"use client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import investors from "@/data/investors.json";
import { useSearchParams } from "next/navigation";

export default function InvestorsPage() {
  const searchParams = useSearchParams();
  const scheme = searchParams.get("scheme");

  const filtered = scheme
    ? investors.filter((inv) => inv.scheme === scheme)
    : investors;

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {filtered.map((inv) => (
        <Card key={inv.id}>
          <CardHeader>
            <CardTitle>{inv.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Scheme: {inv.scheme}</p>
          </CardContent>
        </Card>
      ))}

      {filtered.length === 0 && (
        <p className="col-span-full text-center text-gray-500">
          No investors found for {scheme}.
        </p>
      )}
    </div>
  );
}
