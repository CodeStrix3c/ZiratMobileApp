import React from "react";
import { Controller } from "react-hook-form";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { Dropdown } from "react-native-paper-dropdown";

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

export default function SingleSelectInput({
  control,
  name,
  label,
  options,
  error,
  optional = false,
}: Props) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange } }) => (
        <View style={styles.container}>
          <Dropdown
            label={optional ? `${label} (Optional)` : label}
            placeholder={`Select ${label}`}
            options={options}
            value={value}
            onSelect={onChange}
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
