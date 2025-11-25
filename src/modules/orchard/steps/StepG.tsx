// StepG_ProductionMarketing.js
import FormInput from "@/src/components/form/inputs/FormInput";
import SingleSelectInput from "@/src/components/form/inputs/SingleSelectInput";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { ScrollView, Text, View } from "react-native";

export default function StepG_ProductionMarketing() {
  const methods = useForm({
    defaultValues: {
      annualYield: "",
      peakHarvestSeason: "",
      sellingPreference: "",
      buyerDetails: "",
    },
  });

  // SELLING PREFERENCE OPTIONS (map-ready)
  const sellingPreferenceOptions = [
    "Local Mandi",
    "Commission Agent",
    "FPO",
    "Direct Buyer",
    "Online Platform",
  ].map((x) => ({ label: x, value: x }));

  // FORM INPUT LIST TO AVOID REPETITION
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
    <FormProvider {...methods}>
      <ScrollView className="flex-1 w-full">

        {/* HEADING */}
        <Text className="text-2xl font-bold mb-4 text-center text-primary">
          Production & Marketing
        </Text>

        <View className="bg-light rounded-2xl p-5 shadow-md shadow-neutral w-full">

          <Text className="text-lg font-semibold mb-3 text-primary">
            Production & Marketing Information
          </Text>

          {/* 🔥 REPEATED FIELDS USING MAP */}
          {productionFields.map((item) => (
            <FormInput
              key={item.name}
              control={methods.control}
              name={item.name}
              label={item.label}
              icon={item.icon}
              iconColor="secondary"
            />
          ))}

          {/* 3 — Selling Preference (Dropdown) */}
          <SingleSelectInput
            control={methods.control}
            name="sellingPreference"
            label="Selling Preference"
            options={sellingPreferenceOptions}
          />

          {/* 4 — Buyer Details (Optional) */}
          <FormInput
            control={methods.control}
            name="buyerDetails"
            label="Buyer Details (Optional)"
            optional={true}
            icon="account-box"
            iconColor="secondary"
          />

        </View>
      </ScrollView>
    </FormProvider>
  );
}
