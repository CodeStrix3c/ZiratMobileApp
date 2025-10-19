import { colors } from "@/src/constants/colors";
import { useAuth } from "@/src/contexts/AuthContext";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
} from "react-native";
import { Button, Divider, Text, TextInput } from "react-native-paper";

export default function AuthForm() {
  const { signIn, signUp } = useAuth();

  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleAuth = async () => {
    setError("");
    try {
      if (isLogin) {
        await signIn(username, password);
      } else {
        if (password !== confirmPassword) {
          setError("Passwords do not match");
          return;
        }
        await signUp(username, password);
      }
      router.replace("/");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <KeyboardAvoidingView
      className="flex-1 bg-white"
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
    >
      <ScrollView contentContainerClassName="flex-grow justify-center px-6 py-8 gap-3">
        <View className="items-center mb-6">
          <Image
            source={require("@/assets/images/ziraat.jpeg")}
            className="w-24 h-24 rounded-lg"
            resizeMode="contain"
          />
        </View>

        <Text variant="headlineMedium" className="text-center font-bold mb-4">
          {isLogin ? "Welcome Back" : "Create Account"}
        </Text>

        <TextInput
          label="Username"
          mode="outlined"
          value={username}
          onChangeText={setUsername}
          className="mb-1"
          outlineColor={colors.gray}
          activeOutlineColor={colors.primary}
        />

        <TextInput
          label="Password"
          mode="outlined"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          className="mb-1"
          outlineColor={colors.gray}
          activeOutlineColor={colors.primary}
        />

        {!isLogin && (
          <TextInput
            label="Confirm Password"
            mode="outlined"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            className="mb-1"
            outlineColor={colors.gray}
            activeOutlineColor={colors.primary}
          />
        )}

        {error ? (
          <Text className="text-center text-error mb-1">{error}</Text>
        ) : null}

        <Button
          mode="contained"
          onPress={handleAuth}
          className="rounded-md mt-4"
          buttonColor={colors.primary}
        >
          {isLogin ? "Login" : "Sign Up"}
        </Button>

        <View className="flex-row items-center my-4">
          <Divider className="flex-1" />
          <Text className="mx-2 text-gray-500">or</Text>
          <Divider className="flex-1" />
        </View>

        <Button
          mode="outlined"
          icon={() => <Ionicons name="logo-google" size={18} color="#DB4437" />}
          onPress={() => console.log("Google Login")}
          className="border-gray-300"
          textColor="#DB4437"
        >
          Continue with Google
        </Button>

        <Text className="mt-6 text-center text-black">
          {isLogin ? "Don’t have an account? " : "Already have an account? "}
          <Text
            className="text-secondary font-bold"
            onPress={() => {
              setIsLogin(!isLogin);
              setError("");
              setPassword("");
              setConfirmPassword("");
            }}
          >
            {isLogin ? "Sign Up" : "Login"}
          </Text>
        </Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
