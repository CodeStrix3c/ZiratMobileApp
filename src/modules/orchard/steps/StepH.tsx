// StepH_InputCostDetails.js
import SingleSelectInput from "@/src/components/form/inputs/SingleSelectInput";
import { creditPeriodOptions, paymentTypeOptions, supplierLocationOptions } from "@/src/schemas/orchard schemas/stepHScema";
import { ScrollView, Text, View } from "react-native";



export default function StepH_InputCostDetails({ control, errors }:any) {

  const supplierOptions = supplierLocationOptions.map((x) => ({
    label: x,
    value: x,
  }));

  const paymentOptions = paymentTypeOptions.map((x) => ({
    label: x,
    value: x,
  }));

  const creditOptions = creditPeriodOptions.map((x) => ({
    label: x,
    value: x,
  }));

  return (
    <ScrollView className="flex-1 w-full">

      {/* PAGE TITLE */}
      <Text className="text-2xl font-bold mb-4 text-center text-primary">
        Input Cost Details
      </Text>

      <View className="bg-light rounded-2xl p-5 shadow-md shadow-neutral w-full">

        <Text className="text-lg font-semibold mb-3 text-primary">
          Input Cost Details
        </Text>

        {/* 1️⃣ Pesticide Supplier Location */}
        <SingleSelectInput
          control={control}
          name="pesticideSupplierLocation"
          label="Pesticide Supplier Location"
          options={supplierOptions}
          error={errors.pesticideSupplierLocation}
        />

        {/* 2️⃣ Payment Type */}
        <SingleSelectInput
          control={control}
          name="paymentType"
          label="Payment Type"
          options={paymentOptions}
          error={errors.paymentType}
        />

        {/* 3️⃣ Credit Period */}
        <SingleSelectInput
          control={control}
          name="creditPeriod"
          label="Credit Period"
          options={creditOptions}
          error={errors.creditPeriod}
        />

      </View>
    </ScrollView>
  );
}
