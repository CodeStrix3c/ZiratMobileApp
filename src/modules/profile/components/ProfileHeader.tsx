import { colors } from "@/src/constants/colors";
import { Feather, Ionicons } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function ProfileHeader({ profileData, onEdit }) {
  return (
    <View className="items-center p-5 mb-5">
      <View className="relative mb-3">
        <Image
          source={{ uri: profileData?.image || "https://placehold.co/200x200" }}
          className="w-24 h-24 rounded-full"
        />

        <TouchableOpacity className="absolute bottom-0 right-0 bg-primary p-2 rounded-full">
          <Ionicons name="camera-outline" size={16} color="#fff" />
        </TouchableOpacity>
      </View>

      <View className="flex-row items-center gap-2">
        <Text
          className="text-lg font-semibold"
          style={{ color: colors.primary }}
        >
          {profileData?.fullName}
        </Text>

        <TouchableOpacity onPress={onEdit}>
          <Feather name="edit-3" size={18} color={colors.primary} />
        </TouchableOpacity>
      </View>

      <View className="bg-[#E0F2F1] px-4 py-1 rounded-full mt-3">
        <Text
          className="font-semibold text-sm"
          style={{ color: colors.primary }}
        >
          {profileData?.status || "Unverified"}
        </Text>
      </View>
    </View>
  );
}
