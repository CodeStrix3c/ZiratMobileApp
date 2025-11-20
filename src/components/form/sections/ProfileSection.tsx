// src/components/form/sections/ProfileSection.tsx
import React from "react";
import { View } from "react-native";
import FormInput from "../inputs/FormInput";
import SingleSelectInput from "../inputs/SingleSelectInput";

interface Props {
  control: any;
  errors: any;
}

export default function ProfileSection({ control, errors }: Props) {
  return (
    <View style={{ padding: 20 }}>
      <FormInput
        control={control}
        name="fullName"
        label="Full Name"
        error={errors.fullName}
      />
      <FormInput
        control={control}
        name="email"
        label="Email"
        error={errors.email}
        keyboardType="email-address"
      />
      <FormInput
        control={control}
        name="phone"
        label="Mobile Number"
        error={errors.phone}
        keyboardType="numeric"
      />
      <FormInput
        control={control}
        name="age"
        label="Age"
        error={errors.age}
        keyboardType="numeric"
      />

      <SingleSelectInput
        control={control}
        name="gender"
        label="Gender"
        options={[
          { label: "Male", value: "male" },
          { label: "Female", value: "female" },
          { label: "Other", value: "other" },
        ]}
        error={errors.gender}
      />

      <FormInput
        control={control}
        name="password"
        label="Password"
        error={errors.password}
        secure
      />
      <FormInput
        control={control}
        name="confirmPassword"
        label="Confirm Password"
        error={errors.confirmPassword}
        secure
      />
    </View>
  );
}
