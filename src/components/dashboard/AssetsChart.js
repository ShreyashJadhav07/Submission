"use client";

import AnimatedCard from "@/components/AnimatedCard";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

// Function to get chart colors safely on client
function getChartColors() {
  if (typeof window === "undefined" || !window.getComputedStyle) {
    return {
      chart1: "#6366F1",
      chart2: "#22C55E",
      chart3: "#F59E0B",
      chart4: "#EF4444",
      chart5: "#3B82F6",
    };
  }

  const style = getComputedStyle(document.documentElement);

  return {
    chart1: style.getPropertyValue("--chart-1").trim() || "#6366F1",
    chart2: style.getPropertyValue("--chart-2").trim() || "#22C55E",
    chart3: style.getPropertyValue("--chart-3").trim() || "#F59E0B",
    chart4: style.getPropertyValue("--chart-4").trim() || "#EF4444",
    chart5: style.getPropertyValue("--chart-5").trim() || "#3B82F6",
  };
}

export default function AssetsChart() {
  const router = useRouter();
  const [chartColors, setChartColors] = useState({
    chart1: "#6366F1",
    chart2: "#22C55E",
    chart3: "#F59E0B",
    chart4: "#EF4444",
    chart5: "#3B82F6",
  });

  useEffect(() => {
    setChartColors(getChartColors());
  }, []);

  const data = {
    labels: ["Scheme A", "Scheme B", "Scheme C"],
    datasets: [
      {
        data: [45, 30, 25],
        backgroundColor: [
          chartColors.chart1,
          chartColors.chart2,
          chartColors.chart3,
        ],
        borderWidth: 1,
      },
    ],
  };

  const handleClick = (scheme) => {
    router.push(`/investors?scheme=${encodeURIComponent(scheme)}`);
  };

  return (
    <AnimatedCard>
      <Card className="bg-card text-card-foreground shadow-soft rounded-xl">
        <CardHeader>
          <CardTitle>Assets Under Management</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-48">
            <Pie data={data} />
          </div>
          <ul className="mt-4 space-y-1">
            {data.labels.map((scheme, idx) => (
              <li
                key={idx}
                className="cursor-pointer hover:underline"
                onClick={() => handleClick(scheme)}
              >
                {scheme}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </AnimatedCard>
  );
}
