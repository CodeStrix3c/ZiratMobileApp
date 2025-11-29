import { useState } from "react";
import { ScrollView, Text } from "react-native";

import CreditAgingCard from "../modules/vendor/components/reports/CreditAgingCard";
import DeliveryPerformanceCard from "../modules/vendor/components/reports/DeliveryPerformanceCard";
import ProductPerformanceCard from "../modules/vendor/components/reports/ProductPerformanceCard";
import SalesCard from "../modules/vendor/components/reports/SalesCard";
import SalesFilters from "../modules/vendor/components/reports/SalesFilters";
import TaxReportCard from "../modules/vendor/components/reports/TaxReportCard";

import { SafeAreaView } from "react-native-safe-area-context";
import HeaderBar from "../components/shared/HeaderBar";

const salesFiltersData = ["Date", "Product", "Client", "Region"];

const creditAging = [
  { label: "0–30 Days", value: "₹82,000", color: "#2d6b06" },
  { label: "31–60 Days", value: "₹41,500", color: "#c7611f" },
  { label: "61–90 Days", value: "₹23,700", color: "#f97316" },
  { label: "90+ Days", value: "₹9,800", color: "#dc2626" },
];

const productPerformance = [
  { name: "Organic Neem Oil (Pesticide)", units: 540, rating: 4.9 },
  { name: "Bio-Insecticide – Trichoderma", units: 380, rating: 4.7 },
  { name: "Herbal Pest Repellent Spray", units: 310, rating: 4.6 },
  { name: "Fungal Control Liquid (Copper Oxychloride)", units: 270, rating: 4.5 },
  { name: "Eco-Friendly Mite Killer", units: 190, rating: 4.4 },
  { name: "Larvicide – BT Formulation", units: 160, rating: 4.3 },
  { name: "Soil Pest Control Granules", units: 120, rating: 4.2 },
];


const deliveryStats = {
  onTime: "92%",
  delayed: "8%",
  avgTime: "26 mins",
};

export default function ReportsScreen() {
  const [activeFilter, setActiveFilter] = useState("Date");

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
   
         {/* HEADER */}
         <HeaderBar title="Reports" icon="person-circle" />

      <ScrollView className="px-4 pt-3 pb-24">
        <Text className="text-gray-800 font-semibold mb-2">Sales Reports</Text>

        <SalesFilters
          salesFilters={salesFiltersData}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />

        <SalesCard activeFilter={activeFilter} />

        {/* <Text className="text-gray-800 font-semibold mb-2">
          Credit Ageing Report (30/60/90)
        </Text> */}
        <CreditAgingCard items={creditAging} />

        {/* <Text className="text-gray-800 font-semibold mb-2">Tax Report (GST)</Text> */}
        <TaxReportCard />

       
        <ProductPerformanceCard data={productPerformance} />

        
        <DeliveryPerformanceCard stats={deliveryStats} />
      </ScrollView>
    </SafeAreaView>
  );
}
