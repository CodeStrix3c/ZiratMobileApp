// src/components/form/inputs/MultiSelectInput.tsx
import React, { useState } from "react";
import { Controller } from "react-hook-form";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { MultiSelectDropdown } from "react-native-paper-dropdown";

interface Option {
  label: string;
  value: string;
}

interface Props {
  control: any;
  name: string;
  label: string;
  options: Option[];
  error?: any;
  optional?: boolean;
}

export default function MultiSelectInput({
  control,
  name,
  label,
  options,
  error,
  optional = false,
}: Props) {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange } }) => (
        <View style={styles.container}>
          <MultiSelectDropdown
            label={optional ? `${label} (Optional)` : label}
            placeholder={`Select ${label}`}
            value={value || []}
            onSelect={onChange}
            options={options}
          />
          {error && <Text style={styles.error}>{error.message}</Text>}
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 15 },
  error: { color: "red", marginTop: 5 },
});
