import React, { useState } from "react";
import { Button, View } from "react-native";
import VendorLoginForm from "./VendorLoginFrom";
import VendorRegistrationForm from "./VendorRegistrationForm";

export default function VendorAuthForm() {
  const [mode, setMode] = useState<"login" | "register">("register");

  return (
    <View style={{ flex: 1, padding: 20 }}>
      {mode === "login" ? <VendorLoginForm /> : <VendorRegistrationForm />}

      <Button
        title={
          mode === "login" ? "Go to Vendor Register" : "Go to Vendor Login"
        }
        onPress={() => setMode(mode === "login" ? "register" : "login")}
      />
    </View>
  );
}
