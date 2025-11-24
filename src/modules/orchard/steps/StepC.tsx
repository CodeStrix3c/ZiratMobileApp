// StepC_SoilWaterProfile.js
import FormInput from "@/src/components/form/inputs/FormInput";
import SingleSelectInput from "@/src/components/form/inputs/SingleSelectInput";
import React from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { ScrollView, Text, View } from "react-native";
import { Button, RadioButton } from "react-native-paper";

export default function StepC_SoilWaterProfile() {
  const methods = useForm({
    defaultValues: {
      soilType: "",
      soilPH: "",
      soilN: "",
      soilP: "",
      soilK: "",
      soilOrganicCarbon: "",
      soilMicronutrients: "",
      soilTestFile: null,
      soilHealth: "",
      lastSoilTest: "",
      waterSource: "",
      irrigationMethod: "",
      waterAvailability: "",
    },
  });

  // 🔥 SOIL TYPE OPTIONS
  const soilTypeOptions = [
    "Sandy Clay Loam",
    "Sandy Loam",
    "Sandy Clay",
    "Sandy",
    "Silt Loam",
    "Heavy Clay",
    "Silt Clay",
    "Silt",
    "Silt Clay Loam",
    "Not Getting",
  ].map((x) => ({ label: x, value: x }));

  // 🔥 WATER & IRRIGATION OPTIONS
  const waterSourceOptions = ["Canal", "Borewell", "Rainfed", "Spring", "Other"]
    .map((x) => ({ label: x, value: x }));

  const irrigationOptions = ["Drip", "Sprinkler", "Flood", "None"]
    .map((x) => ({ label: x, value: x }));

  const waterAvailabilityOptions = [
    "Round-the-year",
    "Seasonal",
    "Not Available",
  ].map((x) => ({ label: x, value: x }));

  // 🔥 REPEATED SOIL TEST FIELDS (PH, N, P, K, etc.)
  const soilTestFields = [
    { name: "soilPH", label: "pH", icon: "test-tube" },
    { name: "soilN", label: "Nitrogen (N)", icon: "alpha-n-box" },
    { name: "soilP", label: "Phosphorus (P)", icon: "alpha-p-box" },
    { name: "soilK", label: "Potassium (K)", icon: "alpha-k-box" },
    { name: "soilOrganicCarbon", label: "Organic Carbon (%)", icon: "leaf" },
    { name: "soilMicronutrients", label: "Micronutrients", icon: "flask" },
  ];

  const soilHealthOptions = ["Acidic", "Alkaline", "Not Known"];

  return (
    <FormProvider {...methods}>
      <ScrollView className="flex-1 w-full">

        {/* Heading */}
        <Text className="text-2xl font-bold mb-4 text-center text-primary">
          Soil & Water Profile
        </Text>

        <View className="bg-light rounded-2xl p-5 shadow-md shadow-dark w-full">

          <Text className="text-lg font-semibold mb-3 text-primary">
            Soil and Water Profile
          </Text>

          {/* 1. Soil Type Dropdown */}
          <SingleSelectInput
            control={methods.control}
            name="soilType"
            label="Soil Type"
            options={soilTypeOptions}
          />

          {/* 2. Soil Test Records */}
          <Text className="text-base font-semibold mt-4 mb-2 text-dark">
            Soil Test Records
          </Text>

          {/* 🔥 USING MAP TO RENDER MULTIPLE FormInput */}
          {soilTestFields.map((item) => (
            <FormInput
              key={item.name}
              control={methods.control}
              name={item.name}
              label={item.label}
              icon={item.icon}
              iconColor="secondary"
            />
          ))}

          {/* Upload Button */}
          <Text className="text-base font-semibold mt-4 mb-2 text-dark">
            Soil Test Report (Upload)
          </Text>

          <Button
            mode="outlined"
            icon="upload"
            textColor="#c7611f"
            onPress={() => alert("Implement file picker")}
          >
            Upload Report
          </Button>

          {/* 3. Soil Health - Radio Group */}
          <Text className="text-base font-semibold mt-4 mb-2 text-dark">
            Soil Health Status
          </Text>

          <Controller
            control={methods.control}
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

          {/* 4. Last Soil Test */}
          <FormInput
            control={methods.control}
            name="lastSoilTest"
            label="Last Soil Test (Year / Date)"
            icon="calendar"
            iconColor="secondary"
          />

          {/* 5, 6, 7 — Dropdown using map */}
          {[
            {
              name: "waterSource",
              label: "Water Source",
              options: waterSourceOptions,
            },
            {
              name: "irrigationMethod",
              label: "Irrigation Method",
              options: irrigationOptions,
            },
            {
              name: "waterAvailability",
              label: "Water Availability",
              options: waterAvailabilityOptions,
            },
          ].map((field) => (
            <SingleSelectInput
              key={field.name}
              control={methods.control}
              name={field.name}
              label={field.label}
              options={field.options}
            />
          ))}

        </View>
      </ScrollView>
    </FormProvider>
  );
}
