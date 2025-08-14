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
import { useTheme } from "next-themes";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend
);

export default function LeadsOverview() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [chartKey, setChartKey] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const updateColors = () => {
      setChartKey(prev => prev + 1);
    };

    const timeout = setTimeout(updateColors, 100);
    const observer = new MutationObserver(() => {
      setTimeout(updateColors, 50);
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class', 'data-theme']
    });

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, [resolvedTheme, mounted]);

  useEffect(() => {
    const updateLegendColors = () => {
      const legendElements = document.querySelectorAll('.chartjs-legend-label-text, canvas + div, [role="img"] + div');
      legendElements.forEach(el => {
        if (el.style) {
          el.style.color = '#1E90FF'; // Dark blue for legend
        }
      });
    };

    const timeout = setTimeout(updateLegendColors, 200);
    return () => clearTimeout(timeout);
  }, [chartKey]);

  if (!mounted) {
    return (
      <AnimatedCard>
        <Card className="bg-card text-card-foreground rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-border w-full">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg sm:text-xl font-semibold text-center sm:text-left">
              Leads Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="h-40 sm:h-48 mb-4 flex items-center justify-center">
              <div className="text-muted-foreground">Loading...</div>
            </div>
            <div className="h-40 sm:h-48 flex items-center justify-center">
              <div className="text-muted-foreground">Loading...</div>
            </div>
          </CardContent>
        </Card>
      </AnimatedCard>
    );
  }

  const isDark = resolvedTheme === "dark";

  const lineData = {
    labels: ["Scheme A", "Scheme B", "Scheme C"],
    datasets: [
      {
        label: "Investment",
        data: [45, 30, 25],
        backgroundColor: "#1E90FF", // Dark blue
        borderColor: "#1E90FF", // Dark blue
        borderWidth: 3,
        fill: false,
        tension: 0.3,
        pointRadius: 5,
        pointHoverRadius: 7,
        pointBackgroundColor: "#1E90FF", // Dark blue
        pointBorderColor: isDark ? "#1f2937" : "#ffffff",
        pointBorderWidth: 2,
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
          "#87CEEB", // Light blue
          "#1E90FF", // Dark blue
          "#4169E1", // Medium blue
        ],
        borderWidth: isDark ? 2 : 1,
        borderColor: isDark ? "#374151" : "#ffffff",
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: isDark ? "#1f2937" : "#ffffff",
        titleColor: isDark ? "#ffffff" : "#000000",
        bodyColor: isDark ? "#ffffff" : "#000000",
        borderColor: isDark ? "#374151" : "#e5e7eb",
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        ticks: {
          color: isDark ? "#9ca3af" : "#6b7280",
        },
        grid: {
          color: isDark ? "#374151" : "#f3f4f6",
        },
      },
      y: {
        ticks: {
          color: isDark ? "#9ca3af" : "#6b7280",
        },
        grid: {
          color: isDark ? "#374151" : "#f3f4f6",
        },
      },
    },
  };

  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: true,
          font: {
            size: 12,
          },
          color: "#1E90FF", // Dark blue for legend
          fontColor: "#1E90FF",
          padding: 15,
          boxWidth: 12,
          boxHeight: 12,
        }
      },
      tooltip: {
        backgroundColor: isDark ? "#1f2937" : "#ffffff",
        titleColor: isDark ? "#ffffff" : "#000000",
        bodyColor: isDark ? "#ffffff" : "#000000",
        borderColor: isDark ? "#374151" : "#e5e7eb",
        borderWidth: 1,
        cornerRadius: 8,
        callbacks: {
          label: function(context) {
            const label = context.label || '';
            const value = context.parsed || 0;
            const total = context.dataset.data.reduce((sum, val) => sum + val, 0);
            const percentage = ((value / total) * 100).toFixed(1);
            return `${label}: ${value} (${percentage}%)`;
          }
        }
      },
    },
  };

  return (
    <AnimatedCard>
      <Card className="bg-card text-card-foreground rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-border w-full">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg sm:text-xl font-semibold text-center sm:text-left">
            Leads Overview
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0 flex space-x-4">
          <div className="w-1/2 h-48">
            <Pie
              key={`pie-${chartKey}`}
              data={pieData}
              options={pieOptions}
            />
          </div>
          <div className="w-1/2 h-48">
            <Line
              key={`line-${chartKey}`}
              data={lineData}
              options={lineOptions}
            />
          </div>
        </CardContent>
      </Card>
    </AnimatedCard>
  );
}