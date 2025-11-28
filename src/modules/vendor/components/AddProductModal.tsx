import { colors } from "@/src/constants/colors";
import { Modal, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function AddProductModal({ onClose }) {
  return (
    <Modal transparent animationType="slide" visible>
      <View
        className="flex-1"
        style={{ backgroundColor: colors.overlay }}
      />

      <View className="absolute bottom-0 w-full bg-white rounded-t-3xl p-6">
        <Text className="font-bold text-lg" style={{ color: colors.dark }}>
          Add/Edit Product Details
        </Text>

        <Text className="mt-5 mb-1 text-gray-600 text-xs">Product Name</Text>
        <TextInput className="border rounded-lg px-3 py-2 mb-3 bg-gray-50 border-gray-200" />

        <Text className="mb-1 text-gray-600 text-xs">Price (₹)</Text>
        <TextInput className="border rounded-lg px-3 py-2 mb-3 bg-gray-50 border-gray-200" />

        <Text className="mb-1 text-gray-600 text-xs">Expiry Date</Text>
        <TextInput className="border rounded-lg px-3 py-2 mb-3 bg-gray-50 border-gray-200" />

        <TouchableOpacity
          className="rounded-xl py-3 mt-3"
          style={{ backgroundColor: colors.primary }}
          onPress={onClose}
        >
          <Text className="text-center text-white font-semibold">
            Save
          </Text>
        </TouchableOpacity>

        <TouchableOpacity className="py-3 mt-2" onPress={onClose}>
          <Text className="text-center text-gray-700 font-medium">Cancel</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}
