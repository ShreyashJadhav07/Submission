import TransactionSnapshot from "@/components/dashboard/TransactionSnapshot";
import TodoList from "@/components/dashboard/TodoList";
import AssetsChart from "@/components/dashboard/AssetsChart";
import MarketOverview from "@/components/dashboard/MarketOverview";
import LeadsOverview from "@/components/dashboard/LeadsOverview";

export default function DashboardPage() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
     
      <div className="flex flex-col gap-6">
        <TransactionSnapshot />
        <TodoList />
      </div>

    
      <div className="flex flex-col gap-6">
        <AssetsChart />
        <MarketOverview />
      </div>

      
      <div className="flex flex-col gap-6">
        <LeadsOverview />
      </div>
    </div>
  );
}
