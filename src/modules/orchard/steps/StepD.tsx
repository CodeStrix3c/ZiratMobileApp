// StepD_CropNutrition.js
import FormInput from "@/src/components/form/inputs/FormInput";
import SingleSelectInput from "@/src/components/form/inputs/SingleSelectInput";
import React from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { ScrollView, Text, View } from "react-native";
import { RadioButton } from "react-native-paper";

export default function StepD_CropNutrition() {
  const methods = useForm({
    defaultValues: {
      fertilizerPractice: "",
      fertigation: "",
      nutritionPlan: "",
      mulching: "",
      lastFertiliserDate: "",
      applicationMode: "",
    },
  });

  // Select Options
  const fertilizerOptions = [
    { label: "Organic", value: "Organic" },
    { label: "Chemical", value: "Chemical" },
    { label: "Integrated", value: "Integrated" },
  ];

  const yesNoOptions = [
    { label: "Yes", value: "Yes" },
    { label: "No", value: "No" },
  ];

  const applicationModeOptions = [
    { label: "Soil Application", value: "Soil Application" },
    { label: "Foliar Application", value: "Foliar Application" },
  ];

  return (
    <FormProvider {...methods}>
      <ScrollView className="flex-1 w-full">

        {/* Heading */}
        <Text className="text-2xl font-bold mb-4 text-center text-primary">
          Crop & Nutrition Management
        </Text>

        <View className="bg-light rounded-2xl p-5 shadow-md shadow-dark w-full">

          <Text className="text-lg font-semibold mb-3 text-primary">
            Crop & Nutrition Management
          </Text>

          {/* 1. Fertilizer Practices */}
          <SingleSelectInput
            control={methods.control}
            name="fertilizerPractice"
            label="Fertilizer Practices"
            options={fertilizerOptions}
          />

          {/* 2. Fertigation Facilities (YES/NO) */}
          <Text className="text-base font-semibold mt-4 mb-2 text-dark">
            Fertigation Facilities
          </Text>

          <Controller
            control={methods.control}
            name="fertigation"
            render={({ field: { value, onChange } }) => (
              <RadioButton.Group onValueChange={onChange} value={value}>
                {yesNoOptions.map((opt) => (
                  <View key={opt.value} className="flex-row items-center mb-1">
                    <RadioButton value={opt.value} color="#c7611f" />
                    <Text className="text-dark">{opt.label}</Text>
                  </View>
                ))}
              </RadioButton.Group>
            )}
          />

          {/* 3. Nutrition Plan */}
          <FormInput
            control={methods.control}
            name="nutritionPlan"
            label="Nutrition Plan (if already following)"
            icon="book-open-page-variant"
            iconColor="secondary"
          />

          {/* 4. Mulching (YES/NO) */}
          <Text className="text-base font-semibold mt-4 mb-2 text-dark">
            Mulching
          </Text>

          <Controller
            control={methods.control}
            name="mulching"
            render={({ field: { value, onChange } }) => (
              <RadioButton.Group onValueChange={onChange} value={value}>
                {yesNoOptions.map((opt) => (
                  <View key={opt.value} className="flex-row items-center mb-1">
                    <RadioButton value={opt.value} color="#c7611f" />
                    <Text className="text-dark">{opt.label}</Text>
                  </View>
                ))}
              </RadioButton.Group>
            )}
          />

          {/* 5. Last Fertilizer Application Date */}
          <FormInput
            control={methods.control}
            name="lastFertiliserDate"
            label="Last Fertiliser Application Date"
            icon="calendar"
            iconColor="secondary"
          />

          {/* 6. Mode of Fertiliser Application */}
          <SingleSelectInput
            control={methods.control}
            name="applicationMode"
            label="Mode of Fertiliser Application"
            options={applicationModeOptions}
          />

        </View>
      </ScrollView>
    </FormProvider>
  );
}
