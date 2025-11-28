import { useWatch } from "react-hook-form";
import { View } from "react-native";

import FormInput from "@/src/components/form/inputs/FormInput";
import SingleSelectInput from "@/src/components/form/inputs/SingleSelectInput";
import ChipInput from "../../../../components/form/inputs/ChipInput";

export default function OperationalSection({ control, errors }) {
  const deliveryServiceAvailable = useWatch({
    control,
    name: "deliveryServiceAvailable",
  });
  const serviceAreas = useWatch({
    control,
    name: "serviceArea",
  });

  return (
    <View style={{ padding: 20 }}>
      <FormInput
        control={control}
        name="yearsInBusiness"
        label="Years in Business"
        type="phone"
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
        name="deliveryServiceAvailable"
        label="Delivery Service Available"
        options={[
          { value: "", label: "Select" },
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" },
        ]}
        error={errors?.deliveryServiceAvailable}
      />

      {deliveryServiceAvailable === "yes" && (
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
        name="avgMonthlySalesVolume"
        label="Average Monthly Sales Volume (optional)"
        type="number"
        error={errors?.avgMonthlySalesVolume?.message}
      />
    </View>
  );
}
