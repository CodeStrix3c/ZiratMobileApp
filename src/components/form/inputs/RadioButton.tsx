import { Controller } from "react-hook-form";
import { Text, View } from "react-native";
import { RadioButton } from "react-native-paper";

export default function RadioGroup({ 
  control, 
  name, 
  label, 
  options, 
  error 
}) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange } }) => (
        <View style={{ marginBottom: 20 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 6 }}>
            {label}
          </Text>

          <RadioButton.Group onValueChange={onChange} value={value}>
            {options.map((opt) => (
              <View 
                key={opt} 
                style={{ flexDirection: "row", alignItems: "center", marginBottom: 4 }}
              >
                <RadioButton value={opt} />
                <Text>{opt}</Text>
              </View>
            ))}
          </RadioButton.Group>

          {error && (
            <Text style={{ color: "red" }}>{error.message}</Text>
          )}
        </View>
      )}
    />
  );
}
