import { colors } from "@/src/constants/colors";
import { InfoCardProps } from "@/src/types/components";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
const InfoCard: React.FC<InfoCardProps> = ({ title, value, icon }) => (
  <View className="flex-1 bg-white items-center py-5 rounded-xl mx-1 shadow-sm">
    <Ionicons name={icon} size={26} color={colors.primary} />
    <Text className="text-grayText text-sm mt-1">{title}</Text>
    <Text className="text-primary text-xl font-bold">{value}</Text>
  </View>
);
export default InfoCard;
