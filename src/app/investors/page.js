


import { Suspense } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import InvestorsClient from "./InvestorsClient";

function LoadingInvestors() {
  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {[...Array(6)].map((_, i) => (
        <Card key={i} className="bg-card rounded-xl shadow-md border border-border animate-pulse">
          <CardHeader className="pb-2">
            <div className="h-6 bg-muted rounded w-3/4"></div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="h-4 bg-muted rounded w-1/2"></div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

// Main page component - Server Component
export default function InvestorsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Investors</h1>
        <p className="text-muted-foreground">
          Browse through our network of investors and their preferred schemes.
        </p>
      </div>
      
      <Suspense fallback={<LoadingInvestors />}>
        <InvestorsClient />
      </Suspense>
    </div>
  );
}