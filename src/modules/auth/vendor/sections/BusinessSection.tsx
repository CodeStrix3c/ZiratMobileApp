import FormInput from "@/src/components/form/inputs/FormInput";
import { BusinessSectionProps } from "@/src/types/BusinessSection.types";
import { View } from "react-native";

export default function BusinessSection({
  control,
  errors,
}: BusinessSectionProps) {
  return (
    <View style={{ padding: 20 }}>
      <FormInput
        control={control}
        name="shopName"
        label="Shop / Business Name"
        error={errors?.shopName?.message}
      />

      <FormInput
        control={control}
        name="ownerName"
        label="Owner Name"
        error={errors?.ownerName?.message}
      />

      <FormInput
        control={control}
        name="contactNumberPrimary"
        label="Primary Contact Number"
        type="phone"
        error={errors?.contactNumberPrimary?.message}
      />

      <FormInput
        control={control}
        name="contactNumberAlternate"
        label="Alternate Contact (optional)"
        type="phone"
        optional
        error={errors?.contactNumberAlternate?.message}
      />

      <FormInput
        control={control}
        name="email"
        label="Email"
        type="email"
        optional
        error={errors?.email?.message}
      />

      <FormInput
        control={control}
        name="village"
        label="Village"
        error={errors?.village?.message}
      />

      <FormInput
        control={control}
        name="tehsil"
        label="Tehsil"
        error={errors?.tehsil?.message}
      />

      <FormInput
        control={control}
        name="district"
        label="District"
        error={errors?.district?.message}
      />

      <FormInput
        control={control}
        name="state"
        label="State"
        error={errors?.state?.message}
      />

      <FormInput
        control={control}
        name="pincode"
        label="Pincode"
        type="phone"
        error={errors?.pincode?.message}
      />
    </View>
  );
}
