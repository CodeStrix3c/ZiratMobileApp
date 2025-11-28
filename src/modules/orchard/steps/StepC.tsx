import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { ScrollView, Text, View } from "react-native";
import { RadioButton } from "react-native-paper";

import FormInput from "@/src/components/form/inputs/FormInput";
import SingleSelectInput from "@/src/components/form/inputs/SingleSelectInput";
import { irrigationOptions, soilHealthOptions, soilTypeOptions, waterAvailabilityOptions, waterSourceOptions } from "@/src/schemas/orchard schemas/stepCSchema";

// import {
//   irrigationOptions,
//   soilHealthOptions,
//   soilTypeOptions,
//   waterAvailabilityOptions,
//   waterSourceOptions,
// } from "@/src/schemas/orchard schemas/StepC_SoilWaterProfile.schema";

export default function StepC() {
  
  const { control, formState: { errors } } = useFormContext();

  return (
    <ScrollView className="flex-1 w-full">
      
      {/* Heading */}
      <Text className="text-2xl font-bold mb-4 text-center text-primary">
        Soil & Water Profile
      </Text>

      <View className="bg-light rounded-2xl p-5 shadow-md shadow-neutral w-full">

        {/* Soil Type */}
        <SingleSelectInput
          control={control}
          name="soilType"
          label="Soil Type"
          options={soilTypeOptions.map(v => ({ label: v, value: v }))}
        />

        {/* Soil pH */}
        <FormInput
          control={control}
          name="soilPH"
          label="Soil pH (0 - 14)"
          icon="flask"
          type="number"
        />

        {/* Soil N */}
        <FormInput
          control={control}
          name="soilN"
          label="Nitrogen (N)"
          icon="numeric"
          type="number"
        />

        {/* Soil P */}
        <FormInput
          control={control}
          name="soilP"
          label="Phosphorus (P)"
          icon="numeric"
          type="number"
        />

        {/* Soil K */}
        <FormInput
          control={control}
          name="soilK"
          label="Potassium (K)"
          icon="numeric"
          type="number"
        />

        {/* Organic Carbon */}
        <FormInput
          control={control}
          name="soilOrganicCarbon"
          label="Organic Carbon (%)"
          icon="percent"
          type="number"
        />

        {/* Micronutrients */}
        <FormInput
          control={control}
          name="soilMicronutrients"
          label="Micronutrients (optional)"
          icon="flask-plus"
          type="text"
        />

        {/* Last soil test */}
        <FormInput
          control={control}
          name="lastSoilTest"
          label="Last Soil Test (Year or YYYY-MM-DD)"
          icon="calendar"
          type="text"
        />

        {/* Soil Health */}
        <Text className="text-base font-semibold mt-4 mb-2 text-dark">Soil Health</Text>

        <Controller
          control={control}
          name="soilHealth"
          render={({ field: { value, onChange } }) => (
            <RadioButton.Group onValueChange={onChange} value={value}>
              {soilHealthOptions.map((opt) => (
                <View key={opt} className="flex-row items-center mb-1">
                  <RadioButton value={opt} color="#c7611f" />
                  <Text className="text-dark">{opt}</Text>
                </View>
              ))}
            </RadioButton.Group>
          )}
        />
        {errors?.soilHealth && (
          <Text className="text-error text-sm">{errors.soilHealth.message}</Text>
        )}

        {/* Water Source */}
        <SingleSelectInput
          control={control}
          name="waterSource"
          label="Water Source"
          options={waterSourceOptions.map(v => ({ label: v, value: v }))}
        />

        {/* Irrigation Method */}
        <SingleSelectInput
          control={control}
          name="irrigationMethod"
          label="Irrigation Method"
          options={irrigationOptions.map(v => ({ label: v, value: v }))}
        />

        {/* Water Availability */}
        <SingleSelectInput
          control={control}
          name="waterAvailability"
          label="Water Availability"
          options={waterAvailabilityOptions.map(v => ({ label: v, value: v }))}
        />

      </View>
    </ScrollView>
  );
}
