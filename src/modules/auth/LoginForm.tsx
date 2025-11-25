import FormInput from "@/src/components/form/inputs/FormInput";
import { useAuth } from "@/src/contexts/AuthContext";
import { useLoginMutation } from "@/src/hooks/useUserProfileMutation";
import { router } from "expo-router";
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
  const { setUserToken, setUserId } = useAuth();

  const { mutateAsync: loginMutate, isPending } = useLoginMutation();

  const onSubmit = async (data: any) => {
    // try {
    //   const response = await loginMutate({
    //     phone: data.phone,
    //     password: data.password,
    //   });
    //   if (response.success) {
    //     await setUserToken(response.token);
    //     await setUserId(response.user);
    //     router.replace("/");
    //     showSuccessToast("logged in");
    //   }

    //   setShowSnack(true);
    // } catch (error: any) {
    //   showErrorToast("Something went wrong try again later");

    //   toggleSnack();
    // }
    router.push("/");
  };

  return (
    <>
      <View style={{ padding: 20 }}>
        <Text variant="headlineSmall">Login</Text>
        <Text variant="labelLarge">Enter your credentials below</Text>

        <Divider style={{ marginVertical: 10 }} />

        <FormInput
          control={control}
          name="phone"
          label="Phone Number"
          type="number"
          error={errors.phone}
        />

        <FormInput
          control={control}
          name="password"
          label="Password"
          type="password"
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
