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
import { useState, useEffect, useMemo } from "react";
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

function getChartColors(theme) {
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
  

  const baseColors = {
    chart1: style.getPropertyValue("--chart-1").trim() || "#6366F1",
    chart2: style.getPropertyValue("--chart-2").trim() || "#22C55E",
    chart3: style.getPropertyValue("--chart-3").trim() || "#F59E0B", 
    chart4: style.getPropertyValue("--chart-4").trim() || "#EF4444",
    chart5: style.getPropertyValue("--chart-5").trim() || "#3B82F6",
  };


  if (theme === "dark") {
    return {
      ...baseColors,
      chart1: "#FFFFFF", 
    };
  }

  return baseColors;
}

export default function LeadsOverview() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [chartColors, setChartColors] = useState({
    chart1: "#6366F1",
    chart2: "#22C55E",
    chart3: "#F59E0B", 
    chart4: "#EF4444",
    chart5: "#3B82F6",
  });
  
  const [chartKey, setChartKey] = useState(0);


  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const updateColors = () => {
      setChartColors(getChartColors(resolvedTheme));
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
          el.style.color = '#3B82F6'; 
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
        backgroundColor: chartColors.chart1,
        borderColor: chartColors.chart1,
        borderWidth: 3, 
        fill: false,
        tension: 0.3,
        pointRadius: 5,
        pointHoverRadius: 7,
        pointBackgroundColor: chartColors.chart1,
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
          chartColors.chart4, 
          chartColors.chart3, 
          chartColors.chart5, 
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
          
          color: "#3B82F6",
          fontColor: "#3B82F6", 
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
        <CardContent className="pt-0">
          {/* Line Chart */}
          <div className="h-40 sm:h-48 mb-4">
            <Line 
              key={`line-${chartKey}`}
              data={lineData} 
              options={lineOptions} 
            />
          </div>

          {/* Pie Chart */}
          <div className="h-40 sm:h-48">
            <Pie 
              key={`pie-${chartKey}`}
              data={pieData} 
              options={pieOptions} 
            />
          </div>
        </CardContent>
      </Card>
    </AnimatedCard>
  );
}