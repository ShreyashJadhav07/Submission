"use client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function AssetsChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Assets Under Management</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-40 bg-gray-100 dark:bg-gray-800 rounded flex items-center justify-center">
          Pie Chart Placeholder
        </div>
        <ul className="mt-3 space-y-1">
          <li className="cursor-pointer hover:underline">Scheme A</li>
          <li className="cursor-pointer hover:underline">Scheme B</li>
          <li className="cursor-pointer hover:underline">Scheme C</li>
        </ul>
      </CardContent>
    </Card>
  );
}
