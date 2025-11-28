import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import HeaderBar from "../components/shared/HeaderBar";

// Correct imports
import FeeOverviewSection from "../modules/vendor/components/platformScreen/FeeOverviewSection";
import FeeStructureCard from "../modules/vendor/components/platformScreen/FeeStructureCard.";
import StatementBottom from "../modules/vendor/components/platformScreen/StatementBottom";
import StatementCard from "../modules/vendor/components/platformScreen/StatementCard";
import TransactionsSection from "../modules/vendor/components/platformScreen/TransactionsSection";
import WeeklyTrendChart from "../modules/vendor/components/platformScreen/WeeklyTrendChart";



const colors = {
  primary: "#2d6b06",
  primaryDark: "#245805",
  primaryLight: "#e5fbe2",

  secondary: "#c7611f",
  secondaryDark: "#a64f18",
  secondaryLight: "#f7e9df",

  border: "#d1d5db",
  bg: "#f8f9fb",
};

export default function PlatformScreen() {
  const [sheetVisible, setSheetVisible] = useState(false);

  const feeOverview = [
    {
      label: "Total Fee Accumulated",
      value: 12840,
      display: "₹12,840",
      max: 20000,
      color: colors.primary,
    },
    {
      label: "Fee Settled This Week",
      value: 4280,
      display: "₹4,280",
      max: 5000,
      color: colors.primaryDark,
    },
    {
      label: "Pending Settlement",
      value: 8560,
      display: "₹8,560",
      max: 10000,
      color: colors.secondaryDark,
    },
  ];
const feeOverviewData = {
  totalFee: "₹2,850.75",
  pending: "₹2,070.55",
};
  const weeklyTrend = [3200, 3900, 4100, 4280, 3960, 4560];

  const feeTransactions = [
    {
      id: "ORD987",
      type: "Cash",
      amount: "₹120.00",
      charged: "₹10.00",
      feeRate: "2.5%",
      date: "Nov 18, 2024",
    },
    {
      id: "ORD986",
      type: "Credit",
      amount: "₹55.00",
      charged: "₹1.38",
      feeRate: "3.0%",
      date: "Nov 17, 2024",
    },
  ];

  const statements = [
    { week: "Statement - Nov 11–17", format: "PDF" },
    { week: "Statement - Nov 4–10", format: "PDF" },
    { week: "Statement - Oct 28–Nov 3", format: "PDF" },
  ];

  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: colors.bg }}>
      {/* Header */}
      <HeaderBar title="Platform Fee Management" icon="person-circle-outline" />

      <ScrollView className="px-4 pt-4 pb-24">

       
        <FeeStructureCard colors={colors} />

       
        <FeeOverviewSection colors={colors} data={feeOverviewData} />

        <WeeklyTrendChart data={weeklyTrend} colors={colors} />

{/*        
        <Text className="mt-4 mb-2 font-semibold text-gray-800">Test Progress Bar</Text>
        <AnimatedProgressBar value={50} maxValue={100} color={colors.primary} />  */}

       
        <TransactionsSection transactions={feeTransactions} colors={colors} />

     
        <TouchableOpacity
          className="mt-5 rounded-xl flex-row items-center justify-center p-4"
          style={{ backgroundColor: colors.primary }}
          onPress={() => setSheetVisible(true)}
        >
          <Text className="text-white font-semibold">Download Weekly Statement</Text>
        </TouchableOpacity>

        {/* Statements Preview */}
        <Text className="text-[17px] font-semibold text-gray-900 mt-7 mb-3">
          Fee Statements
        </Text>

        {statements.slice(0, 2).map((s, i) => (
          <StatementCard key={i} item={s} colors={colors} />
        ))}

      </ScrollView>

      {/* Bottom Sheet */}
      <StatementBottom
        visible={sheetVisible}
        onClose={() => setSheetVisible(false)}
        statements={statements}
        colors={colors}
      />
    </SafeAreaView>
  );
}
