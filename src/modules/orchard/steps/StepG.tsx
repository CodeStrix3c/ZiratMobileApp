// StepG_ProductionMarketing.js

import FormInput from "@/src/components/form/inputs/FormInput";
import SingleSelectInput from "@/src/components/form/inputs/SingleSelectInput";
import { ScrollView, Text, View } from "react-native";

import { sellingPreferenceOptions } from "@/src/schemas/orchard schemas/stepGSchema";

export default function StepG_ProductionMarketing({ control, errors }:any) {

  // Map-ready dropdown format
  const sellingOptions = sellingPreferenceOptions.map((x) => ({
    label: x,
    value: x,
  }));

  // Dynamic form field list
  const productionFields = [
    {
      name: "annualYield",
      label: "Average Annual Yield (Boxes / Kilos)",
      icon: "chart-bar",
    },
    {
      name: "peakHarvestSeason",
      label: "Peak Harvest Season (Month / Duration)",
      icon: "calendar-range",
    },
  ];

  return (
    <ScrollView className="flex-1 w-full">
      {/* Page Heading */}
      <Text className="text-2xl font-bold mb-4 text-center text-primary">
        Production & Marketing
      </Text>

      <View className="bg-light rounded-2xl p-5 shadow-md shadow-neutral w-full">

        <Text className="text-lg font-semibold mb-3 text-primary">
          Production & Marketing Information
        </Text>

        {/* Repeated text inputs (Yield + Harvest Season) */}
        {productionFields.map((item) => (
          <FormInput
            key={item.name}
            control={control}
            name={item.name}
            label={item.label}
            icon={item.icon}
            iconColor="secondary"
            error={errors[item.name]}
          />
        ))}

        {/* Selling Preference */}
        <SingleSelectInput
          control={control}
          name="sellingPreference"
          label="Selling Preference"
          options={sellingOptions}
          error={errors.sellingPreference}
        />

        {/* Buyer Details (OPTIONAL) */}
        <FormInput
          control={control}
          name="buyerDetails"
          label="Buyer Details (Optional)"
          optional={true}
          icon="account-box"
          iconColor="secondary"
          error={errors.buyerDetails}
        />
      </View>
    </ScrollView>
  );
}
