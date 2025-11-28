import FormInput from "@/src/components/form/inputs/FormInput";
import { BusinessSectionProps } from "@/src/types/BusinessSection.types";
import React from "react";
import { View } from "react-native";

export default function BusinessSection({
  control,
  errors,
}: BusinessSectionProps) {
  console.log(errors, "in business");

  return (
    <View style={{ padding: 20 }}>
      <FormInput
        control={control}
        name="businessName"
        label="Shop / Business Name"
        error={errors?.businessName?.message}
      />

      <FormInput
        control={control}
        name="ownerName"
        label="Owner Name"
        error={errors?.ownerName?.message}
      />

      <FormInput
        control={control}
        name="primaryContact"
        label="Primary Contact Number"
        type="number"
        error={errors?.primaryContact?.message}
      />

      <FormInput
        control={control}
        name="alternateContact"
        label="Alternate Contact (optional)"
        type="number"
        error={errors?.alternateContact}
      />

      <FormInput
        control={control}
        name="email"
        label="Email (optional)"
        type="email"
        error={errors?.email}
      />

      {/* ADDRESS FIELDS */}
      <FormInput
        control={control}
        name="businessAddressVillage"
        label="Village"
        error={errors?.businessAddressVillage?.message}
      />
      <FormInput
        control={control}
        name="businessAddressTehsil"
        label="Tehsil"
        error={errors?.businessAddressTehsil?.message}
      />
      <FormInput
        control={control}
        name="businessAddressDistrict"
        label="District"
        error={errors?.businessAddressDistrict?.message}
      />
      <FormInput
        control={control}
        name="businessAddressState"
        label="State"
        error={errors?.businessAddressState?.message}
      />
      <FormInput
        control={control}
        name="businessAddressPincode"
        type="number"
        label="Pincode"
        error={errors?.businessAddressPincode?.message}
      />
    </View>
  );
}
