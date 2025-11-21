import FormInput from "@/src/components/form/inputs/FormInput";
import React from "react";
import { View } from "react-native";

export default function BusinessSection({ control, errors }) {
  return (
    <View style={{ padding: 20 }}>
      <FormInput
        control={control}
        name="shopName"
        label="Shop / Business Name"
        error={errors.shopName}
      />

      <FormInput
        control={control}
        name="ownerName"
        label="Owner Name"
        error={errors.ownerName}
      />

      <FormInput
        control={control}
        name="primaryPhone"
        label="Primary Contact Number"
        type="number"
        error={errors.primaryPhone}
      />

      <FormInput
        control={control}
        name="altPhone"
        label="Alternate Contact (optional)"
        type="number"
        error={errors.altPhone}
      />

      <FormInput
        control={control}
        name="email"
        label="Email (optional)"
        type="email-address"
        error={errors.email}
      />

      {/* ADDRESS FIELDS */}
      <FormInput
        control={control}
        name="village"
        label="Village"
        error={errors.address?.village}
      />
      <FormInput
        control={control}
        name="tehsil"
        label="Tehsil"
        error={errors.address?.tehsil}
      />
      <FormInput
        control={control}
        name="district"
        label="District"
        error={errors.address?.district}
      />
      <FormInput
        control={control}
        name="state"
        label="State"
        error={errors.address?.state}
      />
      <FormInput
        control={control}
        name="pincode"
        type="number"
        label="Pincode"
        error={errors.address?.pincode}
      />
    </View>
  );
}
