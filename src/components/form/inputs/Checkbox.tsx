import { Controller } from "react-hook-form";
import { Text, View } from "react-native";
import { Checkbox } from "react-native-paper";

export default function CheckboxGroup({ 
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
      defaultValue={[]}
      render={({ field: { value = [], onChange } }) => (
        <View style={{ marginBottom: 20 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 6 }}>
            {label}
          </Text>

          {options.map((opt) => (
            <View 
              key={opt} 
              style={{ flexDirection: "row", alignItems: "center", marginBottom: 4 }}
            >
              <Checkbox
                status={value.includes(opt) ? "checked" : "unchecked"}
                onPress={() => {
                  if (value.includes(opt)) {
                    onChange(value.filter((item) => item !== opt));
                  } else {
                    onChange([...value, opt]);
                  }
                }}
              />
              <Text>{opt}</Text>
            </View>
          ))}

          {error && (
            <Text style={{ color: "red", marginTop: 4 }}>
              {error.message}
            </Text>
          )}
        </View>
      )}
    />
  );
}
