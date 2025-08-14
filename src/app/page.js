import TransactionSnapshot from "@/components/dashboard/TransactionSnapshot";
import TodoList from "@/components/dashboard/TodoList";
import AssetsChart from "@/components/dashboard/AssetsChart";
import MarketOverview from "@/components/dashboard/MarketOverview";
import LeadsOverview from "@/components/dashboard/LeadsOverview";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Transaction Snapshot + To-Do's side by side */}
      <div className="grid gap-6 lg:grid-cols-2 items-stretch">
        <TransactionSnapshot />
        <TodoList />
      </div>

      {/* Assets & Market Overview - Fixed Layout */}
      <div className="grid gap-6 lg:grid-cols-5">
        {/* AssetsChart takes 3 columns (60% width) */}
        <div className="lg:col-span-3">
          <AssetsChart />
        </div>
        {/* MarketOverview takes 2 columns (40% width) */}
        <div className="lg:col-span-2">
          <MarketOverview />
        </div>
      </div>

      {/* Leads Overview */}
      <LeadsOverview />
    </div>
  );
}