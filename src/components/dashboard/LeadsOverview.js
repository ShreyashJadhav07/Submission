"use client";

import AnimatedCard from "@/components/AnimatedCard";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { useState, useEffect } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend
);

// Same function to get CSS variable colors on client
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

export default function LeadsOverview() {
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

  const lineData = {
    labels: ["Scheme A", "Scheme B", "Scheme C"],
    datasets: [
      {
        label: "Investment",
        data: [45, 30, 25],
        backgroundColor: chartColors.chart1,
        borderColor: chartColors.chart1,
        borderWidth: 2,
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  const pieData = {
    labels: ["Hot Leads", "Warm Leads", "Cold Leads"],
    datasets: [
      {
        label: "Leads",
        data: [12, 7, 5],
        backgroundColor: [
          chartColors.chart1,
          chartColors.chart4,
          chartColors.chart5,
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <AnimatedCard>
      <Card className="bg-card text-card-foreground shadow-soft rounded-xl">
        <CardHeader>
          <CardTitle>Leads Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-40 mb-4">
            <Line data={lineData} />
          </div>
          <div className="h-40">
            <Pie data={pieData} />
          </div>
        </CardContent>
      </Card>
    </AnimatedCard>
  );
}
