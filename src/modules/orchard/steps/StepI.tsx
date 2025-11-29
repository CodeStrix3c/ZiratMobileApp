// StepI_OptionalFutureFields.js
import CheckboxGroup from "@/src/components/form/inputs/Checkbox";
import FormInput from "@/src/components/form/inputs/FormInput";
import SingleSelectInput from "@/src/components/form/inputs/SingleSelectInput";
import { ScrollView, Text, View } from "react-native";
// or import RadioGroup if you prefer radio buttons

import {
  certificationOptions,
  digitalToolOptions,
  schemeOptions,
} from "@/src/schemas/orchard schemas/stepISchema"; // adjust path if needed

export default function StepI_OptionalFutureFields({ control, errors }:any) {
  // map enums to {label,value}
  const schemeOpts = schemeOptions.map((x) => ({ label: x, value: x }));
  const certOpts = certificationOptions.map((x) => ({ label: x, value: x }));
  const toolOpts = digitalToolOptions.map((x) => ({ label: x, value: x }));

  return (
    <ScrollView className="flex-1 w-full">
      <Text className="text-2xl font-bold mb-4 text-center text-primary">
        Optional / Future-Proof Fields
      </Text>

      <View className="bg-light rounded-2xl p-5 shadow-md shadow-neutral w-full">
        <Text className="text-lg font-semibold mb-3 text-primary">
          Additional Optional Information
        </Text>

        {/* govtSchemes (multi-select required) */}
        <CheckboxGroup
          control={control}
          name="govtSchemes"
          label="Government Schemes Availed (Multi-select)"
          options={schemeOptions} // CheckboxGroup accepts array of strings
          error={errors.govtSchemes}
        />

        {/* fpoMembership (optional text) */}
        <FormInput
          control={control}
          name="fpoMembership"
          label="FPO / Cooperative Membership (Optional)"
          optional={true}
          icon="account-group"
          iconColor="secondary"
          error={errors.fpoMembership}
        />

        {/* certifications (single-select required) -> use SingleSelectInput */}
        <SingleSelectInput
          control={control}
          name="certifications"
          label="Certifications"
          options={certOpts}
          error={errors.certifications}
        />

        {/* digitalTools (multi-select required) */}
        <CheckboxGroup
          control={control}
          name="digitalTools"
          label="Digital Tools Used (Multi-select)"
          options={digitalToolOptions}
          error={errors.digitalTools}
        />
      </View>
    </ScrollView>
  );
}
