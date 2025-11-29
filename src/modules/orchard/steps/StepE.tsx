// StepE_PlantProtection.js
import { ScrollView, Text, View } from "react-native";

import CheckboxGroup from "@/src/components/form/inputs/Checkbox";
import FormInput from "@/src/components/form/inputs/FormInput";
import RadioGroup from "@/src/components/form/inputs/RadioButton";
import { FormSectionProps } from "@/src/types/formSectionProps";

export default function StepE_PlantProtection({ control, errors }: FormSectionProps) {
  const diseaseList = [
    "Scab",
    "Alternaria",
    "Powdery Mildew",
    "Fire Blight",
    "Marssonina",
    "Root Rot",
  ];

  const pestList = [
    "Aphids",
    "Mites",
    "Codling Moth",
    "Leaf Miner",
    "San Jose Scale",
    "Borers",
  ];

  const insuranceOptions = ["Yes", "No"];

  return (
    <ScrollView className="flex-1 w-full">

      {/* PAGE HEADING */}
      <Text className="text-2xl font-bold mb-4 text-center text-primary">
        Plant Protection & Health
      </Text>

      {/* CARD */}
      <View className="bg-light rounded-2xl p-5 shadow-md shadow-neutral w-full">

        <Text className="text-lg font-semibold mb-3 text-primary">
          Plant Protection & Health
        </Text>

        {/* 1️⃣ Disease History */}
        <CheckboxGroup
          control={control}
          name="diseases"
          label="Disease History"
          options={diseaseList}
          error={errors.diseases}
        />

        {/* 2️⃣ Pest History */}
        <CheckboxGroup
          control={control}
          name="pests"
          label="Pest History"
          options={pestList}
          error={errors.pests}
        />

        {/* 3️⃣ Spray Schedule */}
        <FormInput
          control={control}
          name="spraySchedule"
          label="Spray Schedule (Optional)"
          optional={true}
          icon="calendar-clock"
          error={errors.spraySchedule}
        />

        {/* 4️⃣ Crop Insurance */}
        <RadioGroup
          control={control}
          name="cropInsurance"
          label="Crop Insurance Coverage"
          options={insuranceOptions}
          error={errors.cropInsurance}
        />

      </View>

    </ScrollView>
  );
}
