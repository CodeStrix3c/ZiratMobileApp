import FormInput from "@/src/components/form/inputs/FormInput";
import MultiSelectInput from "@/src/components/form/inputs/MultiSelectInput";
import SingleSelectInput from "@/src/components/form/inputs/SingleSelectInput";
import React from "react";
import { useWatch } from "react-hook-form";
import { View } from "react-native";

export default function OperationalSection({ control, errors }) {
  const deliveryService = useWatch({
    control,
    name: "deliveryService",
    defaultValue: "",
  });

  const serviceAreaOptions = [
    { value: "villageA", label: "Village A" },
    { value: "villageB", label: "Village B" },
    { value: "villageC", label: "Village C" },
    { value: "blockX", label: "Block X" },
    { value: "blockY", label: "Block Y" },
  ];

  return (
    <View style={{ padding: 20 }}>
      {/* YEARS IN BUSINESS */}
      <FormInput
        control={control}
        name="yearsInBusiness"
        label="Years in Business"
        type="number"
        error={errors.yearsInBusiness}
      />

      {/* DISTRIBUTOR TIE-UPS */}
      <FormInput
        control={control}
        name="distributorTieUps"
        label="Distributor / Company Tie-ups"
        error={errors.distributorTieUps}
      />

      {/* DELIVERY SERVICE */}
      <SingleSelectInput
        control={control}
        name="deliveryService"
        label="Delivery Service Available"
        options={[
          { value: "", label: "Select" },
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" },
        ]}
        error={errors.deliveryService}
      />

      {/* CONDITIONAL SERVICE AREA */}
      {deliveryService === "yes" && (
        <MultiSelectInput
          control={control}
          name="serviceArea"
          label="Service Area (Villages / Blocks covered)"
          options={serviceAreaOptions}
          error={errors.serviceArea}
        />
      )}

      {/* MONTHLY SALES */}
      <FormInput
        control={control}
        name="averageMonthlySales"
        label="Average Monthly Sales Volume (optional)"
        type="number"
        error={errors.averageMonthlySales}
      />
    </View>
  );
}
