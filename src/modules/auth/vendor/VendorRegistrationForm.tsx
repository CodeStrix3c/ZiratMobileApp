import { Button, ScrollView, View } from "react-native";

import { useAuth } from "@/src/contexts/AuthContext";
import { useVendorProfileMutation } from "@/src/hooks/vendorQueryHooks";
import { businessInformationSchema } from "@/src/schemas/vendor/business.schema";
import BusinessSection from "./sections/BusinessSection";

import { useZodForm } from "@/src/hooks/useZodForm";
import { router } from "expo-router";
import { FormProvider } from "react-hook-form";

export default function VendorRegistration() {
  const methods = useZodForm(businessInformationSchema);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = methods;
  // console.log(errors, "errors");
  const { userId, setVendorId } = useAuth();

  const { mutateAsync: saveVendor } = useVendorProfileMutation();

  const onSubmit = async (data) => {
    console.log(data, "data");

    try {
      const payload = {
        ...data,
        userId,
      };

      const res = await saveVendor(payload);
      await setVendorId(res.id);

      console.log(res, "res from vendor business");

      router.push("/vendor/profile-completion");
    } catch (err) {
      console.log("Error saving vendor profile:", err);
    }
  };

  return (
    <FormProvider {...methods}>
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
    </FormProvider>
  );
}
