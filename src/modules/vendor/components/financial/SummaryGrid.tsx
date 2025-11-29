import { View } from "react-native";
import SummaryCard from "./SummaryCard";

export default function SummaryGrid({ summary }) {
  const cards = [
    {
      label: "Total Sales",
      value: summary.totalSales,
      icon: "trending-up-outline",
    },
    {
      label: "Payable (After Fees)",
      value: summary.payableToVendor,
      icon: "wallet-outline",
    },
    {
      label: "Platform Fees",
      value: summary.platformFees,
      icon: "build-outline",
    },
    {
      label: "Discounts Given",
      value: summary.discounts,
      icon: "pricetags-outline",
    },
    {
      label: "Outstanding Receivables",
      value: summary.outstanding,
      icon: "alert-circle-outline",
    },
    {
      label: "Settlement History",
      value: summary.settlementsCount,
      icon: "document-text-outline",
    },
  ];

  return (
    <View className="flex-row flex-wrap justify-between mt-2">
      {cards.map((item, index) => (
        <SummaryCard key={index} item={item} />
      ))}
    </View>
  );
}
