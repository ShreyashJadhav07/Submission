"use client";
import AnimatedCard from "@/components/AnimatedCard";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";

export default function MarketOverview() {
  const [market, setMarket] = useState({ nse: {}, bse: {} });

  useEffect(() => {
    fetch("/api/market-summary")
      .then((res) => res.json())
      .then((json) => setMarket(json));
  }, []);

  return (
    <AnimatedCard>
      <Card className="bg-card text-card-foreground shadow-soft rounded-xl">
        <CardHeader>
          <CardTitle>Market Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between">
            <div>
              <p>NSE: {market.nse.index}</p>
              <p className={market.nse.change >= 0 ? "text-green-500" : "text-red-500"}>
                {market.nse.change}%
              </p>
            </div>
            <div>
              <p>BSE: {market.bse.index}</p>
              <p className={market.bse.change >= 0 ? "text-green-500" : "text-red-500"}>
                {market.bse.change}%
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </AnimatedCard>
  );
}
