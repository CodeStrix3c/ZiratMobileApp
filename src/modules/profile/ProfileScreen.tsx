import { colors } from "@/src/constants/colors";
import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function ProfileScreen() {
  return (
    <ScrollView className="flex-1 bg-lightGreen p-5 bg-white">
      {/* Profile Section */}
      <View className="items-center  rounded-sm p-5  mb-5">
        <View className="relative mb-3">
          <Image
            source={{
              uri: "https://plus.unsplash.com/premium_photo-1689977927774-401b12d137d6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
            }}
            className="w-24 h-24 rounded-full"
          />
          {/* Camera Icon */}
          <TouchableOpacity className="absolute bottom-0 right-0 bg-primary p-2 rounded-full">
            <Ionicons name="camera-outline" size={16} color="#fff" />
          </TouchableOpacity>
        </View>

        <Text className="text-lg font-semibold color={colors.primary}">
          Tansha Ashraf
        </Text>

        <View className="flex-row items-center mt-1">
          <Ionicons name="location-outline" size={16} color={colors.primary} />
          <Text className="text-grayText ml-1" >Srinagar</Text>
        </View>

        <View className="bg-[#E0F2F1] px-4 py-1 rounded-full mt-3">
          <Text className=" font-semibold text-sm" style={{ color: colors.primary }} >
            Kashmir Approved
          </Text>
        </View>
      </View>


      <View className=" rounded-sm border border-slate-300 p-5 mb-5 ">

        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-base font-semibold ">
            Contact Information
          </Text>
          <Feather name="edit-3" size={18} color={colors.primary} />
        </View>


        <View className="flex-row items-center py-4 ">
          <Ionicons name="call-outline" size={20} color={colors.primary} />
          <View className="ml-3 flex-1">
            <Text className="text-[12px] text-grayText mb-[2px]">Phone</Text>
            <Text className="text-[14px] font-medium ">7051500009</Text>
          </View>
        </View>


        <View className="flex-row items-center py-4  ">
          <MaterialIcons name="email" size={20} color={colors.primary} />
          <View className="ml-3 flex-1">
            <Text className="text-[12px] text-grayText mb-[2px]">Email</Text>
            <Text className="text-[14px] font-medium ">
              tanshaashraf@gmail.com
            </Text>
          </View>
        </View>


        <View className="flex-row items-center py-4  ">
          <Ionicons name="location-outline" size={20} color={colors.primary} />
          <View className="ml-3 flex-1">
            <Text className="text-[12px] text-grayText mb-[2px]">Address</Text>
            <Text className="text-[14px] font-medium ">PULWAMA</Text>
          </View>
        </View>


        <View className="flex-row items-center py-4">
          <Ionicons name="calendar-outline" size={20} color={colors.primary} />
          <View className="ml-3 flex-1">
            <Text className="text-[12px] text-grayText mb-[2px]">Member Since</Text>
            <Text className="text-[14px] font-medium ">
              05-September-2025
            </Text>
          </View>
        </View>
      </View>



      <View className=" rounded-sm  border border-slate-300 p-5 mb-8">
        <Text className="text-base font-semibold  mb-3">Account</Text>


        <TouchableOpacity className="flex-row items-center py-3">
          <Ionicons name="lock-closed-outline" size={22} color={colors.primary} />
          <View className="ml-3 flex-1 border-b border-slate-200 pb-2">
            <Text className="text-base font-medium ">Change Password</Text>
          </View>
        </TouchableOpacity>


        <TouchableOpacity className="flex-row items-center py-3">
          <Ionicons name="document-text-outline" size={22} color={colors.primary} />
          <View className="ml-3 flex-1 border-b border-slate-200 pb-2">
            <Text className="text-base font-medium">Terms & Conditions</Text>
          </View>
        </TouchableOpacity>


        <TouchableOpacity className="flex-row items-center py-3">
          <Ionicons name="help-circle-outline" size={22} color={colors.primary} />
          <View className="ml-3 flex-1 border-b border-slate-200 pb-2">
            <Text className="text-base font-medium ">Help & Support</Text>
          </View>
        </TouchableOpacity>


        <TouchableOpacity className="flex-row items-center py-3">
          <Ionicons name="shield-checkmark-outline" size={22} color={colors.primary} />
          <View className="ml-3 flex-1 border-b border-slate-200 pb-2">
            <Text className="text-base font-medium ">Privacy Policy</Text>
          </View>
        </TouchableOpacity>


        <TouchableOpacity className="flex-row items-center py-3">
          <Ionicons name="information-circle-outline" size={22} color={colors.primary} />
          <View className="ml-3 flex-1 border-b border-slate-200 pb-2">
            <Text className="text-base font-medium ">About Us</Text>
          </View>
        </TouchableOpacity>


        <TouchableOpacity className="flex-row items-center py-3 mt-3">
          <Ionicons name="log-out-outline" size={22} color="#E53935" />
          <Text className="ml-3 text-base font-semibold text-[#E53935]">Logout</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
}
