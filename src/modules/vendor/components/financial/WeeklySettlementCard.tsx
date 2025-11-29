// import { colors } from "@/src/constants/colors";
// import { Text, TouchableOpacity, View } from "react-native";

// export default function WeeklySettlementCard({ item }) {
//   const statusColor =
//     item.status === "Paid"
//       ? colors.primary
//       : item.status === "Processing"
//       ? colors.secondary
//       : colors.error;

//   return (
//     <View
//       className="rounded-xl p-4 mb-3"
//       style={{
//         backgroundColor: colors.light,
//         borderColor: colors.neutral,
//         borderWidth: 1,
//       }}
//     >
//       <View className="flex-row justify-between items-center">
//         <Text className="font-semibold text-[15px]" style={{ color: colors.dark }}>
//           {item.week}
//         </Text>

//         <View
//           className="px-2 py-[3px] rounded-full"
//           style={{ backgroundColor: `${statusColor}33` }}
//         >
//           <Text className="text-[10px] font-semibold" style={{ color: statusColor }}>
//             {item.status}
//           </Text>
//         </View>
//       </View>

//       <View className="flex-row justify-between mt-3">
//         <SetDetail label="Cash Payout" value={item.cash} />
//         <SetDetail label="Credit Payout" value={item.credit} />
//       </View>

//       <View className="flex-row justify-between mt-1">
//         <SetDetail label="Fee Deduction" value={item.fee} />
//         <SetDetail label="Discount Adj." value={item.discount} />
//       </View>

//       <TouchableOpacity
//         className="mt-3 py-2 rounded-lg"
//         style={{ backgroundColor: colors.primaryLight }}
//       >
//         <Text className="text-center text-sm font-semibold" style={{ color: colors.primaryHover }}>
//           Download PDF
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// function SetDetail({ label, value }) {
//   return (
//     <View>
//       <Text className="text-[11px]" style={{ color: colors.dark }}>
//         {label}
//       </Text>
//       <Text className="text-[15px] font-semibold" style={{ color: colors.dark }}>
//         ₹{value.toLocaleString()}
//       </Text>
//     </View>
//   );
// }


import { colors } from "@/src/constants/colors";
import { Text, TouchableOpacity, View } from "react-native";

export default function WeeklySettlementCard({ weekly }) {
  return (
    <View className="mt-4">
      <Text className=" font-semibold text-lg mb-3">
        Weekly Settlements
      </Text>

      {weekly.map((item, i) => (
        <View
          key={i}
          className="bg-[#ffffff] p-4 rounded-2xl mb-4 border"
          style={{ borderColor: colors.neutral }}
        >
          <View className="flex-row justify-between items-center">
            <Text className=" font-semibold text-base">
              {item.week}
            </Text>

            <View
              className="px-3 py-[3px] rounded-full"
              style={{ backgroundColor: `${colors.primary}25` }}
            >
              <Text style={{ color: colors.primary }} className="text-[11px] font-semibold">
                {item.status}
              </Text>
            </View>
          </View>

          <Text className="mt-2  font-bold text-xl">
            ₹{item.amount.toLocaleString()}
          </Text>

          <TouchableOpacity
            className="mt-3 px-4 py-2 rounded-lg"
            style={{ backgroundColor: colors.primary }}
          >
            <Text className="text-white text-center font-semibold text-sm">
              Download PDF
            </Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}
