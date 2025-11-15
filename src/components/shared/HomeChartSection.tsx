import React from "react";
import { Dimensions, Text, View } from "react-native";
import { BarChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

export default function HomeChartSection() {
  const data = {
    labels: ["Crops", "Harvest", "Irrigation"],
    datasets: [
      {
        data: [240, 85, 70],
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: "#ffffff",
    backgroundGradientTo: "#ffffff",
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(46, 139, 87, ${opacity})`, 
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    barPercentage: 0.6,
    style: {
      borderRadius: 16,
    },
  };

  return (
    <View
      style={{
        marginVertical: 20,
        backgroundColor: "#f6faf4",
        borderRadius: 16,
        padding: 16,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
      }}
    >
      <Text
        style={{
          fontSize: 18,
          fontWeight: "700",
          color: "#2d6b06",
          marginBottom: 10,
        }}
      >
        Farm Overview
      </Text>

      <BarChart
        data={data}
        width={screenWidth - 40}
        height={220}
        yAxisLabel=""
        chartConfig={chartConfig}
        verticalLabelRotation={0}
        fromZero
        showValuesOnTopOfBars
        style={{
          borderRadius: 8,
        }}
      />
    </View>
  );
}
