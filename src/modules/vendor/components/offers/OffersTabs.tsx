    import { colors } from "@/src/constants/colors";
import { Text, TouchableOpacity, View } from "react-native";

export default function OffersTabs({ tab, setTab }) {
  return (
    <View
      className="flex-row p-1 rounded-3xl shadow"
      style={{ backgroundColor: colors.neutral }}
    >
      {["vendor", "platform"].map((key) => {
        const active = tab === key;
        return (
          <TouchableOpacity
            key={key}
            className="flex-1 py-3 rounded-2xl"
            onPress={() => setTab(key)}
            style={{
              backgroundColor: active ? colors.primary : "transparent",
            }}
          >
            <Text
              className="text-center font-semibold"
              style={{
                color: active ? colors.light : colors.dark,
              }}
            >
              {key === "vendor" ? "Vendor Offers" : "Ziraat Offers"}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
