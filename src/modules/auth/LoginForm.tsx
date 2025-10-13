import { colors } from "@/src/constants/colors";
import { useAuth } from "@/src/contexts/AuthContext";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Button, TextInput } from "react-native-paper";

export default function LoginForm() {
  const { signIn } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setError("");
    try {
      await signIn(username, password);
      router.replace("/");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.container}>
          {/* Logo */}
          <View style={styles.logoContainer}>
            <Image
              source={require("@/assets/images/ziraat.jpeg")}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>

          {/* Title */}
          <Text style={styles.title}>Welcome Back</Text>

          {/* Inputs */}
          <TextInput
            label="Username"
            mode="outlined"
            value={username}
            onChangeText={setUsername}
            style={styles.input}
            outlineColor={colors.gray}
            activeOutlineColor={colors.primary}
          />

          <TextInput
            label="Password"
            mode="outlined"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            style={styles.input}
            outlineColor={colors.gray}
            activeOutlineColor={colors.primary}
          />

          {/* Error Message */}
          {error ? <Text style={styles.error}>{error}</Text> : null}

          {/* Login Button */}
          <Button
            mode="contained"
            onPress={handleLogin}
            style={styles.button}
            contentStyle={styles.buttonContent}
          >
            Login
          </Button>

          {/* Signup Redirect */}
          <Text style={styles.toggleText}>
            Don’t have an account?{" "}
            <Text
              style={styles.toggleLink}
              onPress={() => router.push("/auth/signup")}
            >
              Sign Up
            </Text>
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

// Styles
const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
    backgroundColor: colors.white,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: colors.black,
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    marginBottom: 16,
    backgroundColor: colors.white,
  },
  button: {
    borderRadius: 10,
    marginTop: 10,
  },
  buttonContent: {
    paddingVertical: 8,
  },
  error: {
    color: colors.error,
    textAlign: "center",
    marginBottom: 10,
  },
  toggleText: {
    marginTop: 20,
    textAlign: "center",
    color: colors.black,
  },
  toggleLink: {
    color: colors.secondary,
    fontWeight: "bold",
  },
});
