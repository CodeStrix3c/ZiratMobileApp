// StepF_FarmInfrastructure.js
import FormInput from "@/src/components/form/inputs/FormInput";
import React from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { ScrollView, Text, View } from "react-native";
import { Checkbox, RadioButton } from "react-native-paper";

export default function StepF_FarmInfrastructure() {
  const methods = useForm({
    defaultValues: {
      equipmentOwned: [],
      storageFacility: [],
      farmLabor: "",
      otherTools: "",
    },
  });

  // 1. Equipment Owned
  const equipmentList = [
    "Tractor",
    "Sprayer",
    "Grading Line",
    "Power Weeder",
    "Weather Station",
    "Sensors",
    "Rotavator",
    "Plough",
    "Other",
  ];

  // 2. Storage Facilities
  const storageList = [
    "Cold Storage",
    "CA Storage",
    "Open Storage",
    "On-farm Shed",
    "Other",
  ];

  // 3. Farm Labor Types
  const laborOptions = ["Permanent", "Seasonal", "Contract-based"];

  return (
    <FormProvider {...methods}>
      <ScrollView className="flex-1 w-full">

        {/* HEADING */}
        <Text className="text-2xl font-bold mb-4 text-center text-primary">
          Farm Infrastructure & Resources
        </Text>

        {/* CARD */}
        <View className="bg-light rounded-2xl p-5 shadow-md shadow-dark w-full">

          <Text className="text-lg font-semibold mb-3 text-primary">
            Farm Infrastructure and Resources
          </Text>

          {/* 1. EQUIPMENT OWNED */}
          <Text className="text-base font-semibold mb-2 text-dark">
            Equipment Owned
          </Text>

          <Controller
            control={methods.control}
            name="equipmentOwned"
            render={({ field: { value, onChange } }) => (
              <View className="flex-row flex-wrap">
                {equipmentList.map((item) => (
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

          {/* 2. STORAGE FACILITIES */}
          <Text className="text-base font-semibold mt-4 mb-2 text-dark">
            Storage Facilities
          </Text>

          <Controller
            control={methods.control}
            name="storageFacility"
            render={({ field: { value, onChange } }) => (
              <View className="flex-row flex-wrap">
                {storageList.map((item) => (
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

          {/* 3. FARM LABOR – OPTIONAL */}
          <Text className="text-base font-semibold mt-4 mb-2 text-dark">
            Farm Labor (Optional)
          </Text>

          <Controller
            control={methods.control}
            name="farmLabor"
            render={({ field: { value, onChange } }) => (
              <RadioButton.Group onValueChange={onChange} value={value}>
                {laborOptions.map((opt) => (
                  <View key={opt} className="flex-row items-center mb-1">
                    <RadioButton value={opt} color="#c7611f" />
                    <Text className="text-dark">{opt}</Text>
                  </View>
                ))}
              </RadioButton.Group>
            )}
          />

          {/* 4. OTHER TOOLS */}
          <FormInput
            control={methods.control}
            name="otherTools"
            label="Other Tools (Pruning Shear, Ladder, Baskets, etc.)"
            icon="tools"
            iconColor="secondary"
            optional={true}
          />

        </View>
      </ScrollView>
    </FormProvider>
  );
}
