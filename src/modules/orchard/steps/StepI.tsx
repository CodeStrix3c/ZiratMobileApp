// StepI_OptionalFutureFields.js
import FormInput from "@/src/components/form/inputs/FormInput";
import React from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { ScrollView, Text, View } from "react-native";
import { Checkbox } from "react-native-paper";

export default function StepI_OptionalFutureFields() {
  const methods = useForm({
    defaultValues: {
      govtSchemes: [],
      fpoMembership: "",
      certifications: [],
      digitalTools: [],
    },
  });

  // MULTI-SELECT LISTS (converted using map)
  const schemeList = [
    "Subsidy",
    "Crop Insurance",
    "Horticulture Mission Support",
    "PM-Kisan Support",
    "Other",
  ];

  const certificationList = [
    "Organic",
    "GAP",
    "Fair Trade",
    "Global GAP",
    "Other",
  ];

  const digitalToolsList = [
    "Weather Apps",
    "Advisory Apps",
    "Farm Management Tools",
    "Soil Health Apps",
    "Mobile-based Irrigation Advisory",
    "Other",
  ];

  return (
    <FormProvider {...methods}>
      <ScrollView className="flex-1 w-full">

        {/* HEADING */}
        <Text className="text-2xl font-bold mb-4 text-center text-primary">
          Optional / Future-Proof Fields
        </Text>

        {/* CARD */}
        <View className="bg-light rounded-2xl p-5 shadow-md shadow-neutral w-full">

          <Text className="text-lg font-semibold mb-3 text-primary">
            Additional Optional Information
          </Text>

          {/* 1️⃣ GOVERNMENT SCHEMES AVAILED */}
          <Text className="text-base font-semibold mb-2 text-dark">
            Government Schemes Availed (Multi-select)
          </Text>

          <Controller
            control={methods.control}
            name="govtSchemes"
            render={({ field: { value, onChange } }) => (
              <View className="flex-row flex-wrap">
                {schemeList.map((item) => (
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

          {/* 2️⃣ FPO MEMBERSHIP */}
          <FormInput
            control={methods.control}
            name="fpoMembership"
            label="FPO / Cooperative Membership (Optional)"
            optional={true}
            icon="account-group"
            iconColor="secondary"
          />

          {/* 3️⃣ CERTIFICATIONS */}
          <Text className="text-base font-semibold mt-4 mb-2 text-dark">
            Certifications (Organic / GAP / etc.)
          </Text>

          <Controller
            control={methods.control}
            name="certifications"
            render={({ field: { value, onChange } }) => (
              <View className="flex-row flex-wrap">
                {certificationList.map((item) => (
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

          {/* 4️⃣ DIGITAL TOOLS USED */}
          <Text className="text-base font-semibold mt-4 mb-2 text-dark">
            Digital Tools Used (Multi-select)
          </Text>

          <Controller
            control={methods.control}
            name="digitalTools"
            render={({ field: { value, onChange } }) => (
              <View className="flex-row flex-wrap">
                {digitalToolsList.map((item) => (
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

        </View>
      </ScrollView>
    </FormProvider>
  );
}
