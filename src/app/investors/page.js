// import { Suspense } from "react";
// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
// import investors from "@/data/investors.json";
// import { useSearchParams } from "next/navigation";


// function InvestorsContent() {
//   const searchParams = useSearchParams();
//   const scheme = searchParams.get("scheme");

//   // Filter investors based on scheme query param
//   const filteredInvestors = scheme
//     ? investors.filter((inv) => inv.scheme === scheme)
//     : investors;

//   return (
//     <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//       {filteredInvestors.length > 0 ? (
//         filteredInvestors.map((inv) => (
//           <Card
//             key={inv.id}
//             className="bg-card text-card-foreground rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-border"
//           >
//             <CardHeader className="pb-2">
//               <CardTitle className="text-lg font-semibold">{inv.name}</CardTitle>
//             </CardHeader>
//             <CardContent className="pt-0">
//               <p className="text-sm text-muted-foreground">
//                 <span className="font-medium">Scheme:</span> {inv.scheme}
//               </p>
//             </CardContent>
//           </Card>
//         ))
//       ) : (
//         <p className="col-span-full text-center text-muted-foreground text-base py-10">
//           No investors found for <span className="font-semibold">{scheme}</span>.
//         </p>
//       )}
//     </div>
//   );
// }

// // Loading fallback component
// function LoadingInvestors() {
//   return (
//     <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//       {[...Array(6)].map((_, i) => (
//         <Card key={i} className="bg-card rounded-xl shadow-md border border-border animate-pulse">
//           <CardHeader className="pb-2">
//             <div className="h-6 bg-muted rounded w-3/4"></div>
//           </CardHeader>
//           <CardContent className="pt-0">
//             <div className="h-4 bg-muted rounded w-1/2"></div>
//           </CardContent>
//         </Card>
//       ))}
//     </div>
//   );
// }

// // Main page component - this should be your default export
// export default function InvestorsPage() {
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="mb-8">
//         <h1 className="text-3xl font-bold text-foreground mb-2">Investors</h1>
//         <p className="text-muted-foreground">
//           Browse through our network of investors and their preferred schemes.
//         </p>
//       </div>
      
//       <Suspense fallback={<LoadingInvestors />}>
//         <InvestorsContent />
//       </Suspense>
//     </div>
//   );
// }

import { Suspense } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import InvestorsClient from "./InvestorsClient";

// Loading fallback component
function LoadingInvestors() {
  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {[...Array(6)].map((_, i) => (
        <Card key={i} className="bg-card rounded-xl shadow-md border border-border animate-pulse">
          <CardHeader className="pb-2">
            <div className="h-6 bg-muted rounded w-3/4"></div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="h-4 bg-muted rounded w-1/2"></div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

// Main page component - Server Component
export default function InvestorsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Investors</h1>
        <p className="text-muted-foreground">
          Browse through our network of investors and their preferred schemes.
        </p>
      </div>
      
      <Suspense fallback={<LoadingInvestors />}>
        <InvestorsClient />
      </Suspense>
    </div>
  );
}