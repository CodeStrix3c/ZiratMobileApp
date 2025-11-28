import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";

export default function BottomModal({ title, onClose }) {
  return (
    <View className="flex-1 bg-black/40 justify-end">
      <Animated.View
        entering={FadeInUp}
        className="bg-white rounded-t-2xl p-5"
      >
        <Text className="text-lg font-bold mb-3">{title}</Text>

        {[
          "GST Verified",
          "PAN Verified",
          "Bank Linked",
          "Aadhaar Linked",
        ].map((item, i) => (
          <View key={i} className="flex-row items-center mt-3">
            <Ionicons name="checkbox-outline" size={20} color="#2d6b06" />
            <Text className="ml-2 text-gray-700">{item}</Text>
          </View>
        ))}

        <TouchableOpacity
          onPress={onClose}
          className="mt-6 bg-primary py-3 rounded-xl items-center"
        >
          <Text className="text-white font-semibold text-sm">Done</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}
