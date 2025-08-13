"use client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function LeadsOverview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Leads Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-40 bg-gray-100 dark:bg-gray-800 rounded flex items-center justify-center">
          Line + Pie Chart Placeholder
        </div>
      </CardContent>
    </Card>
  );
}
