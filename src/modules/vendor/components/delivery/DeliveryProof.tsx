import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

export default function DeliveryProof({ theme }) {
  return (
    <View
      className="rounded-3xl p-5 mb-6"
      style={{
        backgroundColor: "#fff",
        borderColor: "#e5e7eb",
        borderWidth: 1,
        shadowColor: "#000",
        shadowOpacity: 0.06,
        shadowRadius: 10,
        elevation: 4,
      }}
    >
      {/* HEADER */}
      <Text className="text-lg font-extrabold text-gray-900 mb-4">
        Delivery Proof
      </Text>

      {/* STEP INDICATOR */}
      <View className="flex-row items-center mb-5">
        <View
          className="w-3 h-3 rounded-full"
          style={{ backgroundColor: theme.primary }}
        />
        <View className="flex-1 h-[2px] mx-1" style={{ backgroundColor: theme.primary }} />
        <View
          className="w-3 h-3 rounded-full"
          style={{ backgroundColor: theme.secondary }}
        />
      </View>

      {/* PHOTO UPLOAD CARD */}
      <TouchableOpacity
        activeOpacity={0.9}
        className="border-2 rounded-2xl mb-4 py-6 items-center justify-center"
        style={{
          borderColor: `${theme.primary}60`,
          backgroundColor: `${theme.primary}08`,
          borderStyle: "dashed",
        }}
      >
        <Ionicons name="camera-outline" size={40} color={theme.primaryDark} />
        <Text className="mt-2 text-gray-900 font-semibold">
          Tap to Upload Photo
        </Text>
        <Text className="text-xs text-gray-500 mt-1">
          (Delivery item or doorstep image)
        </Text>
      </TouchableOpacity>

      {/* PHOTO PREVIEW */}
      <View
        className="w-full h-40 rounded-2xl overflow-hidden mb-6 items-center justify-center"
        style={{
          backgroundColor: "#f3f4f6",
          borderColor: "#d1d5db",
          borderWidth: 1,
        }}
      >
        <Ionicons name="image-outline" size={40} color="#9ca3af" />
        <Text className="text-gray-500 text-xs mt-1">No photo uploaded</Text>
      </View>

      {/* SIGNATURE UPLOAD */}
      <TouchableOpacity
        activeOpacity={0.9}
        className="rounded-2xl flex-row items-center p-4 mb-2"
        style={{
          backgroundColor: `${theme.secondary}12`,
          borderColor: `${theme.secondary}40`,
          borderWidth: 1,
        }}
      >
        <View
          className="w-12 h-12 rounded-xl items-center justify-center mr-4"
          style={{
            backgroundColor: "#fff",
            borderColor: `${theme.secondary}40`,
            borderWidth: 1,
          }}
        >
          <Ionicons name="create-outline" size={24} color={theme.secondary} />
        </View>

        <View>
          <Text className="text-gray-900 font-semibold text-[15px]">
            Capture Customer Signature
          </Text>
          <Text className="text-[11px] text-gray-500 mt-[2px]">
            Opens signature pad
          </Text>
        </View>
      </TouchableOpacity>

      {/* SIGNATURE PREVIEW */}
      <View
        className="w-full h-32 rounded-2xl mt-3 mb-4 overflow-hidden items-center justify-center"
        style={{
          backgroundColor: "#f9fafb",
          borderColor: "#d1d5db",
          borderWidth: 1,
        }}
      >
        <Ionicons name="trail-sign-outline" size={40} color="#a1a1aa" />
        <Text className="text-gray-500 text-xs mt-1">No signature added</Text>
      </View>

      {/* COMPLETION BADGE */}
      <View
        className="self-start px-3 py-[6px] rounded-full"
        style={{ backgroundColor: `${theme.primary}20` }}
      >
        <Text
          className="text-xs font-semibold"
          style={{ color: theme.primaryDark }}
        >
          Proof Required • Pending Completion
        </Text>
      </View>
    </View>
  );
}
