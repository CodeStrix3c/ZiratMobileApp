import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { Alert, Button, ScrollView, View } from "react-native";

import { profileSchema } from "@/src/schemas/profileSchema";
import {
  addressSchema,
  educationSchema,
  professionSchema,
} from "@/src/schemas/registrationSchema";

import { useZodForm } from "@/src/hooks/useZodForm";

import AddressSection from "@/src/components/form/sections/AddressSection";
import EducationSection from "@/src/components/form/sections/EducationSection";
import ProfessionSection from "@/src/components/form/sections/ProfessionSection";
import ProfileSection from "@/src/components/form/sections/ProfileSection";

import { useAuth } from "@/src/contexts/AuthContext";
import {
  useAddressMutation,
  useEducationMutation,
  useProfessionMutation,
  useProfileMutation,
  useProfileQuery,
} from "@/src/hooks/useUserProfileMutation";

import { router } from "expo-router";

export default function UserProfileCompletionScreen() {
  const { section } = useLocalSearchParams();

  const sectionMap = {
    profile: 0,
    address: 1,
    education: 2,
    profession: 3,
  };

  const initialStep = sectionMap[section as string] ?? 1;
  const [step, setStep] = useState(initialStep);

  const { userId, userProfileId, setUserProfileId } = useAuth();
  if (!userId) return null;

  const { mutateAsync: saveProfile } = useProfileMutation();
  const { mutateAsync: saveAddress } = useAddressMutation();
  const { mutateAsync: saveEducation } = useEducationMutation();
  const { mutateAsync: saveProfession } = useProfessionMutation();

  const { data: profileData, refetch: refetchProfile } =
    useProfileQuery(userId);

  useEffect(() => {
    if (!profileData) return;
    const run = async () => {
      await setUserProfileId(profileData.id);
      if (step === 0) await refetchProfile();
    };
    run();
  }, [step, userId]);

  const schemas = [
    profileSchema,
    addressSchema,
    educationSchema,
    professionSchema,
  ];

  const { control, handleSubmit, formState, setValue } = useZodForm(
    schemas[step]
  );

  const { errors } = formState;

  const goToNextStep = () => setStep((prev) => prev + 1);
  const goToPreviousStep = () => setStep((prev) => prev - 1);

  const handleStepSubmit = async (values: any) => {
    try {
      if (step === 0) {
        await saveProfile({ ...values, userId });
        goToNextStep();
        return;
      }
      if (step === 1) {
        await saveAddress({ ...values, profileId: userProfileId });
        router.back();
        return;
      }
      if (step === 2) {
        await saveEducation({ ...values, profileId: userProfileId });
        router.back();
        return;
      }
      if (step === 3) {
        await saveProfession({ ...values, profileId: userProfileId });
        router.back();
        return;
      }
    } catch (err: any) {
      Alert.alert(
        "Error",
        err?.response?.data?.message || "Something went wrong"
      );
    }
  };

  return (
    <ScrollView style={{ flex: 1, padding: 20 }}>
      {step === 0 && (
        <ProfileSection
          control={control}
          errors={errors}
          data={profileData}
          setValue={setValue}
        />
      )}
      {step === 1 && <AddressSection control={control} errors={errors} />}
      {step === 2 && <EducationSection control={control} errors={errors} />}
      {step === 3 && <ProfessionSection control={control} errors={errors} />}

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 30,
        }}
      >
        {step > 0 && <Button title="Back" onPress={goToPreviousStep} />}

        <Button
          title={step === 3 ? "Save" : "Next"}
          onPress={handleSubmit(handleStepSubmit)}
        />
      </View>
    </ScrollView>
  );
}
