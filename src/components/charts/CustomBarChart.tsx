// src/components/charts/CustomBarChart.tsx
import React from "react";
import { Dimensions, Text, View } from "react-native";
import { BarChart, LineChart, PieChart } from "react-native-chart-kit";

const getScreenWidth = () => Math.max(320, Dimensions.get("window").width - 32);

type Props = {
  labels?: string[];
  values?: number[];
  title?: string;
  type?: "bar" | "line" | "pie";
  height?: number;
};

export default function CustomBarChart({
  labels = [],
  values = [],
  title,
  type = "bar",
  height,
}: Props) {
  const screenWidth = getScreenWidth();
  const chartHeight = height || (type === "pie" ? 220 : 220);

  if (!labels.length || !values.length || labels.length !== values.length) {
    return (
      <View style={{ paddingVertical: 12 }}>
        <Text style={{ fontSize: 12, color: "#6B7280", textAlign: "center" }}>
          No chart data available.
        </Text>
      </View>
    );
  }

  if (type === "pie") {
    const pieData = labels.map((label, i) => ({
      name: label,
      population: values[i],
      color: CAC[i % CAC.length],
      legendFontColor: "#374151",
      legendFontSize: 12,
    }));

    return (
      <View>
        {title ? (
          <Text style={{ fontSize: 13, color: "#374151", marginBottom: 8 }}>{title}</Text>
        ) : null}
        <PieChart
          data={pieData}
          width={screenWidth}
          height={chartHeight}
          chartConfig={CHART_CONFIG}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
          center={[0, 0]}
        />
      </View>
    );
  }

  const data = { labels, datasets: [{ data: values }] };

  return (
    <View>
      {title ? (
        <Text style={{ fontSize: 13, color: "#374151", marginBottom: 8 }}>{title}</Text>
      ) : null}
      {type === "bar" ? (
        <BarChart
          data={data}
          width={screenWidth}
          height={chartHeight}
          fromZero
          showValuesOnTopOfBars
          chartConfig={CHART_CONFIG}
          style={{ borderRadius: 12 }}
        />
      ) : (
        <LineChart
          data={data}
          width={screenWidth}
          height={chartHeight}
          bezier
          fromZero
          chartConfig={CHART_CONFIG}
          style={{ borderRadius: 12 }}
        />
      )}
    </View>
  );
}

const CAC = [
  "#10B981",
  "#3B82F6",
  "#F97316",
  "#A78BFA",
  "#F43F5E",
  "#06B6D4",
  "#FBBF24",
];

const CHART_CONFIG = {
  backgroundGradientFrom: "#ffffff",
  backgroundGradientTo: "#ffffff",
  decimalPlaces: 1,
  color: (opacity = 1) => `rgba(34, 197, 94, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(55, 65, 81, ${opacity})`,
  style: { borderRadius: 12 },
  propsForDots: { r: "3", strokeWidth: "1", stroke: "#10B981" },
} as any;
