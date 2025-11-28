// components/notifications/NotificationItem.jsx
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

export default function NotificationItem({ n, colors }) {
  return (
    <View
      className="bg-white rounded-2xl p-4 mb-3 flex-row items-center border"
      style={{
        borderColor: n.read ? "#e5e7eb" : "#cbd5e1",
        shadowColor: "#000",
        shadowOpacity: 0.07,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 1 },
      }}
    >
      {/* ICON */}
      <View
        style={{
          width: 46,
          height: 46,
          borderRadius: 12,
          backgroundColor: `${n.color}15`,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Ionicons name={n.icon} size={22} color={n.color} />
      </View>

      {/* TEXT */}
      <View className="ml-3 flex-1">
        <Text
          className={`text-sm font-semibold ${
            n.read ? "text-gray-800" : "text-black"
          }`}
        >
          {n.title}
        </Text>
        <Text className="text-xs text-gray-600 mt-[2px]">{n.message}</Text>
        <Text className="text-[10px] text-gray-400 mt-1">{n.time}</Text>
      </View>

      {/* UNREAD */}
      {!n.read && <View className="w-3 h-3 rounded-full bg-green-600" />}
    </View>
  );
}
