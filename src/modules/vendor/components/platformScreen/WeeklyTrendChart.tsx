import { Dimensions, Text, View } from "react-native";
import Svg, { Polyline } from "react-native-svg";

export default function WeeklyTrendChart({ data, colors }) {
  const { width } = Dimensions.get("window");
  const chartWidth = width - 48;
  const chartHeight = 90;

  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;

  const points = data
    .map((v, i) => {
      const x = (chartWidth / (data.length - 1)) * i;
      const y = chartHeight - ((v - min) / range) * (chartHeight - 10) - 4;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <View className="rounded-2xl border shadow-sm mb-6 bg-white p-4" style={{ borderColor: colors.border }}>
      <View className="flex-row justify-between mb-3">
        <Text className="text-[16px] font-semibold text-gray-900">Weekly Fee Trend</Text>
        <Text className="text-[12px] text-gray-500">Last 6 weeks</Text>
      </View>

      <Svg width={chartWidth} height={chartHeight}>
        <Polyline
          points={points}
          stroke={colors.primary}
          strokeWidth={2}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
}
