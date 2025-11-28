// StepB_BasicInfo.js
import FormInput from "@/src/components/form/inputs/FormInput";
import SingleSelectInput from "@/src/components/form/inputs/SingleSelectInput";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { ScrollView, Text, View } from "react-native";
import { Checkbox, RadioButton } from "react-native-paper";

export default function StepB_BasicInfo() {
  const {
    control,
    formState: { errors }, } = useFormContext();

    console.log(errors,"errirsfsdd");
    

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
          control={control}
          name="varieties"
          render={({ field: { value, onChange } }) => (
            <>
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

              {errors.varieties && (
                <Text className="text-error text-sm">
                  {errors.varieties.message}
                </Text>
              )}
            </>
          )}
        />

        {/* 2. Total Trees */}
        <FormInput
          control={control}
          name="totalTrees"
          label="Total Number of Trees"
          icon="counter"
          iconColor="secondary"
          type="number"
        />

        {/* 3. Trees Per Variety */}
        <FormInput
          control={control}
          name="treesPerVariety"
          label="Trees Per Variety"
          icon="format-list-numbered"
          iconColor="secondary"
          type="number"
        />

        {/* 4. Rootstock Dropdown */}
        <SingleSelectInput
          control={control}
          name="rootstock"
          label="Rootstock Used"
          options={rootstockOptions}
        />

        {/* Rootstock error message */}
        {errors.rootstock && (
          <Text className="text-error text-sm">
            {errors.rootstock.message}
          </Text>
        )}

        {/* 5. Plant Density Dropdown */}
        <SingleSelectInput
          control={control}
          name="plantDensity"
          label="Plant Density"
          options={densityOptions}
        />

        {errors.plantDensity && (
          <Text className="text-error text-sm">
            {errors.plantDensity.message}
          </Text>
        )}

        {/* 6. Tree Age (Radio Buttons) */}
        <Text className="text-base font-semibold mt-4 mb-2 text-dark">
          Tree Age Distribution
        </Text>

        <Controller
          control={control}
          name="treeAge"
          render={({ field: { value, onChange } }) => (
            <>
              <RadioButton.Group onValueChange={onChange} value={value}>
                {treeAgeOptions.map((opt) => (
                  <View key={opt} className="flex-row items-center mb-1">
                    <RadioButton value={opt} color="#c7611f" />
                    <Text className="text-dark">{opt}</Text>
                  </View>
                ))}
              </RadioButton.Group>

              {errors.treeAge && (
                <Text className="text-error text-sm">
                  {errors.treeAge.message}
                </Text>
              )}
            </>
          )}
        />

      </View>
    </ScrollView>
  );
}
