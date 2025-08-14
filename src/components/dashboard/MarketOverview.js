// "use client";
// import AnimatedCard from "@/components/AnimatedCard";
// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
// import { useEffect, useState } from "react";

// export default function MarketOverview() {
//   const [market, setMarket] = useState({ 
//     nse: { index: 19850, change: 0.85 }, 
//     bse: { index: 66750, change: -0.45 } 
//   });

//   useEffect(() => {
//     fetch("/api/market-summary")
//       .then((res) => res.json())
//       .then((json) => setMarket(json))
//       .catch(() => {
//         // Keep default values if API fails
//         setMarket({ 
//           nse: { index: 19850, change: 0.85 }, 
//           bse: { index: 66750, change: -0.45 } 
//         });
//       });
//   }, []);

//   const marketStats = [
//     {
//       name: "NSE",
//       index: market.nse.index,
//       change: market.nse.change,
//     },
//     {
//       name: "BSE",
//       index: market.bse.index,
//       change: market.bse.change,
//     },
//   ];

//   return (
//     <AnimatedCard>
//       <Card className="bg-card text-card-foreground rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-border">
//         <CardHeader className="pb-2">
//           <CardTitle className="text-lg font-semibold">Market Overview</CardTitle>
//         </CardHeader>
//         <CardContent className="flex flex-col gap-4 pt-0">
//           {marketStats.map((stat) => (
//             <div
//               key={stat.name}
//               className="flex items-center justify-between p-3 rounded-lg bg-muted cursor-pointer"
//             >
//               <div>
//                 <p className="text-sm font-medium text-muted-foreground cursor-pointer">{stat.name}</p>
//                 <p className="text-xl font-bold">{stat.index ?? "--"}</p>
//               </div>
//               <div
//                 className={`text-sm font-semibold ${
//                   stat.change >= 0 ? "text-green-500" : "text-red-500"
//                 }`}
//               >
//                 {stat.change >= 0 ? "▲" : "▼"} {Math.abs(stat.change ?? 0).toFixed(2)}%
//               </div>
//             </div>
//           ))}
//         </CardContent>
//       </Card>
//     </AnimatedCard>
//   );
// }




"use client";
import AnimatedCard from "@/components/AnimatedCard";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";

export default function MarketOverview() {
  const [market, setMarket] = useState({ 
    nse: { index: 19850, change: 0.85 }, 
    bse: { index: 66750, change: -0.45 } 
  });

  useEffect(() => {
    fetch("/api/market-summary")
      .then((res) => res.json())
      .then((json) => setMarket(json))
      .catch(() => {
        // Keep default values if API fails
        setMarket({ 
          nse: { index: 19850, change: 0.85 }, 
          bse: { index: 66750, change: -0.45 } 
        });
      });
  }, []);

  const marketStats = [
    {
      name: "NSE",
      index: market.nse.index,
      change: market.nse.change,
    },
    {
      name: "BSE",
      index: market.bse.index,
      change: market.bse.change,
    },
  ];

  return (
    <div className="w-full">
      {/* Main Market Overview Card */}
      <AnimatedCard>
        <Card className="bg-card text-card-foreground rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-border h-full flex flex-col">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-semibold">Market Overview</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-3 pt-0 flex-1 justify-center">
            {marketStats.map((stat) => (
              <div
                key={stat.name}
                className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors cursor-pointer border border-border/30"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                    stat.name === 'NSE' ? 'bg-blue-100 text-blue-600' : 'bg-orange-100 text-orange-600'
                  }`}>
                    {stat.name}
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{stat.index?.toFixed(2) || "--"}</p>
                    <p className="text-xs text-muted-foreground">{stat.name} Index</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${stat.change >= 0 ? 'bg-green-500' : 'bg-red-500'}`}></div>
                    <span className={`text-sm font-semibold ${
                      stat.change >= 0 ? "text-green-500" : "text-red-500"
                    }`}>
                      {stat.change >= 0 ? "+" : ""}{stat.change?.toFixed(2) || 0}%
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </AnimatedCard>

      {/* Fund Performance Insight Cards */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <AnimatedCard>
          <Card className="bg-card border border-border rounded-lg hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div className="w-1 h-12 bg-black rounded-full flex-shrink-0 mt-1"></div>
                <div className="flex-1">
                  <h3 className="font-semibold text-sm mb-2">HDFC Mid Cap</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-foreground">99%</span> of your investors can benefit from 
                    HDFC Mid cap.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedCard>

        <AnimatedCard>
          <Card className="bg-card border border-border rounded-lg hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div className="w-1 h-12 bg-black rounded-full flex-shrink-0 mt-1"></div>
                <div className="flex-1">
                  <h3 className="font-semibold text-sm mb-2">HDFC Equity Fund</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-foreground">60%</span> of your investors have not invested in 
                    HDFC Equity Fund
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedCard>

        <AnimatedCard>
          <Card className="bg-card border border-border rounded-lg hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div className="w-1 h-12 bg-black rounded-full flex-shrink-0 mt-1"></div>
                <div className="flex-1">
                  <h3 className="font-semibold text-sm mb-2">Capital builder</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-foreground">20%</span> of your investors can benefit from 
                    HDFC Capital Builder Plan.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedCard>
      </div>
    </div>
  );
}