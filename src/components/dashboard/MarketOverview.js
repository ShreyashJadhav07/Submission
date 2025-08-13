"use client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function MarketOverview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Market Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between">
          <div>
            <p>NSE</p>
            <p className="text-green-600">+0.85%</p>
          </div>
          <div>
            <p>BSE</p>
            <p className="text-red-600">-0.45%</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
