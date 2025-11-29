import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

export default function DeliveryHeaderCard({ order, theme }) {
  return (
    <View
      className="rounded-3xl p-5 mb-6"
      style={{
        backgroundColor: "#ffffff",
        borderColor: `${theme.primary}25`,
        borderWidth: 1,
        shadowColor: "#000",
        shadowOpacity: 0.08,
        shadowRadius: 10,
        elevation: 4,
      }}
    >
      {/* TOP ACCENT LINE */}
      <View
        style={{
          height: 4,
          width: 60,
          borderRadius: 20,
          backgroundColor: theme.primary,
          marginBottom: 14,
        }}
      />

      {/* ORDER ID */}
      <Text className="text-xl font-extrabold text-gray-900 tracking-wide">
        {order.id}
      </Text>

      <Text className="text-gray-500 mt-1 text-[13px]">
        Delivery & Logistics Monitoring • Live Tracking
      </Text>

      {/* STATUS CHIP */}
      <View
        className="flex-row items-center mt-4 px-3 py-[6px] rounded-full self-start"
        style={{
          backgroundColor: `${theme.primary}18`,
          borderWidth: 1,
          borderColor: `${theme.primary}50`,
        }}
      >
        <Ionicons
          name={
            order.status === "Delivered"
              ? "checkmark-circle-outline"
              : order.status === "Out for Delivery"
              ? "bicycle-outline"
              : order.status === "Pending"
              ? "time-outline"
              : "alert-circle-outline"
          }
          size={14}
          color={theme.primaryDark}
        />

        <Text
          className="ml-2 text-xs font-semibold"
          style={{ color: theme.primaryDark }}
        >
          {order.status}
        </Text>
      </View>

      {/* ORDER META */}
      <View className="flex-row justify-between mt-5 border-t pt-3 border-gray-200">
        <View>
          <Text className="text-[12px] text-gray-500">Assigned To</Text>
          <Text className="text-[13px] font-semibold text-gray-800 mt-[2px]">
            {order.agent?.name || "Not Assigned"}
          </Text>
        </View>

        <View className="items-end">
          <Text className="text-[12px] text-gray-500">Status</Text>
          <Text
            className="text-[13px] font-semibold"
            style={{ color: theme.primaryDark }}
          >
            {order.status}
          </Text>
        </View>
      </View>
    </View>
  );
}
