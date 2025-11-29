import { colors } from "@/src/constants/colors";
import { Text, View } from "react-native";

export default function SettlementLogRow({ log }) {
  const color =
    log.status === "Paid"
      ? colors.primaryHover
      : log.status === "Failed"
      ? colors.error
      : colors.secondaryHover;

  return (
    <View
      className="flex-row justify-between py-2 border-b"
      style={{ borderColor: colors.neutral }}
    >
      <Text style={{ color: colors.dark }}>{log.date}</Text>

      <Text style={{ color: colors.primaryHover, fontWeight: "bold" }}>
        ₹{log.amount.toLocaleString()}
      </Text>

      <Text style={{ color, fontWeight: "600" }}>{log.status}</Text>

      <Text style={{ color: colors.darkHover, fontSize: 12 }}>{log.mode}</Text>
    </View>
  );
}
