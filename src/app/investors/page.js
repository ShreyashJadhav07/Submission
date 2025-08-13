"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import investors from "@/data/investors.json";
import { useSearchParams } from "next/navigation";

export default function InvestorsPage() {
  const searchParams = useSearchParams();
  const scheme = searchParams.get("scheme");

  // Filter investors based on scheme query param
  const filteredInvestors = scheme
    ? investors.filter((inv) => inv.scheme === scheme)
    : investors;

  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {filteredInvestors.length > 0 ? (
        filteredInvestors.map((inv) => (
          <Card
            key={inv.id}
            className="bg-card text-card-foreground rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-border"
          >
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-semibold">{inv.name}</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium">Scheme:</span> {inv.scheme}
              </p>
            </CardContent>
          </Card>
        ))
      ) : (
        <p className="col-span-full text-center text-muted-foreground text-base py-10">
          No investors found for <span className="font-semibold">{scheme}</span>.
        </p>
      )}
    </div>
  );
}
