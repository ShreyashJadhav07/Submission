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

  const marketStats = [
    {
      name: "NSE",
      index: market.nse.index,
      change: market.nse.change,
    },
    {
      name: "BSE",
      index: market.bse.index,
      change: market.bse.change,
    },
  ];

  return (
    <AnimatedCard>
      <Card className="bg-card text-card-foreground rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-border">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-semibold">Market Overview</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4 pt-0">
          {marketStats.map((stat) => (
            <div
              key={stat.name}
              className="flex items-center justify-between p-3 rounded-lg bg-muted cursor-pointer"
            >
              <div>
                <p className="text-sm font-medium text-muted-foreground cursor-pointer">{stat.name}</p>
                <p className="text-xl font-bold">{stat.index ?? "--"}</p>
              </div>
              <div
                className={`text-sm font-semibold ${
                  stat.change >= 0 ? "text-green-500" : "text-red-500"
                }`}
              >
                {stat.change >= 0 ? "▲" : "▼"} {stat.change ?? "--"}%
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </AnimatedCard>
  );
}
