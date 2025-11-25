// StepB_BasicInfo.js
import FormInput from "@/src/components/form/inputs/FormInput";
import SingleSelectInput from "@/src/components/form/inputs/SingleSelectInput";
import React from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { ScrollView, Text, View } from "react-native";
import { Checkbox, RadioButton } from "react-native-paper";

export default function StepB_BasicInfo() {
  const methods = useForm({
    defaultValues: {
      varieties: [],
      totalTrees: "",
      treesPerVariety: "",
      rootstock: "",
      plantDensity: "",
      treeAge: "",
    },
  });

  const varietiesList = [
    "Red Delicious",
    "Golden Delicious",
    "Gala",
    "Fuji",
    "Honeycrisp",
    "Ambri",
    "Other",
  ];

  const rootstockOptions = [
    { label: "M9", value: "M9" },
    { label: "MM106", value: "MM106" },
    { label: "Seedling", value: "Seedling" },
    { label: "Other", value: "Other" },
  ];

  const densityOptions = [
    { label: "High Density", value: "High Density" },
    { label: "Medium Density", value: "Medium Density" },
    { label: "Traditional", value: "Traditional" },
  ];

  const treeAgeOptions = [
    "Less than 5 years",
    "5–10 years",
    "10+ years",
  ];

  return (
    <FormProvider {...methods}>
      <ScrollView className="flex-1 w-full">

        {/* Heading */}
        <Text className="text-2xl font-bold mb-4 text-center text-primary">
          Orchard Registration
        </Text>

        {/* Card */}
        <View className="bg-light rounded-2xl p-5 shadow-md shadow-neutral w-full">

          <Text className="text-lg font-semibold mb-3 text-primary">
            Variety & Planting Details
          </Text>

          {/* 1. Multi-select (Varieties) */}
          <Text className="text-base font-semibold mb-2 text-dark">
            Varieties Planted
          </Text>

          <Controller
            control={methods.control}
            name="varieties"
            render={({ field: { value, onChange } }) => (
              <View className="flex-row flex-wrap">
                {varietiesList.map((v) => (
                  <View key={v} className="flex-row items-center w-1/2 mb-2">
                    <Checkbox
                      status={value.includes(v) ? "checked" : "unchecked"}
                      onPress={() => {
                        if (value.includes(v)) {
                          onChange(value.filter((item) => item !== v));
                        } else {
                          onChange([...value, v]);
                        }
                      }}
                      color="#c7611f"
                    />
                    <Text className="text-dark text-sm">{v}</Text>
                  </View>
                ))}
              </View>
            )}
          />

          {/* 2. Number of Trees */}
          <FormInput
            control={methods.control}
            name="totalTrees"
            label="Total Number of Trees"
            icon="counter"
            iconColor="secondary"
          />

          <FormInput
            control={methods.control}
            name="treesPerVariety"
            label="Trees Per Variety"
            icon="format-list-numbered"
            iconColor="secondary"
          />

          {/* 3. Rootstock Used (Dropdown) */}
          <SingleSelectInput
            control={methods.control}
            name="rootstock"
            label="Rootstock Used"
            options={rootstockOptions}
            // mainColor="secondary"
            // textColor="dark"
          />

          {/* 4. Plant Density (Dropdown) */}
          <SingleSelectInput
            control={methods.control}
            name="plantDensity"
            label="Plant Density"
            options={densityOptions}
            // mainColor="secondary"
            // textColor="dark"
          />

          {/* 5. Tree Age Distribution (Radio Group) */}
          <Text className="text-base font-semibold mt-4 mb-2 text-dark">
            Tree Age Distribution
          </Text>

          <Controller
            control={methods.control}
            name="treeAge"
            render={({ field: { value, onChange } }) => (
              <RadioButton.Group onValueChange={onChange} value={value}>
                {treeAgeOptions.map((opt) => (
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
