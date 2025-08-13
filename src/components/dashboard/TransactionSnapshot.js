"use client";
import AnimatedCard from "@/components/AnimatedCard";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";

export default function TransactionSnapshot() {
  const [data, setData] = useState({ inflow: 0, outflow: 0, count: 0 });

  useEffect(() => {
    fetch("/api/transactions")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <AnimatedCard>
      <Card className="bg-card text-card-foreground shadow-soft rounded-xl">
        <CardHeader>
          <CardTitle>Transaction Snapshot</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between">
            <div>
              <p className="text-sm">Inflow</p>
              <p className="text-xl font-bold text-green-500">₹ {data.inflow}</p>
            </div>
            <div>
              <p className="text-sm">Outflow</p>
              <p className="text-xl font-bold text-red-500">₹ {data.outflow}</p>
            </div>
            <div>
              <p className="text-sm">Transactions</p>
              <p className="text-xl font-bold">{data.count}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </AnimatedCard>
  );
}

