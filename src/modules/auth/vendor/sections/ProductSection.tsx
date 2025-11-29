import FormInput from "@/src/components/form/inputs/FormInput";
import MultiSelectInput from "@/src/components/form/inputs/MultiSelectInput";
import {
  useVendorBrandsQuery,
  useVendorInputsQuery,
} from "@/src/hooks/vendorQueryHooks";
import { useFieldArray, useWatch } from "react-hook-form";
import { TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";

export default function ProductSection({ control, errors, vendorId }) {
  // Fetch dynamic vendor inputs
  const { data: inputsData, isLoading: loadingInputs } = useVendorInputsQuery();

  // Fetch vendor-related brands
  const { data: brandsData, isLoading: loadingBrands } =
    useVendorBrandsQuery(vendorId);

  // Watch major brands field
  const majorBrands = useWatch({
    control,
    name: "majorBrands",
  });

  // Field array for optional inputs list
  const { fields, append, remove } = useFieldArray({
    control,
    name: "otherInputs",
  });

  if (loadingInputs || loadingBrands) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={{ padding: 20 }}>
      {/* Inputs Sold */}
      <MultiSelectInput
        name="inputsSold"
        control={control}
        label="Type of Inputs Sold"
        options={inputsData?.map((i) => ({
          value: i.name,
          label: i.name,
        }))}
        error={errors?.inputsSold?.message}
      />

      {/* Major Brands (Multi Select) */}
      <MultiSelectInput
        name="majorBrands"
        control={control}
        label="Major Brands Stocked"
        options={brandsData?.map((b) => ({
          value: b.name,
          label: b.name,
        }))}
        error={
          majorBrands?.length === 0
            ? { message: "At least one brand is required." }
            : errors.majorBrands?.message
        }
      />

      {/* Storage Capacity */}
      <FormInput
        control={control}
        optional
        name="storageCapacity"
        label="Storage Capacity (MT or Litres)"
        error={errors?.storageCapacity?.message}
      />

      {/* Other Inputs Section */}
      <Text
        style={{
          fontWeight: "700",
          marginTop: 20,
          fontSize: 16,
          marginBottom: 10,
        }}
      >
        Other Inputs (Optional)
      </Text>

      {fields.map((item, index) => (
        <View
          key={item.id}
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            marginBottom: 10,
          }}
        >
          <View style={{ flex: 1 }}>
            <FormInput
              control={control}
              name={`otherInputs[${index}].name`}
              label="Input Name"
              error={errors.otherInputs?.[index]?.name?.message}
            />
          </View>

          <View style={{ width: 80 }}>
            <FormInput
              control={control}
              name={`otherInputs[${index}].stock`}
              label="Stock"
              type="phone"
              error={errors.otherInputs?.[index]?.stock?.message}
            />
          </View>

          <TouchableOpacity
            onPress={() => remove(index)}
            style={{
              backgroundColor: "#ff4444",
              padding: 6,
              borderRadius: 6,
            }}
          >
            <Text style={{ color: "white" }}>X</Text>
          </TouchableOpacity>
        </View>
      ))}

      <TouchableOpacity
        onPress={() => append({ name: "", stock: "" })}
        style={{
          marginTop: 10,
          backgroundColor: "#4CAF50",
          padding: 10,
          borderRadius: 6,
          alignSelf: "flex-start",
        }}
      >
        <Text style={{ color: "white", fontWeight: "600" }}>+ Add Input</Text>
      </TouchableOpacity>
    </View>
  );
}
