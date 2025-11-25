import React from "react";
import { Button, Text, TextInput, View } from "react-native";

export default function VendorLoginForm() {
  return (
    <View>
      <Text style={{ fontSize: 22, fontWeight: "600", marginBottom: 20 }}>
        Vendor Login
      </Text>

      <TextInput
        placeholder="Email"
        style={{ borderWidth: 1, marginBottom: 10 }}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        style={{ borderWidth: 1, marginBottom: 10 }}
      />

      <Button title="Login" onPress={() => console.log("Vendor Login")} />
    </View>
  );
}
