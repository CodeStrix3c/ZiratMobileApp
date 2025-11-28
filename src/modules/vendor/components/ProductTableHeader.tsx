import { Text, View } from "react-native";

export default function ProductTableHeader() {
  return (
    <View
      className="flex-row items-center px-4 py-3 rounded-t-2xl"
      style={{
        backgroundColor: "#ffffffdd",
        backdropFilter: "blur(8px)",
        borderBottomWidth: 1,
        borderBottomColor: "rgba(0,0,0,0.07)",
        shadowColor: "#000",
        shadowOpacity: 0.04,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 2 },
      }}
    >
      {/* PRODUCT */}
      <View className="flex-1">
        <Text
          className="text-[11px] font-semibold tracking-wider"
          style={{ color: "#374151", letterSpacing: 1 }}
        >
          PRODUCT
        </Text>
      </View>

      {/* SEPARATOR */}
      <View
        className="h-4 mx-2"
        style={{ width: 1, backgroundColor: "rgba(0,0,0,0.08)" }}
      />

      {/* PRICE */}
      <View className="w-16 items-center">
        <Text
          className="text-[11px] font-semibold tracking-wider"
          style={{ color: "#374151", letterSpacing: 1 }}
        >
          PRICE
        </Text>
      </View>

      <View
        className="h-4 mx-2"
        style={{ width: 1, backgroundColor: "rgba(0,0,0,0.08)" }}
      />

      {/* EXPIRY */}
      <View className="w-20 items-center">
        <Text
          className="text-[11px] font-semibold tracking-wider"
          style={{ color: "#374151", letterSpacing: 1 }}
        >
          EXPIRY
        </Text>
      </View>

      <View
        className="h-4 mx-2"
        style={{ width: 1, backgroundColor: "rgba(0,0,0,0.08)" }}
      />

      {/* STATUS */}
      <View className="w-16 items-center">
        <Text
          className="text-[11px] font-semibold tracking-wider"
          style={{ color: "#374151", letterSpacing: 1 }}
        >
          STATUS
        </Text>
      </View>
    </View>
  );
}
