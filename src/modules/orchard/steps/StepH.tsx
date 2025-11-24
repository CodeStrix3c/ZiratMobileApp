// StepH_InputCostDetails.js
import SingleSelectInput from "@/src/components/form/inputs/SingleSelectInput";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { ScrollView, Text, View } from "react-native";

export default function StepH_InputCostDetails() {
  const methods = useForm({
    defaultValues: {
      pesticideSupplierLocation: "",
      paymentType: "",
      creditPeriod: "",
    },
  });

  // 🔥 DROPDOWN OPTIONS (converted using map())
  const supplierLocationOptions = [
    "Village Level",
    "From Town",
    "From City",
    "Online Mostly",
  ].map((x) => ({ label: x, value: x }));

  const paymentTypeOptions = [
    "Credit Purchase",
    "Cash Purchase",
    "Mixed",
  ].map((x) => ({ label: x, value: x }));

  const creditPeriodOptions = [
    "Month",
    "Crop Season",
    "No Limits",
  ].map((x) => ({ label: x, value: x }));

  return (
    <FormProvider {...methods}>
      <ScrollView className="flex-1 w-full">
        
        {/* PAGE TITLE */}
        <Text className="text-2xl font-bold mb-4 text-center text-primary">
          Input Cost Details
        </Text>

        <View className="bg-light rounded-2xl p-5 shadow-md shadow-dark w-full">

          <Text className="text-lg font-semibold mb-3 text-primary">
            Input Cost Details
          </Text>

          {/* 1️⃣ Pesticide Supplier Location */}
          <SingleSelectInput
            control={methods.control}
            name="pesticideSupplierLocation"
            label="Pesticide Supplier Location"
            options={supplierLocationOptions}
          />

          {/* 2️⃣ Payment Type */}
          <SingleSelectInput
            control={methods.control}
            name="paymentType"
            label="Payment Type"
            options={paymentTypeOptions}
          />

          {/* 3️⃣ Credit Period */}
          <SingleSelectInput
            control={methods.control}
            name="creditPeriod"
            label="Credit Period"
            options={creditPeriodOptions}
          />

        </View>
      </ScrollView>
    </FormProvider>
  );
}
