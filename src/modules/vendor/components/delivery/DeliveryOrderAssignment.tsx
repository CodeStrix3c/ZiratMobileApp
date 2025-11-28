import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

export default function DeliveryOrderAssignment({ order, theme }) {
  const statuses = [
    { label: "Pending", icon: "time-outline", color: "#6b7280" },
    { label: "Out for Delivery", icon: "bicycle-outline", color: theme.primary },
    { label: "Delivered", icon: "checkmark-circle-outline", color: "#16a34a" },
    { label: "Failed/Returned", icon: "alert-circle-outline", color: "#dc2626" },
  ];

  return (
    <View
      className="rounded-2xl p-5 mb-6"
      style={{
        backgroundColor: "#fff",
        borderColor: "#e5e7eb",
        borderWidth: 1,
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 6,
        elevation: 3,
      }}
    >
      {/* HEADER */}
      <Text className="text-lg font-bold text-gray-900 mb-4">
        Delivery Order Assignment
      </Text>

      {/* STATUS LIST (Simple & Clean) */}
      <View className="mb-5">
        {statuses.map((s, i) => {
          const active = s.label === order.status;

          return (
            <View
              key={i}
              className="flex-row items-center justify-between py-2"
            >
              <View className="flex-row items-center">
                <Ionicons
                  name={s.icon}
                  size={18}
                  color={active ? s.color : "#9ca3af"}
                />
                <Text
                  className="ml-2 text-[14px]"
                  style={{
                    color: active ? s.color : "#6b7280",
                    fontWeight: active ? "700" : "500",
                  }}
                >
                  {s.label}
                </Text>
              </View>

              {active && (
                <View
                  className="px-3 py-[2px] rounded-full"
                  style={{
                    backgroundColor: `${s.color}22`,
                    borderColor: s.color,
                    borderWidth: 1,
                  }}
                >
                  <Text
                    className="text-[11px] font-semibold"
                    style={{ color: s.color }}
                  >
                    Active
                  </Text>
                </View>
              )}
            </View>
          );
        })}
      </View>

      {/* ACTION BUTTON – ASSIGN AGENT */}
      <TouchableOpacity
        activeOpacity={0.8}
        className="flex-row items-center p-4 rounded-xl mb-3"
        style={{
          backgroundColor: "#f9fafb",
          borderColor: "#e5e7eb",
          borderWidth: 1,
        }}
      >
        <View
          className="w-10 h-10 rounded-lg items-center justify-center"
          style={{ backgroundColor: `${theme.secondary}18` }}
        >
          <Ionicons
            name="person-add-outline"
            size={20}
            color={theme.secondary}
          />
        </View>

        <Text className="ml-3 font-semibold text-gray-800 text-[14px]">
          Assign Delivery Agent
        </Text>

        <View className="flex-1 items-end">
          <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
        </View>
      </TouchableOpacity>

      {/* ACTION BUTTON – CHANGE STATUS */}
      <TouchableOpacity
        activeOpacity={0.8}
        className="flex-row items-center p-4 rounded-xl"
        style={{
          backgroundColor: "#f9fafb",
          borderColor: "#e5e7eb",
          borderWidth: 1,
        }}
      >
        <View
          className="w-10 h-10 rounded-lg items-center justify-center"
          style={{ backgroundColor: `${theme.primary}18` }}
        >
          <Ionicons name="repeat-outline" size={20} color={theme.primary} />
        </View>

        <Text className="ml-3 font-semibold text-gray-800 text-[14px]">
          Change Delivery Status
        </Text>

        <View className="flex-1 items-end">
          <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
        </View>
      </TouchableOpacity>
    </View>
  );
}
