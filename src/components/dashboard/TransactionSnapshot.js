"use client";
import AnimatedCard from "@/components/AnimatedCard";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { ArrowUpIcon, ArrowDownIcon } from "lucide-react";

export default function TransactionSnapshot() {
  const [data, setData] = useState({ inflow: 120000, outflow: 80000, count: 45 });

  useEffect(() => {
    fetch("/api/transactions")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch(() => {
        setData({ inflow: 120000, outflow: 80000, count: 45 });
      });
  }, []);

  return (
    <AnimatedCard>
      <Card className="bg-card text-card-foreground rounded-xl shadow-md border border-border h-full">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg sm:text-xl font-semibold text-center sm:text-left">
            Transaction Snapshot
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-sm text-muted-foreground mb-1 sm:mb-2">Inflow</p>
              <div className="flex justify-center items-center gap-1 text-green-500 text-xl sm:text-2xl font-semibold">
                <ArrowUpIcon size={20} /> ${data.inflow.toLocaleString()}
              </div>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1 sm:mb-2">Outflow</p>
              <div className="flex justify-center items-center gap-1 text-red-500 text-xl sm:text-2xl font-semibold">
                <ArrowDownIcon size={20} /> ${data.outflow.toLocaleString()}
              </div>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1 sm:mb-2">Transactions</p>
              <p className="text-xl sm:text-2xl font-semibold text-foreground">{data.count}</p>
            </div>
          </div>

          {/* Status row like reference */}
          <div className="flex flex-wrap justify-center sm:justify-around gap-2 mt-6">
            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-md text-xs sm:text-sm font-medium">
              150 Pending
            </span>
            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-md text-xs sm:text-sm font-medium">
              36 Expired
            </span>
            <span className="bg-red-100 text-red-600 px-3 py-1 rounded-md text-xs sm:text-sm font-medium">
              15 Reversed
            </span>
          </div>
        </CardContent>
      </Card>
    </AnimatedCard>
  );
}
