import { colors } from "@/src/constants/colors";
import { Text, TouchableOpacity, View } from "react-native";

export default function SalesTabs({ tab, setTab }) {
  const tabs = ["daily", "weekly", "monthly"];

  return (
    <View className="flex-row mt-2 mb-4">
      {tabs.map((t) => (
        <TouchableOpacity
          key={t}
          onPress={() => setTab(t)}
          className="px-4 py-2 rounded-full mr-2"
          style={{
            backgroundColor: tab === t ? colors.darkHover : "#f3f4f6",
            borderWidth: tab === t ? 1 : 0,
            borderColor: tab === t ? colors.primary : "transparent",
          }}
>
          <Text
            className="text-xs font-semibold"
            style={{
              color: tab === t ? colors.primary : colors.dark,
            }}
          >
            {t.toUpperCase()}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
