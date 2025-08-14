// "use client";

// import AnimatedCard from "@/components/AnimatedCard";
// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
// import { Pie } from "react-chartjs-2";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// import { useRouter } from "next/navigation";
// import { useState, useEffect } from "react";

// ChartJS.register(ArcElement, Tooltip, Legend);

// function getChartColors() {
//   if (typeof window === "undefined" || !window.getComputedStyle) {
//     return {
//       chart1: "#6366F1",
//       chart2: "#22C55E",
//       chart3: "#F59E0B",
//       chart4: "#EF4444",
//       chart5: "#3B82F6",
//     };
//   }

//   const style = getComputedStyle(document.documentElement);

//   return {
//     chart1: style.getPropertyValue("--chart-1").trim() || "#6366F1",
//     chart2: style.getPropertyValue("--chart-2").trim() || "#22C55E",
//     chart3: style.getPropertyValue("--chart-3").trim() || "#F59E0B",
//     chart4: style.getPropertyValue("--chart-4").trim() || "#EF4444",
//     chart5: style.getPropertyValue("--chart-5").trim() || "#3B82F6",
//   };
// }

// export default function AssetsChart() {
//   const router = useRouter();
//   const [chartColors, setChartColors] = useState({
//     chart1: "#6366F1",
//     chart2: "#22C55E",
//     chart3: "#F59E0B",
//     chart4: "#EF4444",
//     chart5: "#3B82F6",
//   });

//   useEffect(() => {
//     setChartColors(getChartColors());
//   }, []);

//   const data = {
//     labels: ["Scheme A", "Scheme B", "Scheme C"],
//     datasets: [
//       {
//         data: [45, 30, 25],
//         backgroundColor: [
//           chartColors.chart1,
//           chartColors.chart2,
//           chartColors.chart3,
//         ],
//         borderWidth: 1,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: {
//         position: "bottom",
//         labels: {
//           font: { size: 12 },
//           usePointStyle: true,
        
//           color: "#3B82F6",
//           fontColor: "#3B82F6", 
//         },
//       },
//     },
//     onClick: (_, elements) => {
//       if (elements.length > 0) {
//         const index = elements[0].index;
//         const scheme = data.labels[index];
//         router.push(`/investors?scheme=${encodeURIComponent(scheme)}`);
//       }
//     },
//   };

//   const handleClick = (scheme) => {
//     router.push(`/investors?scheme=${encodeURIComponent(scheme)}`);
//   };

//   return (
//     <AnimatedCard>
//       <Card className="bg-card text-card-foreground rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-border w-full">
//         <CardHeader className="pb-2">
//           <CardTitle className="text-lg sm:text-xl font-semibold text-center sm:text-left">
//             Assets Under Management
//           </CardTitle>
//         </CardHeader>
//         <CardContent className="pt-0">
          
//           <div className="h-48 sm:h-60 flex items-center justify-center">
//             <Pie data={data} options={options} />
//           </div>

         
//           <ul className="mt-4 sm:mt-6 space-y-2">
//             {data.labels.map((scheme, idx) => (
//               <li
//                 key={idx}
//                 className="flex items-center justify-between p-2 rounded-md hover:bg-accent hover:text-accent-foreground cursor-pointer transition-colors"
//                 onClick={() => handleClick(scheme)}
//               >
//                 <div className="flex items-center gap-2">
//                   <span
//                     className="w-3 h-3 rounded-full"
//                     style={{ backgroundColor: data.datasets[0].backgroundColor[idx] }}
//                   ></span>
//                   <span className="font-medium text-sm sm:text-base">{scheme}</span>
//                 </div>
//                 <span className="text-xs sm:text-sm text-muted-foreground">View</span>
//               </li>
//             ))}
//           </ul>
//         </CardContent>
//       </Card>
//     </AnimatedCard>
//   );
// }



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
          chartColors.chart1,
          chartColors.chart2,
          chartColors.chart3,
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
          <div className="flex justify-between items-center">
            <CardTitle className="text-lg font-semibold">
              Assets Under Management
            </CardTitle>
            <select className="text-sm bg-transparent border rounded px-2 py-1 text-muted-foreground">
              <option>Today</option>
              <option>Yesterday</option>
              <option>This Week</option>
            </select>
          </div>
        </CardHeader>

        {/* Fixed height with vertical centering */}
        <CardContent className="flex items-center justify-center h-[350px]">
          <div className="flex flex-col lg:flex-row gap-6 h-full w-full">
            
            {/* Left side - Donut Chart */}
            <div className="flex-1 flex flex-col items-center justify-center space-y-4">
              <div className="h-77 sm:h-60 w-full flex items-center justify-center">
                <Doughnut data={data} options={options} />
              </div>
            </div>

            {/* Right side - Scheme List */}
            <div className="flex-1 flex flex-col justify-center space-y-4 min-w-0">
              <div>
                <h3 className="text-blue-600 font-semibold text-lg mb-1">
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
                    className="flex items-center justify-between p-3 rounded-md hover:bg-accent hover:text-accent-foreground cursor-pointer transition-colors border border-border/50"
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
                      <span className="font-medium text-sm sm:text-base">
                        {scheme}
                      </span>
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
