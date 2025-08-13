"use client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function TransactionSnapshot() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Transaction Snapshot</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between">
          <div>
            <p className="text-sm">Inflow</p>
            <p className="text-xl font-bold text-green-600">₹ 1,20,000</p>
          </div>
          <div>
            <p className="text-sm">Outflow</p>
            <p className="text-xl font-bold text-red-600">₹ 80,000</p>
          </div>
          <div>
            <p className="text-sm">Transactions</p>
            <p className="text-xl font-bold">45</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
