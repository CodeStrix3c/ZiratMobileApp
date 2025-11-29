import { colors } from "@/src/constants/colors";
import {
  ActivityIndicator,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import {
  useAddressDeleteMutation,
  useAddressQuery,
  useEducationDeleteMutation,
  useEducationQuery,
  useProfessionDeleteMutation,
  useProfessionQuery,
  useProfileQuery,
} from "@/src/hooks/userQueryHooks";

import ProfileHeader from "./components/ProfileHeader";
import SectionCard from "./components/SectionCard";

import { useAuth } from "@/src/contexts/AuthContext";
import { showSuccessToast } from "@/src/utils/toast";
import { useQueryClient } from "@tanstack/react-query";
import { router } from "expo-router";

export default function ProfileScreen() {
  const { userId, userProfileId } = useAuth();
  const queryClient = useQueryClient();

  const { data: profileData, isLoading: loadingProfile } =
    useProfileQuery(userId);

  const { data: addressData, isLoading: loadingAddress } =
    useAddressQuery(userProfileId);

  const { data: educationData, isLoading: loadingEducation } =
    useEducationQuery(userProfileId);

  const { data: professionData, isLoading: loadingProfession } =
    useProfessionQuery(userProfileId);

  const loading =
    loadingProfile || loadingAddress || loadingEducation || loadingProfession;

  const { mutateAsync: deleteAddressApi } = useAddressDeleteMutation();
  const { mutateAsync: deleteEducationApi } = useEducationDeleteMutation();
  const { mutateAsync: deleteProfessionApi } = useProfessionDeleteMutation();

  const goToSection = (section) => {
    router.push({
      pathname: "/userProfileCompletion",
      params: { section },
    });
  };

  const deleteAddress = async () => {
    await deleteAddressApi(userProfileId);
    showSuccessToast("Address deleted successfully");
    queryClient.invalidateQueries(["addressSection", userProfileId]);
  };

  const deleteEducation = async () => {
    await deleteEducationApi(userProfileId);
    showSuccessToast("Education deleted successfully");
    queryClient.invalidateQueries(["educationSection", userProfileId]);
  };

  const deleteProfession = async () => {
    await deleteProfessionApi(userProfileId);
    showSuccessToast("Profession deleted successfully");
    queryClient.invalidateQueries(["professionSection", userProfileId]);
  };

  if (loading)
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );

  return (
    <ScrollView className="flex-1 bg-white p-5">
      {/* Profile Header */}
      <TouchableOpacity onPress={() => router.push("/vendor/register")}>
        <Text
          style={{
            fontSize: 22,
            fontWeight: "700",
            marginBottom: 10,
            color: colors.primary,
          }}
        >
          Become a Supplier
        </Text>
      </TouchableOpacity>
      <ProfileHeader
        profileData={profileData}
        onEdit={() => goToSection("profile")}
      />

      {/* Address Section */}
      <SectionCard
        title="Address"
        onEdit={addressData ? () => goToSection("address") : undefined}
        onDelete={addressData ? deleteAddress : undefined}
      >
        {addressData ? (
          <Text>
            {addressData.village}, {addressData.tehsil}, {addressData.district},{" "}
            {addressData.state} - {addressData.pincode}
          </Text>
        ) : (
          <TouchableOpacity onPress={() => goToSection("address")}>
            <Text style={{ color: colors.primary, fontWeight: "600" }}>
              + Add Address
            </Text>
          </TouchableOpacity>
        )}
      </SectionCard>

      {/* Education Section */}
      <SectionCard
        title="Education"
        onEdit={educationData ? () => goToSection("education") : undefined}
        onDelete={educationData ? deleteEducation : undefined}
      >
        {educationData ? (
          <>
            <Text>{educationData.highestQualification}</Text>
            <Text>{educationData.instituteName}</Text>
            <Text>{educationData.passingYear}</Text>
            <Text>{educationData.specialization}</Text>
          </>
        ) : (
          <TouchableOpacity onPress={() => goToSection("education")}>
            <Text style={{ color: colors.primary, fontWeight: "600" }}>
              + Add Education
            </Text>
          </TouchableOpacity>
        )}
      </SectionCard>

      {/* Profession Section */}
      <SectionCard
        title="Profession"
        onEdit={professionData ? () => goToSection("profession") : undefined}
        onDelete={professionData ? deleteProfession : undefined}
      >
        {professionData ? (
          <>
            <Text>{professionData.organizationName}</Text>
            <Text>{professionData.designation}</Text>
            <Text>{professionData.experienceYears}</Text>
          </>
        ) : (
          <TouchableOpacity onPress={() => goToSection("profession")}>
            <Text style={{ color: colors.primary, fontWeight: "600" }}>
              + Add Profession
            </Text>
          </TouchableOpacity>
        )}
      </SectionCard>
    </ScrollView>
  );
}
