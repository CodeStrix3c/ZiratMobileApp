import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderBar from "../components/shared/HeaderBar";
import BankDetailsCard from "../modules/vendor/components/financial/BankDetailsCard";
import SummaryGrid from "../modules/vendor/components/financial/SummaryGrid";
import WeeklySettlementCard from "../modules/vendor/components/financial/WeeklySettlementCard";

export default function FinancialScreen() {
  const summary = {
  totalSales: 650000,
  payableToVendor: 510000,
  platformFees: 32000,
  discounts: 18000,
  outstanding: 120000,
  settlementsCount: 14,
};


  const weekly = [
    { week: "Nov 18–24", amount: 2870.3, status: "Settled" },
    { week: "Nov 11–17", amount: 3012.6, status: "Settled" },
  ];

  const bank = {
    accountName: "Primary Account",
    masked: "**** 1383",
    status: "Settled",
    amount: 2870.3,
    change: +270.5,
  };

  const logs = [
    { id: "SETT-202315-001", amount: 2870.3, status: "Completed" },
    { id: "SETT-202315-002", amount: 3012.6, status: "Completed" },
    { id: "SETT-202315-003", amount: 2870.3, status: "Failed" },
  ];

  return (
     <SafeAreaView className="flex-1 bg-gray-100">
      <HeaderBar title="Vendor Financials" icon="wallet-outline" />

      <ScrollView
        className="px-4 pt-4 pb-24"
        showsVerticalScrollIndicator={false}
      >
        <SummaryGrid summary={summary} />

        <WeeklySettlementCard weekly={weekly} />

        <BankDetailsCard bank={bank} logs={logs} />
      </ScrollView>
   </SafeAreaView>
  );
}

