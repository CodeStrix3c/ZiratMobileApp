import FormDateInput from "@/src/components/form/inputs/FormDateInput";
import FormFileInput from "@/src/components/form/inputs/FormFileInput";
import FormInput from "@/src/components/form/inputs/FormInput";
import React from "react";
import { View } from "react-native";

export default function LicenseSection({ control, errors }) {
  return (
    <View style={{ padding: 20, gap: 12 }}>
      {/* Dealer License Number */}
      <FormInput
        control={control}
        name="dealerLicenseNumber"
        label="Dealer License Number"
        error={errors.dealerLicenseNumber}
      />

      {/* License Start Date */}
      <FormDateInput
        control={control}
        name="licenseValidityStart"
        label="License Start Date"
        error={errors.licenseValidityStart}
      />

      {/* License End Date */}
      <FormDateInput
        control={control}
        name="licenseValidityEnd"
        label="License Expiry Date"
        error={errors.licenseValidityEnd}
      />

      {/* GST */}
      <FormInput
        control={control}
        name="gstNumber"
        label="GST Number"
        optional
        error={errors.gstNumber}
      />

      {/* PAN */}
      <FormInput
        control={control}
        name="pan"
        label="PAN"
        optional
        error={errors.pan}
      />

      {/* License File Upload */}
      <FormFileInput
        control={control}
        name="licenseCopy"
        label="Upload License Copy"
        error={errors.licenseCopy}
      />
    </View>
  );
}
