import FormInput from "@/src/components/form/inputs/FormInput";
import MultiSelectInput from "@/src/components/form/inputs/MultiSelectInput";
import React from "react";
import { useFieldArray } from "react-hook-form";
import { Text, TouchableOpacity, View } from "react-native";

export default function ProductSection({ control, errors }) {
  const inputOptions = [
    "Seeds",
    "Fertilizers",
    "Pesticides",
    "Equipment",
    "Bio-products",
  ];

  const { fields, append, remove } = useFieldArray({
    control,
    name: "otherInputs",
  });

  return (
    <View style={{ padding: 20 }}>
      <MultiSelectInput
        name="inputsSold"
        control={control}
        label="Type of Inputs Sold"
        options={inputOptions.map((i) => ({ value: i, label: i }))}
        error={errors?.inputsSold?.message}
      />

      <FormInput
        control={control}
        name="majorBrands"
        label="Major Brands Stocked (e.g., Bayer, UPL)"
        error={errors?.majorBrands?.message}
      />

      <FormInput
        control={control}
        optional
        name="storageCapacity"
        label="Storage Capacity (MT or Litres)"
        error={errors?.storageCapacity?.message}
      />

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
              type="number"
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
