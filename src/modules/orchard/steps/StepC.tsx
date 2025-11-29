import { Controller } from "react-hook-form";
import { ScrollView, Text, View } from "react-native";
import { RadioButton } from "react-native-paper";

import FormInput from "@/src/components/form/inputs/FormInput";
import SingleSelectInput from "@/src/components/form/inputs/SingleSelectInput";

import {
  irrigationOptions,
  soilHealthOptions,
  soilTypeOptions,
  waterAvailabilityOptions,
  waterSourceOptions,
} from "@/src/schemas/orchard schemas/stepCSchema";

export default function StepC({ control, errors }) {
  
  /** 🔥 CLEAN FIELD CONFIG (Auto-generated form) */
  const stepCFields = [
    {
      type: "select",
      name: "soilType",
      label: "Soil Type",
      options: soilTypeOptions,
    },

    { type: "number", name: "soilPH", label: "Soil pH (0 - 14)", icon: "flask" },
    { type: "number", name: "soilN", label: "Nitrogen (N)", icon: "numeric" },
    { type: "number", name: "soilP", label: "Phosphorus (P)", icon: "numeric" },
    { type: "number", name: "soilK", label: "Potassium (K)", icon: "numeric" },
    { type: "number", name: "soilOrganicCarbon", label: "Organic Carbon (%)", icon: "percent" },

    {
      type: "text",
      name: "soilMicronutrients",
      label: "Micronutrients (optional)",
      icon: "flask-plus",
    },

    {
      type: "text",
      name: "lastSoilTest",
      label: "Last Soil Test (Year or YYYY-MM-DD)",
      icon: "calendar",
    },

    {
      type: "select",
      name: "waterSource",
      label: "Water Source",
      options: waterSourceOptions,
    },

    {
      type: "select",
      name: "irrigationMethod",
      label: "Irrigation Method",
      options: irrigationOptions,
    },

    {
      type: "select",
      name: "waterAvailability",
      label: "Water Availability",
      options: waterAvailabilityOptions,
    },
  ];

  return (
    <ScrollView className="flex-1 w-full">

      {/* Heading */}
      <Text className="text-2xl font-bold mb-4 text-center text-primary">
        Soil & Water Profile
      </Text>

      <View className="bg-light rounded-2xl p-5 shadow-md shadow-neutral w-full">

        {/* 🔥 AUTO-GENERATED FIELDS */}
        {stepCFields.map((field) =>
          field.type === "select" ? (
            <SingleSelectInput
              key={field.name}
              control={control}
              name={field.name}
              label={field.label}
              options={field.options.map((v) => ({ label: v, value: v }))}
              error={errors[field.name]}
            />
          ) : (
            <FormInput
              key={field.name}
              control={control}
              name={field.name}
              label={field.label}
              icon={field.icon}
              type={field.type}
              error={errors[field.name]?.message}
            />
          )
        )}

        {/* 🔥 Soil Health (Radio Group) */}
        <Text className="text-base font-semibold mt-4 mb-2 text-dark">
          Soil Health
        </Text>

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

        {errors.soilHealth && (
          <Text className="text-error text-sm">
            {errors.soilHealth.message}
          </Text>
        )}
      </View>
    </ScrollView>
  );
}
