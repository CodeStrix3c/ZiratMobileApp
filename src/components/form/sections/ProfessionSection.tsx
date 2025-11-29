import React from "react";
import { StyleSheet, View } from "react-native";
import FormInput from "../inputs/FormInput";

interface Props {
  control: any;
  errors: any;
}

export default function ProfessionSection({ control, errors }: Props) {
  return (
    <View style={styles.container}>
      <FormInput
        control={control}
        name="professionType"
        label="Profession / Occupation"
        error={errors.professionType}
      />

      <FormInput
        control={control}
        name="organizationName"
        label="Organization / Employer Name"
        error={errors.organizationName}
      />

      <FormInput
        control={control}
        name="designation"
        label="Designation / Role"
        error={errors.designation}
      />

      <FormInput
        control={control}
        name="experienceYears"
        label="Years of Experience"
        keyboardType="numeric"
        error={errors.experienceYears}
      />

      <FormInput
        control={control}
        name="skills"
        label="Key Skills / Expertise (Optional)"
        error={errors.skills}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 14,
  },
});
