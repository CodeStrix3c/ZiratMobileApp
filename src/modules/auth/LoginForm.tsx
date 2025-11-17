import FormInput from "@/src/components/form/inputs/FormInput";
import { useAuth } from "@/src/contexts/AuthContext";
import { useLoginMutation } from "@/src/hooks/useUserProfileMutation";
import React, { useState } from "react";
import { View } from "react-native";
import { Button, Divider, Snackbar, Text } from "react-native-paper";
import { useZodForm } from "../../hooks/useZodForm";
import { LoginSchema } from "../../schemas/auth.schema";

export default function LoginForm() {
  const { control, handleSubmit, formState } = useZodForm(LoginSchema);
  const { errors } = formState;

  const [showSnack, setShowSnack] = useState(false);
  const toggleSnack = () => setShowSnack((p) => !p);

  const { mutateAsync: loginMutate, isPending } = useLoginMutation();
  const { login } = useAuth();

  const onSubmit = async (data: any) => {
    // try {
    //   const response = await loginMutate({
    //     email: data.email,
    //     password: data.password,
    //   });

    //   console.log("Login success:", response);

    //   await saveAuth(response.token, response.user);

    //   setShowSnack(true);
    // } catch (error: any) {
    //   console.log("Login failed:", error);
    //   toggleSnack();
    // }
    await login("fakeToken", 100);
  };

  return (
    <>
      <View style={{ padding: 20 }}>
        <Text variant="headlineSmall">Login</Text>
        <Text variant="labelLarge">Enter your credentials below</Text>

        <Divider style={{ marginVertical: 10 }} />

        <FormInput
          control={control}
          name="email"
          label="Email"
          error={errors.email}
        />

        <FormInput
          control={control}
          name="password"
          label="Password"
          secure
          error={errors.password}
        />

        <Button
          style={{ marginTop: 15 }}
          icon="login"
          mode="contained"
          onPress={handleSubmit(onSubmit)}
          loading={isPending}
          disabled={isPending}
        >
          Login
        </Button>
      </View>

      <Snackbar
        visible={showSnack}
        onDismiss={toggleSnack}
        action={{
          label: "Dismiss",
          onPress: toggleSnack,
        }}
        duration={Snackbar.DURATION_LONG}
      >
        {isPending ? "Logging in..." : "Login successful!"}
      </Snackbar>
    </>
  );
}
