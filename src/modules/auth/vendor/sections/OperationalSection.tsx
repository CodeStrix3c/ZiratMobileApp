import React from "react";
import { useWatch } from "react-hook-form";
import { View } from "react-native";

import FormInput from "@/src/components/form/inputs/FormInput";
import SingleSelectInput from "@/src/components/form/inputs/SingleSelectInput";
import ChipInput from "../ChipInput";

export default function OperationalSection({ control, errors }) {
  const deliveryService = useWatch({
    control,
    name: "deliveryService",
  });
  const serviceAreas = useWatch({
    control,
    name: "serviceArea",
  });

  console.log(errors, "errors in operation");

  return (
    <View style={{ padding: 20 }}>
      <FormInput
        control={control}
        name="yearsInBusiness"
        label="Years in Business"
        type="number"
        error={errors?.yearsInBusiness?.message}
      />

      <FormInput
        control={control}
        name="distributorTieUps"
        label="Distributor / Company Tie-ups"
        error={errors?.distributorTieUps?.message}
      />

      <SingleSelectInput
        control={control}
        name="deliveryService"
        label="Delivery Service Available"
        options={[
          { value: "", label: "Select" },
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" },
        ]}
        error={errors?.deliveryService}
      />

      {/* Show Chip Input Only When Yes */}
      {deliveryService === "yes" && (
        <>
          <ChipInput
            control={control}
            name="serviceArea"
            label="Service Areas"
            error={
              serviceAreas?.length === 0
                ? { message: "At least one service area is required." }
                : errors.serviceArea?.message
            }
          />
        </>
      )}

      <FormInput
        control={control}
        name="averageMonthlySales"
        label="Average Monthly Sales Volume (optional)"
        type="number"
        error={errors?.averageMonthlySales?.message}
      />
    </View>
  );
}
