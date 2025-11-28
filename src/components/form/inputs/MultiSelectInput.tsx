import { FormFieldProps } from "@/src/types/formFieldProps";
import { Controller } from "react-hook-form";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { MultiSelectDropdown } from "react-native-paper-dropdown";

export default function MultiSelectInput({
  control,
  name,
  label,
  options = [], // Ensure default empty array
  error,
  optional = false,
}: FormFieldProps) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange } }) => (
        <View style={styles.container}>
          <MultiSelectDropdown
            label={optional ? `${label} (Optional)` : label}
            placeholder={`Select ${label}`}
            value={Array.isArray(value) ? value : []} // Always an array
            onSelect={(selected) => onChange(selected ?? [])} // Safe fallback
            options={Array.isArray(options) ? options : []} // Always an array
          />

          {error && <Text style={styles.error}>{error.message || error}</Text>}
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 15 },
  error: { color: "red", marginTop: 5 },
});
