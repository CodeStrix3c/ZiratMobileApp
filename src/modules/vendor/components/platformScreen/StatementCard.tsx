import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

export default function StatementCard({ item, colors }) {
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <View
        className="px-4 py-4 rounded-2xl mb-3 flex-row items-center justify-between"
        style={{
          backgroundColor: colors.light,
          borderColor: colors.border,
          borderWidth: 1,
          shadowColor: "#000",
          shadowOpacity: 0.06,
          shadowRadius: 6,
          elevation: 2,
        }}
      >
        {/* LEFT SECTION */}
        <View className="flex-row items-center">
          {/* Icon Bubble */}
          <View
            className="w-10 h-10 rounded-xl items-center justify-center"
            style={{
              backgroundColor: `${colors.primaryLight}70`,
              borderColor: colors.primary,
              borderWidth: 1,
            }}
          >
            <Ionicons
              name="document-text-outline"
              size={20}
              color={colors.primaryDark}
            />
          </View>

          {/* Title */}
          <View className="ml-3">
            <Text className="text-[15px] font-semibold text-gray-900">
              {item.week}
            </Text>
            <Text className="text-[12px] text-gray-500 mt-[2px]">
              Weekly Fee Statement • {item.format}
            </Text>
          </View>
        </View>

        {/* DOWNLOAD BUTTON */}
        <View
          className="w-10 h-10 rounded-xl items-center justify-center"
          style={{
            backgroundColor: `${colors.primaryLight}90`,
            borderColor: colors.primary,
            borderWidth: 1,
          }}
        >
          <Ionicons
            name="download-outline"
            size={20}
            color={colors.primaryDark}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}
