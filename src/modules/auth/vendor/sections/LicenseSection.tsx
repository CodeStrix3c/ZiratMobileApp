import FormDateInput from "@/src/components/form/inputs/FormDateInput";
import FormFileInput from "@/src/components/form/inputs/FormFileInput";
import FormInput from "@/src/components/form/inputs/FormInput";
import React from "react";
import { View } from "react-native";

export default function LicenseSection({ control, errors }) {
  console.log(errors, "errors,");

  return (
    <View style={{ padding: 20, gap: 12 }}>
      <FormInput
        control={control}
        name="dealerLicenseNumber"
        label="Dealer License Number"
        error={errors?.dealerLicenseNumber?.message}
      />

      <FormDateInput
        control={control}
        name="licenseValidityStart"
        label="License Start Date"
        error={errors?.licenseValidityStart?.message}
      />

      <FormDateInput
        control={control}
        name="licenseValidityEnd"
        label="License Expiry Date"
        error={errors?.licenseValidityEnd?.message}
      />

      <FormInput
        control={control}
        name="gstNumber"
        label="GST Number"
        optional
        error={errors?.gstNumber?.message}
      />

      <FormInput
        control={control}
        name="pan"
        label="PAN"
        optional
        error={errors?.pan?.message}
      />

      {/* License File Upload */}
      <FormFileInput
        control={control}
        name="licenseCopy"
        label="Upload License Copy"
        error={errors?.licenseCopy?.message}
      />
    </View>
  );
}
