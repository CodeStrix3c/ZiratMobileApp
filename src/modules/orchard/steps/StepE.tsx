// StepE_PlantProtection.js
import FormInput from "@/src/components/form/inputs/FormInput";
import React from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { ScrollView, Text, View } from "react-native";
import { Checkbox, RadioButton } from "react-native-paper";

export default function StepE_PlantProtection() {
  const methods = useForm({
    defaultValues: {
      diseases: [],
      pests: [],
      spraySchedule: "",
      cropInsurance: "",
    },
  });

  // 🔥 Multi-select Lists
  const diseaseList = [
    "Scab",
    "Alternaria",
    "Powdery Mildew",
    "Fire Blight",
    "Marssonina",
    "Root Rot",
    "Other",
  ];

  const pestList = [
    "Aphids",
    "Mites",
    "Codling Moth",
    "Leaf Miner",
    "San Jose Scale",
    "Borers",
    "Other",
  ];

  const insuranceOptions = ["Yes", "No"];

  return (
    <FormProvider {...methods}>
      <ScrollView className="flex-1 w-full">

        {/* PAGE HEADING */}
        <Text className="text-2xl font-bold mb-4 text-center text-primary">
          Plant Protection & Health
        </Text>

        {/* CARD */}
        <View className="bg-light rounded-2xl p-5 shadow-md shadow-neutral w-full">

          <Text className="text-lg font-semibold mb-3 text-primary">
            Plant Protection & Health
          </Text>

          {/* 1. DISEASE HISTORY */}
          <Text className="text-base font-semibold mb-2 text-dark">
            Disease History
          </Text>

          <Controller
            control={methods.control}
            name="diseases"
            render={({ field: { value, onChange } }) => (
              <View className="flex-row flex-wrap">
                {diseaseList.map((item) => (
                  <View key={item} className="flex-row items-start w-1/2 mb-2">
                    <Checkbox
                      status={value.includes(item) ? "checked" : "unchecked"}
                      onPress={() => {
                        if (value.includes(item)) {
                          onChange(value.filter((x) => x !== item));
                        } else {
                          onChange([...value, item]);
                        }
                      }}
                      color="#c7611f"
                    />
                    <Text className="text-dark">{item}</Text>
                  </View>
                ))}
              </View>
            )}
          />

          {/* 2. PEST HISTORY */}
          <Text className="text-base font-semibold mt-4 mb-2 text-dark">
            Pest History
          </Text>

          <Controller
            control={methods.control}
            name="pests"
            render={({ field: { value, onChange } }) => (
              <View className="flex-row flex-wrap">
                {pestList.map((item) => (
                  <View key={item} className="flex-row items-start w-1/2 mb-2">
                    <Checkbox
                      status={value.includes(item) ? "checked" : "unchecked"}
                      onPress={() => {
                        if (value.includes(item)) {
                          onChange(value.filter((x) => x !== item));
                        } else {
                          onChange([...value, item]);
                        }
                      }}
                      color="#c7611f"
                    />
                    <Text className="text-dark">{item}</Text>
                  </View>
                ))}
              </View>
            )}
          />

          {/* 3. SPRAY SCHEDULE (OPTIONAL FIELD) */}
          <FormInput
            control={methods.control}
            name="spraySchedule"
            label="Spray Schedule (Optional)"
            optional={true}
            icon="calendar-clock"
            iconColor="secondary"
          />

          {/* 4. CROP INSURANCE */}
          <Text className="text-base font-semibold mt-4 mb-2 text-dark">
            Crop Insurance Coverage
          </Text>

          <Controller
            control={methods.control}
            name="cropInsurance"
            render={({ field: { value, onChange } }) => (
              <RadioButton.Group onValueChange={onChange} value={value}>
                {insuranceOptions.map((opt) => (
                  <View key={opt} className="flex-row items-center mb-1">
                    <RadioButton value={opt} color="#c7611f" />
                    <Text className="text-dark">{opt}</Text>
                  </View>
                ))}
              </RadioButton.Group>
            )}
          />

        </View>
      </ScrollView>
    </FormProvider>
  );
}
