"use client";

import AnimatedCard from "@/components/AnimatedCard";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

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
          "#87CEEB", // Light blue
          "#1E90FF", // Dark blue
          "#4169E1", // Medium blue
        ],
        borderWidth: 1,
        cutout: "60%",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          font: { size: 12 },
          usePointStyle: true,
          color: "#3B82F6",
          fontColor: "#3B82F6",
        },
      },
    },
    onClick: (_, elements) => {
      if (elements.length > 0) {
        const index = elements[0].index;
        const scheme = data.labels[index];
        router.push(`/investors?scheme=${encodeURIComponent(scheme)}`);
      }
    },
  };

  const handleClick = (scheme) => {
    router.push(`/investors?scheme=${encodeURIComponent(scheme)}`);
  };

  return (
    <AnimatedCard>
      <Card className="bg-card text-card-foreground rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-border w-full">
        <CardHeader className="pb-1">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
            <CardTitle className="text-lg sm:text-xl font-semibold text-center sm:text-left">
              Assets Under Management
            </CardTitle>
            <select className="text-sm bg-transparent border rounded px-2 py-1 text-muted-foreground w-full sm:w-auto">
              <option>Today</option>
              <option>Yesterday</option>
              <option>This Week</option>
            </select>
          </div>
        </CardHeader>

        <CardContent className="flex items-center justify-center h-auto sm:h-[350px] py-4 sm:py-0">
          <div className="flex flex-col lg:flex-row gap-6 h-full w-full">
            
            {/* Left side - Donut Chart */}
            <div className="flex-1 flex flex-col items-center justify-center space-y-4">
              <div className="h-64 w-full flex items-center justify-center sm:h-60 md:h-72">
                <Doughnut data={data} options={options} />
              </div>
            </div>

            {/* Right side - Scheme List */}
            <div className="flex-1 flex flex-col justify-center space-y-4 min-w-0">
              <div className="text-center lg:text-left">
                <h3 className="text-blue-600 font-semibold text-lg sm:text-xl mb-1">
                  Top Schemes
                </h3>
                <p className="text-sm text-muted-foreground">
                  Performance Overview
                </p>
              </div>

              <ul className="space-y-2">
                {data.labels.map((scheme, idx) => (
                  <li
                    key={idx}
                    className="flex items-center justify-between p-3 rounded-md hover:bg-accent hover:text-accent-foreground cursor-pointer transition-colors border border-border/50 text-sm sm:text-base"
                    onClick={() => handleClick(scheme)}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="w-4 h-4 rounded-full flex-shrink-0"
                        style={{
                          backgroundColor:
                            data.datasets[0].backgroundColor[idx],
                        }}
                      ></span>
                      <span className="font-medium">{scheme}</span>
                    </div>
                    <span className="text-xs sm:text-sm text-muted-foreground bg-muted px-2 py-1 rounded">
                      View
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </AnimatedCard>
  );
}
