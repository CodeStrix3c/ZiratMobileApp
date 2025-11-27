import React from "react";
import { Button, ScrollView, View } from "react-native";

import { useAuth } from "@/src/contexts/AuthContext";
import { useVendorProfileMutation } from "@/src/hooks/vendorQueryHooks";
import { businessInformationSchema } from "@/src/schemas/vendor/business.schema";
import BusinessSection from "./sections/BusinessSection";

import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";
import { useForm } from "react-hook-form";

export default function VendorRegistration() {
  const { setVendorId, setVendorToken } = useAuth();

  const methods = useForm({
    resolver: zodResolver(businessInformationSchema),
    mode: "onChange",
  });

  const {
    handleSubmit,
    trigger,
    control,
    formState: { errors },
  } = methods;
  console.log(errors, "lllll");

  const { mutateAsync: saveVendor } = useVendorProfileMutation();

  const onSubmit = async (data) => {
    // try {
    //   await saveVendor(data);
    //   router.push("/vendor/profile-completion");
    // } catch (err) {
    //   console.log("Error saving vendor profile:", err);
    // }
    router.push("/vendor/profile-completion");
  };

  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ paddingBottom: 40 }}
      showsVerticalScrollIndicator={false}
    >
      <View style={{ flex: 1, padding: 16 }}>
        <BusinessSection control={control} errors={errors} />

        <View style={{ marginTop: 20 }}>
          <Button title="Continue" onPress={handleSubmit(onSubmit)} />
        </View>
      </View>
    </ScrollView>
  );
}
