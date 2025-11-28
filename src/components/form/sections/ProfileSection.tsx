import { FormSectionProps } from "@/src/types/formSectionProps";
import { useEffect } from "react";
import { View } from "react-native";
import FormInput from "../inputs/FormInput";
import SingleSelectInput from "../inputs/SingleSelectInput";

interface Props {
  control: any;
  errors: any;
  data?: any; // <-- add data prop
  setValue?: any; // <-- add setValue to allow prefill
}

export default function ProfileSection({
  control,
  errors,
  data,
  setValue,
}: FormSectionProps) {
  

  // Prefill inputs when API data arrives
  useEffect(() => {
    if (data) {
      // Matching API keys to form field names
      setValue("fullName", data.fullName || "");
      setValue("email", data.email || "");
      setValue("phone", data.phone || "");
      setValue("age", String(data.age || ""));
      setValue("gender", data.gender || "");
    }
  }, [data]);

  return (
    <View style={{ padding: 20 }}>
      <FormInput
        control={control}
        name="fullName"
        label="Full Name"
        error={errors?.fullName?.message}
      />

      <FormInput
        control={control}
        name="email"
        label="Email"
        error={errors.email?.message}
        type="email"
      />

      <FormInput
        control={control}
        name="phone"
        label="Mobile Number"
        error={errors.phone?.message}
        type="phone"
      />

      <FormInput
        control={control}
        name="age"
        label="Age"
        error={errors.age?.message}
        type="phone"
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
        error={errors.password?.message}
        type="password"
      />
      <FormInput
        control={control}
        name="confirmPassword"
        label="Confirm Password"
        error={errors.confirmPassword}
        type="password"
      />
    </View>
  );
}
