import FormDateInput from "@/src/components/form/inputs/FormDateInput";
import FormFileInput from "@/src/components/form/inputs/FormFileInput";
import FormInput from "@/src/components/form/inputs/FormInput";
import { FormSectionProps } from "@/src/types/formSectionProps";
import { View } from "react-native";

export default function LicenseSection({ control, errors }: FormSectionProps) {
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
        name="licenseStartDate"
        label="License Start Date"
        error={errors?.licenseStartDate?.message}
      />

      <FormDateInput
        control={control}
        name="licenseExpiryDate"
        label="License Expiry Date"
        error={errors?.licenseExpiryDate?.message}
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
        name="panNumber"
        label="PAN"
        optional
        error={errors?.panNumber?.message}
      />

      {/* License File Upload */}
      <FormFileInput
        control={control}
        name="licenseCopyUrl"
        label="Upload License Copy"
        error={errors?.licenseCopyUrl?.message}
      />
    </View>
  );
}
