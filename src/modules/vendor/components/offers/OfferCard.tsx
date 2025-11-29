// import { colors } from "@/src/constants/colors";
// import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
// import { Pressable, Text, View } from "react-native";

// export default function OfferCard({ item, type }) {
//   const isVendor = type === "vendor";

//   return (
//     <Pressable
//       className="p-4 rounded-2xl mb-4"
//       style={{
//         backgroundColor: colors.light,
//         borderColor: colors.neutral,
//         borderWidth: 1,
//         shadowColor: "#000",
//         shadowOpacity: 0.08,
//         shadowRadius: 8,
//         elevation: 4,
//       }}
//     >
//       <View className="flex-row items-center">
//         <View
//           className="w-14 h-14 rounded-2xl items-center justify-center mr-4"
//           style={{
//             backgroundColor:
//               (isVendor ? colors.primaryHover : colors.secondaryHover) + "20",
//             borderWidth: 1,
//             borderColor: isVendor ? colors.primary : colors.secondary,
//           }}
//         >
//           <MaterialCommunityIcons
//             name={item.icon}
//             size={28}
//             color={isVendor ? colors.primary : colors.secondary}
//           />
//         </View>

//         <View className="flex-1">
//           <Text className="text-[17px] font-bold" style={{ color: colors.dark }}>
//             {item.title}
//           </Text>

//           <Text className="text-[13px] mt-1" style={{ color: colors.dark }}>
//             {item.desc}
//           </Text>
//         </View>

//         <Ionicons name="chevron-forward" size={22} color={colors.dark} />
//       </View>

//       <View
//         className="px-3 py-1 mt-3 rounded-full self-start"
//         style={{
//           backgroundColor:
//             (isVendor ? colors.primary : colors.secondary) + "20",
//         }}
//       >
//         <Text
//           className="text-[11px] font-semibold"
//           style={{
//             color: isVendor ? colors.primary : colors.secondary,
//           }}
//         >
//           {item.badge}
//         </Text>
//       </View>
//     </Pressable>
//   );
// }


import { colors } from "@/src/constants/colors";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

export default function OfferCard({ item, type }) {
  const isVendor = type === "vendor";
  const toneColor = isVendor ? colors.primary : colors.secondary;
  const toneHover = isVendor ? colors.primaryHover : colors.secondaryHover;

  return (
    <Pressable
      className="p-4 rounded-2xl mb-5"
      style={{
        backgroundColor: colors.light,
        borderColor: toneColor + "40",
        borderWidth: 1,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 4,
      }}
    >
      {/* TOP ROW */}
      <View className="flex-row items-center">
        {/* ICON BOX */}
        <View
          className="w-14 h-14 rounded-2xl items-center justify-center mr-4"
          style={{
            backgroundColor: toneHover + "18",
            borderWidth: 1,
            borderColor: toneColor + "80",
          }}
        >
          <MaterialCommunityIcons name={item.icon} size={28} color={toneColor} />
        </View>

        {/* TITLE + DESC */}
        <View className="flex-1">
          <Text className="text-[17px] font-bold" style={{ color: colors.dark }}>
            {item.title}
          </Text>

          <Text className="text-[13px] mt-1 leading-4" style={{ color: colors.dark }}>
            {item.desc}
          </Text>
        </View>

        <Ionicons name="chevron-forward" size={22} color={colors.dark} />
      </View>

      {/* BADGE */}
      <View
        className="px-3 py-[3px] mt-3 rounded-full self-start"
        style={{ backgroundColor: toneColor + "25" }}
      >
        <Text
          className="text-[11px] font-semibold"
          style={{ color: toneColor }}
        >
          {item.badge}
        </Text>
      </View>

      {/* EXTRA DETAILS SECTION */}
      <View className="mt-4">
        {/* VALIDITY */}
        <View className="flex-row items-center mb-2">
          <Ionicons name="calendar-outline" size={16} color={toneColor} />
          <Text className="ml-2 text-[12px]" style={{ color: colors.dark }}>
            Valid Till: {item.validity || "31 Dec 2024"}
          </Text>
        </View>

        {/* MIN ORDER */}
        <View className="flex-row items-center mb-2">
          <Ionicons name="cube-outline" size={16} color={toneColor} />
          <Text className="ml-2 text-[12px]" style={{ color: colors.dark }}>
            Min Order: {item.minOrder || "₹2,000"}
          </Text>
        </View>

        {/* BENEFIT TAGS */}
        <View className="flex-row flex-wrap mt-1">
          {(item.benefits || ["Increased Sales", "Higher Visibility"]).map((b, i) => (
            <View
              key={i}
              className="px-2 py-[3px] rounded-lg mr-2 mb-2"
              style={{
                backgroundColor: toneHover + "15",
              }}
            >
              <Text className="text-[10px]" style={{ color: toneColor }}>
                {b}
              </Text>
            </View>
          ))}
        </View>
      </View>

      {/* OFFER STRENGTH BAR */}
      <View className="mt-3">
        <Text className="text-[11px] mb-1" style={{ color: colors.dark }}>
          Offer Strength
        </Text>

        <View
          className="h-2 rounded-full overflow-hidden"
          style={{ backgroundColor: colors.neutral }}
        >
          <View
            className="h-full rounded-full"
            style={{
              width: `${item.strength || 70}%`,
              backgroundColor: toneColor,
            }}
          />
        </View>
      </View>
    </Pressable>
  );
}
