// AuthForm.tsx
import React, { useState } from "react";
import { Button, View } from "react-native";
import LoginForm from "./LoginForm";
import UserRegistration from "./UserRegistration";

export default function AuthForm() {
  const [mode, setMode] = useState<"login" | "register">("register");

  return (
    <View style={{ flex: 1, padding: 20,}}>
      {mode === "login" ? <LoginForm /> : <UserRegistration />}

      <Button
        title={mode === "login" ? "Go to Register" : "Go to Login"}
        onPress={() => setMode(mode === "login" ? "register" : "login")}
      />
    </View>
  );
}
