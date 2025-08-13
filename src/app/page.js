import TransactionSnapshot from "@/components/dashboard/TransactionSnapshot";
import TodoList from "@/components/dashboard/TodoList";
import AssetsChart from "@/components/dashboard/AssetsChart";
import MarketOverview from "@/components/dashboard/MarketOverview";
import LeadsOverview from "@/components/dashboard/LeadsOverview";

export default function DashboardPage() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
   
      <div className="space-y-6">
        <TransactionSnapshot />
        <TodoList />
      </div>

      <div className="space-y-6">
        <AssetsChart />
        <MarketOverview />
      </div>

     
      <div className="space-y-6">
        <LeadsOverview />
      </div>
    </div>
  );
}
