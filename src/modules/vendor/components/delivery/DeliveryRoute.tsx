import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

export default function DeliveryRouteView({ order, theme }) {
  return (
    <View
      className="rounded-3xl p-5 mb-6"
      style={{
        backgroundColor: "#fff",
        borderColor: "#e5e7eb",
        borderWidth: 1,
        shadowColor: "#000",
        shadowOpacity: 0.06,
        shadowRadius: 10,
        elevation: 3,
      }}
    >
      {/* HEADER */}
      <Text className="text-lg font-bold text-gray-900 mb-4">
        Delivery Route View
      </Text>

      {/* MAP SECTION */}
      <View
        className="w-full h-48 rounded-2xl overflow-hidden mb-5 items-center justify-center"
        style={{
          backgroundColor: "#eef2f5",
          borderColor: "#d0d7dd",
          borderWidth: 1,
        }}
      >
        <Ionicons name="map-outline" size={42} color="#94a3b8" />
        <Text className="text-gray-500 text-sm mt-1">Map Preview</Text>
      </View>

      {/* ROUTE TITLE */}
      <Text className="text-[15px] font-semibold text-gray-900 mb-3">
        Delivery Route (Sequence)
      </Text>

      {/* TIMELINE ROUTE LIST */}
      <View className="pl-3">
        {order.route.map((stop, index) => (
          <View key={index} className="flex-row mb-6 relative">
            {/* Vertical Line */}
            {index !== order.route.length - 1 && (
              <View
                className="absolute left-[11px] top-5 w-[2px] h-full"
                style={{ backgroundColor: "#d1d5db" }}
              />
            )}

            {/* DOT */}
            <View
              className="w-5 h-5 rounded-full items-center justify-center"
              style={{
                backgroundColor:
                  index === 0
                    ? `${theme.primary}22`
                    : index === order.route.length - 1
                    ? `${theme.secondary}22`
                    : "#e5e7eb",
                borderColor:
                  index === 0
                    ? theme.primary
                    : index === order.route.length - 1
                    ? theme.secondary
                    : "#9ca3af",
                borderWidth: 1.4,
              }}
            >
              <Ionicons
                name={
                  index === 0
                    ? "storefront-outline"
                    : index === order.route.length - 1
                    ? "return-down-back-outline"
                    : "location-outline"
                }
                size={12}
                color={
                  index === 0
                    ? theme.primary
                    : index === order.route.length - 1
                    ? theme.secondary
                    : "#6b7280"
                }
              />
            </View>

            {/* STOP INFO */}
            <View className="ml-4 flex-1">
              <Text className="text-gray-800 font-semibold text-[14px]">
                {stop}
              </Text>

              <Text className="text-[11px] text-gray-500 mt-[2px]">
                {index === 0
                  ? "Pickup Point"
                  : index === order.route.length - 1
                  ? "Return Hub"
                  : `Stop ${index}`}
              </Text>
            </View>

            {/* DRAG HANDLE */}
            <View className="justify-center pr-1">
              <Ionicons name="reorder-three-outline" size={22} color="#9ca3af" />
            </View>
          </View>
        ))}
      </View>

      {/* REORDER BUTTON */}
      <TouchableOpacity
        className="mt-2 flex-row items-center justify-center py-3 rounded-xl"
        style={{
          backgroundColor: `${theme.primary}18`,
          borderColor: theme.primary,
          borderWidth: 1,
        }}
      >
        <Ionicons name="swap-vertical-outline" size={20} color={theme.primaryDark} />
        <Text className="ml-2 font-semibold text-gray-800">
          Reorder Delivery Sequence
        </Text>
      </TouchableOpacity>
    </View>
  );
}
