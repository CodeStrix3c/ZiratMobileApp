import FormInput from "@/src/components/form/inputs/FormInput";
import SingleSelectInput from "@/src/components/form/inputs/SingleSelectInput";
import { FormSectionProps } from "@/src/types/formSectionProps";
import { useWatch } from "react-hook-form";
import { View } from "react-native";

export default function SupportSection({ control, errors }: FormSectionProps) {
  const fieldStaffAvailable = useWatch({
    control,
    name: "fieldStaffAvailable",
    defaultValue: "no",
  });

  return (
    <View style={{ padding: 20, gap: 12 }}>
      <SingleSelectInput
        control={control}
        name="advisorySupport"
        label="Agronomy Advisory Support"
        options={[
          { label: "Select", value: "" },
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" },
        ]}
        error={errors?.advisorySupport}
      />

      <SingleSelectInput
        control={control}
        name="fieldStaffAvailable"
        label="Field Staff Available"
        options={[
          { label: "Select", value: "" },
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" },
        ]}
        error={errors?.fieldStaffAvailable?.message}
      />

      {/* Conditional Field Staff Count */}
      {fieldStaffAvailable === "yes" && (
        <FormInput
          control={control}
          name="fieldStaffCount"
          label="Number of Field Staff"
          type="phone"
          error={errors?.fieldStaffCount?.message}
        />
      )}

      {/* After-Sales Service */}
      <FormInput
        control={control}
        name="afterSalesService"
        label="After-Sales Service (Warranty / Return / Replacement policy)"
        error={errors?.afterSalesService?.message}
      />

      {/* Delivery Range */}
      <FormInput
        control={control}
        name="deliveryRange"
        label="Preferred Delivery Area Range (Sq. KMs)"
        type="phone"
        error={errors?.deliveryRange?.message}
      />

      {/* Computer/Laptop Availability */}
      <SingleSelectInput
        control={control}
        name="computerAvailable"
        label="Computer/Laptop Facility Available"
        options={[
          { label: "Select", value: "" },
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" },
        ]}
        error={errors?.computerAvailable}
      />

      {/* Delivery Vehicle Availability */}
      <SingleSelectInput
        control={control}
        name="vehicleAvailable"
        label="Vehicle for Delivery / Two Wheeler"
        options={[
          { label: "Select", value: "" },
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" },
        ]}
        error={errors.vehicleAvailable}
      />
    </View>
  );
}
