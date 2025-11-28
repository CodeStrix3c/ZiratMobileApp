import { FormFieldProps } from "@/src/types/formFieldProps";
import { useState } from "react";
import { useFieldArray } from "react-hook-form";
import { Text, View } from "react-native";
import { Chip, TextInput } from "react-native-paper";

export default function ChipInput({
  control,
  name,
  label,
  error,
  placeholder = "Add Area",
}: FormFieldProps) {
  const [value, setValue] = useState("");

  const { fields, append, remove } = useFieldArray({
    control,
    name,
  });

  const handleAdd = () => {
    if (!value.trim()) return;
    append({ name: value.trim() });
    setValue("");
  };

  return (
    <View style={{ marginTop: 15 }}>
      <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 10 }}>
        {label}
      </Text>

      <TextInput
        mode="outlined"
        placeholder={placeholder}
        value={value}
        onChangeText={setValue}
        right={
          <TextInput.Icon
            icon="plus"
            onPress={handleAdd}
            forceTextInputFocus={false}
          />
        }
      />

      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 6,
          marginTop: 12,
        }}
      >
        {fields.map((item, index) => (
          <Chip
            key={item.id}
            onClose={() => remove(index)}
            style={{
              backgroundColor: "#E8F5E9",
            }}
          >
            {item.name}
          </Chip>
        ))}
      </View>

      {error && (
        <Text style={{ color: "red", marginBottom: 16 }}>{error.message}</Text>
      )}
    </View>
  );
}
