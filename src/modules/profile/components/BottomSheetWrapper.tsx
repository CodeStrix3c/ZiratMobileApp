import { Text, TouchableOpacity, View } from "react-native";

export default function BottomSheetWrapper({ title, children, onClose }) {
  return (
    <View
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        padding: 20,
        backgroundColor: "white",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        elevation: 10,
      }}
    >
      <Text className="text-lg font-semibold mb-4">{title}</Text>

      {children}

      <TouchableOpacity onPress={onClose} className="p-3 mt-3 border rounded">
        <Text className="text-center font-semibold">Cancel</Text>
      </TouchableOpacity>
    </View>
  );
}
