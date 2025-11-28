// import { Ionicons } from "@expo/vector-icons";
// import { useState } from "react";
// import {
//     PanResponder,
//     Text,
//     TouchableOpacity,
//     View,
// } from "react-native";
// import Animated, {
//     Easing,
//     FadeInDown,
//     FadeInLeft,
//     FadeInRight,
//     FadeInUp,
//     interpolate,
//     Layout,
//     useAnimatedStyle,
//     useSharedValue,
//     withSpring,
//     withTiming,
// } from "react-native-reanimated";

// const primary = "#2d6b06";
// const secondary = "#c7611f";

// const vendor = {
//   completion: 90,
//   kyc: [
//     { ok: true, label: "GST Number Verified" },
//     { ok: true, label: "PAN Verified" },
//     { ok: true, label: "Bank Linked (SBI ••••3328)" },
//     { ok: false, label: "Digital Signature Pending" },
//     { ok: false, label: "Insurance Document Pending" },
//   ],
//   vendorCode: "ZV_A73BB1_NYC",
//   nextTask: "Upload Digital Signature",
//   zone: {
//     title: "New York — Zone 11",
//     items: [
//       "Service Area: Brooklyn, Manhattan, Queens",
//       "Avg Daily Orders: 120–180",
//       "Delivery SLA: 6 Hours",
//     ],
//   },
// };

// // -----------------------------------------------------
// // LIQUID PROGRESS RING
// // -----------------------------------------------------
// function ProgressRing({ percent }) {
//   const progress = useSharedValue(0);

//   progress.value = withTiming(percent, {
//     duration: 1200,
//     easing: Easing.bezier(0.2, 1, 0.4, 1),
//   });

//   const animatedStyle = useAnimatedStyle(() => ({
//     transform: [
//       { scale: interpolate(progress.value, [0, 100], [0.6, 1]) },
//     ],
//   }));

//   return (
//     <Animated.View
//       className="w-20 h-20 rounded-full bg-primary/10 items-center justify-center"
//       style={animatedStyle}
//     >
//       <Text className="font-extrabold text-xl text-primary">
//         {percent}%
//       </Text>
//     </Animated.View>
//   );
// }

// // -----------------------------------------------------
// // PARALLAX CARD EFFECT
// // -----------------------------------------------------
// function useParallax() {
//   const tiltX = useSharedValue(0);
//   const tiltY = useSharedValue(0);

//   const responder = PanResponder.create({
//     onMoveShouldSetPanResponder: () => true,
//     onPanResponderMove: (_, g) => {
//       tiltX.value = g.dy / 60;
//       tiltY.value = g.dx / 60;
//     },
//     onPanResponderRelease: () => {
//       tiltX.value = withSpring(0);
//       tiltY.value = withSpring(0);
//     },
//   });

//   const animated = useAnimatedStyle(() => ({
//     transform: [
//       { rotateX: `${tiltX.value}deg` },
//       { rotateY: `${tiltY.value}deg` },
//       { scale: withSpring(1.02) },
//     ],
//   }));

//   return { responder, animated };
// }

// // -----------------------------------------------------
// // MAIN COMPONENT (LEVEL 3 ULTRA)
// // -----------------------------------------------------

// export default function OverviewCard() {
//   const [expanded, setExpanded] = useState(true);
//   const { responder, animated } = useParallax();

//   return (
//     <Animated.View
//       {...responder.panHandlers}
//       entering={FadeInUp.duration(700)}
//       layout={Layout.springify()}
//       className="bg-white/90 rounded-2xl p-5 shadow-xl border border-gray-100 mb-6"
//       style={animated}
//     >
//       {/* HEADER */}
//       <View className="flex-row justify-between items-center">
//         <View>
//           <Text className="text-lg font-extrabold text-gray-900">
//             Onboarding Status
//           </Text>
//           <Text className="text-[11px] text-gray-500">
//             Vendor verification & compliance
//           </Text>
//         </View>

//         <TouchableOpacity
//           onPress={() => setExpanded(!expanded)}
//           className="p-2 bg-gray-100 rounded-full"
//         >
//           <Ionicons
//             name={expanded ? "chevron-up" : "chevron-down"}
//             size={20}
//             color="#444"
//           />
//         </TouchableOpacity>
//       </View>

//       {/* PROGRESS BOX */}
//       <Animated.View
//         entering={FadeInDown.delay(80)}
//         className="bg-white p-4 mt-4 rounded-xl shadow-sm border border-gray-200"
//       >
//         <View className="flex-row items-center">
//           <ProgressRing percent={vendor.completion} />

//           <View className="ml-4">
//             <Text className="font-semibold text-gray-900">
//               Completion Progress
//             </Text>
//             <Text className="text-xs text-gray-500">
//               Few steps remaining
//             </Text>
//           </View>
//         </View>

//         {/* progress bar */}
//         <View className="h-2 bg-gray-200 rounded-full mt-3 overflow-hidden">
//           <Animated.View
//             entering={FadeInRight.delay(150)}
//             className="h-full bg-secondary rounded-full"
//             style={{ width: `${vendor.completion}%` }}
//           />
//         </View>
//       </Animated.View>

//       {expanded && (
//         <Animated.View entering={FadeInUp.delay(120)} layout={Layout.springify()}>
//           {/* NEXT TASK */}
//           <Animated.View
//             entering={FadeInLeft.delay(200)}
//             className="bg-secondary/10 p-4 rounded-xl mt-5 flex-row items-center"
//           >
//             <Ionicons name="alert-circle" size={22} color={secondary} />
//             <View className="ml-3">
//               <Text className="text-secondary font-semibold">
//                 Next Required Action
//               </Text>
//               <Text className="text-xs text-gray-600 mt-[2px]">
//                 {vendor.nextTask}
//               </Text>
//             </View>
//           </Animated.View>

//           {/* VERIFICATION TIMELINE */}
//           <Text className="font-semibold text-gray-900 mt-6 mb-3">
//             Verification Timeline
//           </Text>

//           {vendor.kyc.map((step, index) => (
//             <Animated.View
//               key={index}
//               entering={FadeInLeft.delay(250 + index * 150)}
//               className="flex-row items-start mb-5"
//             >
//               <View
//                 className={`w-12 h-12 rounded-xl items-center justify-center ${
//                   step.ok ? "bg-primary/15" : "bg-secondary/15"
//                 }`}
//               >
//                 <Ionicons
//                   name={step.ok ? "checkmark-circle" : "time-outline"}
//                   size={22}
//                   color={step.ok ? primary : secondary}
//                 />
//               </View>

//               <View className="ml-3 flex-1">
//                 <Text className="text-sm font-semibold text-gray-800">
//                   {step.label}
//                 </Text>

//                 <Text className="text-[11px] text-gray-500 mt-[2px]">
//                   {step.ok
//                     ? "Step completed successfully"
//                     : "Action required for verification"}
//                 </Text>

//                 <View className="flex-row items-center mt-2">
//                   <Ionicons name="calendar-outline" size={12} color="#777" />
//                   <Text className="ml-1 text-[11px] text-gray-500">
//                     {step.ok ? "Completed 2 days ago" : "Awaiting submission"}
//                   </Text>
//                 </View>

//                 {index !== vendor.kyc.length - 1 && (
//                   <View className="h-[1px] bg-gray-200 mt-4" />
//                 )}
//               </View>
//             </Animated.View>
//           ))}

//           {/* VENDOR CODE */}
//           <Animated.View
//             entering={FadeInUp.delay(600)}
//             className="mt-6 p-4 rounded-xl bg-primary/10"
//           >
//             <Text className="text-primary font-semibold">Vendor Code</Text>
//             <Text className="text-2xl font-extrabold text-primary mt-1">
//               {vendor.vendorCode}
//             </Text>
//             <Text className="text-xs text-gray-600 mt-1">
//               Used for ZIRAAT mapping & approvals.
//             </Text>
//           </Animated.View>

//           {/* ZONE INFO */}
//           <Animated.View
//             entering={FadeInUp.delay(750)}
//             className="mt-6 p-4 rounded-xl bg-white border shadow-sm"
//           >
//             <Text className="text-gray-900 font-semibold text-base flex-row">
//               <Ionicons
//                 name="location-outline"
//                 size={18}
//                 color="#555"
//               />
//               {"  " + vendor.zone.title}
//             </Text>

//             {vendor.zone.items.map((item, i) => (
//               <Animated.Text
//                 key={i}
//                 entering={FadeInLeft.delay(800 + i * 120)}
//                 className="text-gray-600 text-sm mt-1 ml-1"
//               >
//                 • {item}
//               </Animated.Text>
//             ))}
//           </Animated.View>
//         </Animated.View>
//       )}
//     </Animated.View>
//   );
// }



import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
    PanResponder,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

import Animated, {
    Easing,
    FadeInDown,
    FadeInLeft,
    FadeInRight,
    FadeInUp,
    interpolate,
    Layout,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
    withTiming,
} from "react-native-reanimated";

const primary = "#2d6b06";
const secondary = "#c7611f";

/* ======================================================================================
   ⭐ MOCKUP DETAILS (FULL ENTERPRISE DATA)
   ====================================================================================== */
const vendor = {
  name: "GreenField Agro Distributors",
  vendorCode: "ZV_A73BB1_NYC",
  businessType: "Wholesale Agro Supply",
  registrationDate: "12 Jan 2024",
  lastUpdated: "19 Feb 2025",

  completion: 84,
  nextTask: "Upload Digital Signature (DSC)",

  kyc: [
    {
      ok: true,
      label: "GST Number Verified",
      details: "GSTIN: 22ABCTY2917K1A9",
      timestamp: "Completed 4 days ago",
    },
    {
      ok: true,
      label: "PAN Verified",
      details: "PAN: ABCDE1234T",
      timestamp: "Completed 4 days ago",
    },
    {
      ok: true,
      label: "Bank Linked",
      details: "SBI ••••3328 (IFSC: SBIN000771)",
      timestamp: "Completed 3 days ago",
    },
    {
      ok: false,
      label: "Digital Signature Pending",
      details: "DSC certificate not uploaded",
      timestamp: "Required before approval",
    },
    {
      ok: false,
      label: "Insurance Document Pending",
      details: "Business liability insurance not provided",
      timestamp: "Awaiting vendor upload",
    },
  ],

  zone: {
    title: "Kahmir (Primary Delivery Region)",
    items: [
      "Service Area: Srinagar, Kashmir",
      "Warehouse Coverage Radius: 27 km",
      "Avg Daily Orders: 120–180",
      "Delivery SLA: 6 Hours (Urban Standard)",
      "Active Clients: 84 Retailers | 11 Distributors",
    ],
  },

  metrics: {
    totalOrders: 1289,
    successRate: "96.4%",
    avgDeliveryTime: "4.2 hrs",
    monthlyGrowth: "12%",
  },
};

/* ======================================================================================
   ⭐ LEVEL-3 LIQUID PROGRESS RING
   ====================================================================================== */
function ProgressRing({ percent }) {
  const progress = useSharedValue(0);

  progress.value = withTiming(percent, {
    duration: 1200,
    easing: Easing.bezier(0.22, 1, 0.36, 1),
  });

  const animatedCircle = useAnimatedStyle(() => ({
    transform: [{ scale: interpolate(progress.value, [0, 100], [0.55, 1]) }],
  }));

  return (
    <Animated.View
      className="w-16 h-16 rounded-full bg-primary/10 items-center justify-center"
      style={animatedCircle}
    >
      <Text className="font-extrabold text-lg text-primary">{percent}%</Text>
    </Animated.View>
  );
}


function useParallax() {
  const tiltX = useSharedValue(0);
  const tiltY = useSharedValue(0);

  const responder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (_, g) => {
      tiltX.value = g.dy / 70;
      tiltY.value = g.dx / 70;
    },
    onPanResponderRelease: () => {
      tiltX.value = withSpring(0);
      tiltY.value = withSpring(0);
    },
  });

  const animated = useAnimatedStyle(() => ({
    transform: [
      { rotateX: `${tiltX.value}deg` },
      { rotateY: `${tiltY.value}deg` },
      { scale: withSpring(1.02) },
    ],
  }));

  return { responder, animated };
}


export default function OverviewCard() {
  const [expanded, setExpanded] = useState(true);
  const { responder, animated } = useParallax();

  return (
    <Animated.View
      {...responder.panHandlers}
      entering={FadeInUp.duration(750)}
      layout={Layout.springify()}
      className="bg-white/90 rounded-2xl p-5 mb-6 shadow-lg border border-gray-100"
      style={animated}
    >
      {/* HEADER */}
      <View className="flex-row justify-between items-center">
        <View>
          <Text className="text-lg font-extrabold text-black">
            Onboarding Status
          </Text>
          <Text className="text-[11px] text-gray-500 mt-[2px]">
            Vendor KYC + Document Verification
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => setExpanded(!expanded)}
          className="p-2 rounded-full bg-gray-100"
        >
          <Ionicons
            name={expanded ? "chevron-up" : "chevron-down"}
            size={20}
            color="#333"
          />
        </TouchableOpacity>
      </View>

      {/* PROGRESS SECTION */}
      <Animated.View
        entering={FadeInDown.delay(50)}
        className="bg-white p-4 mt-4 rounded-xl shadow-sm border border-gray-200"
      >
        <View className="flex-row items-center">
          <ProgressRing percent={vendor.completion} />

          <View className="ml-4 flex-1">
            <Text className="font-semibold text-black text-sm">
              Completion Progress
            </Text>
            <Text className="text-xs text-gray-500 mt-[2px]">
              84% onboarding complete
            </Text>
          </View>
        </View>

        {/* progress bar */}
        <View className="h-2 bg-gray-200 rounded-full mt-3 overflow-hidden">
          <Animated.View
            entering={FadeInRight.delay(120)}
            className="h-full bg-secondary rounded-full"
            style={{ width: `${vendor.completion}%` }}
          />
        </View>
      </Animated.View>

      {/* COLLAPSIBLE */}
      {expanded && (
        <Animated.View layout={Layout.springify()} entering={FadeInUp.delay(100)}>
          {/* NEXT TASK */}
          <Animated.View
            entering={FadeInLeft.duration(600)}
            className="bg-secondary/10 p-4 rounded-xl mt-4 flex-row items-center"
          >
            <Ionicons name="alert-circle" size={22} color={secondary} />
            <View className="ml-3">
              <Text className="text-secondary font-semibold">Next Step</Text>
              <Text className="text-xs text-gray-600">{vendor.nextTask}</Text>
            </View>
          </Animated.View>

          {/* VERIFICATION TIMELINE */}
          <Text className="font-semibold text-gray-900 mt-6 mb-3 text-base">
            Verification Timeline
          </Text>

          {vendor.kyc.map((step, index) => (
            <Animated.View
              key={index}
              entering={FadeInLeft.delay(150 + index * 120)}
              className="flex-row items-start mb-5"
            >
              <View
                className={`w-11 h-11 rounded-xl items-center justify-center shadow-sm ${
                  step.ok ? "bg-primary/15" : "bg-secondary/15"
                }`}
              >
                <Ionicons
                  name={step.ok ? "checkmark-circle" : "time-outline"}
                  size={22}
                  color={step.ok ? primary : secondary}
                />
              </View>

              <View className="ml-3 flex-1">
                <Text
                  className={`text-sm font-semibold ${
                    step.ok ? "text-gray-800" : "text-secondary"
                  }`}
                >
                  {step.label}
                </Text>

                <Text className="text-[11px] text-gray-500 mt-[2px]">
                  {step.details}
                </Text>

                <View className="flex-row items-center mt-2">
                  <Ionicons name="calendar-outline" size={12} color="#777" />
                  <Text className="text-[11px] text-gray-500 ml-1">
                    {step.timestamp}
                  </Text>
                </View>

                {index !== vendor.kyc.length - 1 && (
                  <View className="h-[1px] bg-gray-200 mt-3" />
                )}
              </View>
            </Animated.View>
          ))}

          {/* VENDOR CODE */}
          <Animated.View
            entering={FadeInUp.delay(450)}
            className="mt-6 bg-primary/10 p-4 rounded-xl"
          >
            <Text className="text-primary font-semibold text-base">
              Vendor Code
            </Text>
            <Text className="text-xl font-extrabold text-primary mt-1 tracking-wide">
              {vendor.vendorCode}
            </Text>
            <Text className="text-xs text-gray-600 mt-1">
              Used for ZIRAAT mapping + credit approvals.
            </Text>
          </Animated.View>

          {/* ZONE DETAILS */}
          <Animated.View
            entering={FadeInUp.delay(650)}
            className="mt-6 bg-white p-4 rounded-xl shadow-sm border border-gray-200"
          >
            <Text className="text-gray-900 font-semibold text-base flex-row items-center">
              <Ionicons name="location-outline" size={18} color="#444" />{" "}
              {vendor.zone.title}
            </Text>

            {vendor.zone.items.map((z, i) => (
              <Animated.Text
                key={i}
                entering={FadeInLeft.delay(700 + i * 120)}
                className="text-gray-600 text-sm mt-1 ml-1"
              >
                • {z}
              </Animated.Text>
            ))}
          </Animated.View>
        </Animated.View>
      )}
    </Animated.View>
  );
}
