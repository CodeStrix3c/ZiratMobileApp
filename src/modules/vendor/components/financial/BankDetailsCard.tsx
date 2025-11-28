import { colors } from "@/src/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

export default function BankDetailsCard() {

  // ------------------ MOCKUP DATA ------------------
  const bank = {
    accountName: "Primary Account - HDFC Bank",
    masked: "XXXX 9831",
    amount: 28730.3,
    change: 270.5,
    status: "Settled",
  };

  const logs = [
    { id: "SETT-202315-001", amount: 28730.3, status: "Completed" },
    { id: "SETT-202315-002", amount: 30100.0, status: "Completed" },
    { id: "SETT-202315-003", amount: 27600.0, status: "Processing" },
    { id: "SETT-202315-004", amount: 30120.5, status: "Failed" },
  ];

  return (
    <View className="mt-8">

      {/* HEADER */}
      <View className="flex-row justify-between items-center mb-3">
        <Text className="font-bold text-[18px]" style={{ color: colors.dark }}>
          Bank Details & Logs
        </Text>

        <TouchableOpacity>
          <Text
            className="text-[12px] font-semibold"
            style={{ color: colors.primary }}
          >
            View All
          </Text>
        </TouchableOpacity>
      </View>

      {/* BANK INFO CARD */}
      <View
        className="p-5 rounded-2xl mb-5"
        style={{
          backgroundColor: colors.light,
          borderColor: colors.neutral,
          borderWidth: 1,
          shadowColor: "#000",
          shadowOpacity: 0.08,
          shadowRadius: 6,
          elevation: 3,
        }}
      >
        {/* Header row */}
        <View className="flex-row justify-between items-center mb-2">
          <Text className="font-semibold text-[15px]" style={{ color: colors.dark }}>
            {bank.accountName}
          </Text>

          <View
            className="px-3 py-[3px] rounded-full"
            style={{ backgroundColor: colors.primary }}
          >
            <Text className="text-white text-[11px]">{bank.status}</Text>
          </View>
        </View>

        {/* Account masked */}
        <Text className="text-[13px] text-gray-500 mb-1">{bank.masked}</Text>

        {/* Amount */}
        <Text
          className="text-[24px] font-extrabold tracking-tight"
          style={{ color: colors.secondaryHover }}
        >
          ₹{bank.amount.toLocaleString()}
        </Text>

        {/* Positive change */}
        <Text
          className="text-[12px] font-semibold mt-[2px]"
          style={{ color: colors.primary }}
        >
          +₹{bank.change}
        </Text>

        {/* Download Button */}
        <TouchableOpacity
          className="mt-4 px-3 py-2 rounded-xl flex-row items-center justify-center"
          style={{ backgroundColor: colors.primary }}
        >
          <Ionicons name="download-outline" size={16} color={colors.light} />
          <Text className="ml-2 text-white font-semibold text-[13px]">
            Download Latest Settlement
          </Text>
        </TouchableOpacity>
      </View>

      {/* LOGS */}
      <Text
        className="font-semibold text-[16px] mb-2"
        style={{ color: colors.dark }}
      >
        Settlement Logs
      </Text>

      <View
        className="rounded-2xl border"
        style={{ borderColor: colors.neutral }}
      >
        {logs.map((log, i) => {
          const statusColor =
            log.status === "Completed"
              ? colors.primary
              : log.status === "Failed"
              ? colors.error
              : colors.secondary;

          return (
            <View
              key={i}
              className="flex-row justify-between items-center py-3 px-4 border-b"
              style={{ borderColor: colors.neutral }}
            >
              <View className="">
                <Text className="font-semibold text-[14px]" style={{ color: colors.dark }}>
                  {log.id}
                </Text>
                <Text className="text-[11px] text-gray-500">Settlement ID</Text>
              </View>

              <View className="items-end">
                <Text
                  className="font-bold text-[15px]"
                  style={{ color: colors.secondaryHover }}
                >
                  ₹{log.amount.toLocaleString()}
                </Text>

                <Text
                  className="text-[12px] font-semibold"
                  style={{ color: statusColor }}
                >
                  {log.status}
                </Text>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
}
