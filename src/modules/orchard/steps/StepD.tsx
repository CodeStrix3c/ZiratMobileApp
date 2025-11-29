import { Controller } from "react-hook-form";
import { ScrollView, Text, View } from "react-native";
import { RadioButton } from "react-native-paper";

import FormInput from "@/src/components/form/inputs/FormInput";
import SingleSelectInput from "@/src/components/form/inputs/SingleSelectInput";

export default function StepD_CropNutrition({ control, errors }: any) {
  
  const fertilizerOptions = [
    { label: "Organic", value: "Organic" },
    { label: "Chemical", value: "Chemical" },
    { label: "Integrated", value: "Integrated" },
  ];

  const yesNoOptions = [
    { label: "Yes", value: "Yes" },
    { label: "No", value: "No" },
  ];

  const applicationModeOptions = [
    { label: "Soil Application", value: "Soil Application" },
    { label: "Foliar Application", value: "Foliar Application" },
  ];

  return (
    <ScrollView className="flex-1 w-full">

      <Text className="text-2xl font-bold mb-4 text-center text-primary">
        Crop & Nutrition Management
      </Text>

      <View className="bg-light rounded-2xl p-5 shadow-md shadow-neutral w-full">

        {/* 1️⃣ Fertilizer Practice */}
        <SingleSelectInput
          control={control}
          name="fertilizerPractice"
          label="Fertilizer Practices"
          options={fertilizerOptions}
          error={errors.fertilizerPractice}
        />

        {/* 2️⃣ Fertigation (YES/NO) */}
        <Text className="text-base font-semibold mt-4 mb-2 text-dark">
          Fertigation Facilities
        </Text>

        <Controller
          control={control}
          name="fertigation"
          render={({ field: { value, onChange } }) => (
            <>
              <RadioButton.Group onValueChange={onChange} value={value}>
                {yesNoOptions.map((opt) => (
                  <View key={opt.value} className="flex-row items-center mb-1">
                    <RadioButton value={opt.value} color="#c7611f" />
                    <Text className="text-dark">{opt.label}</Text>
                  </View>
                ))}
              </RadioButton.Group>

              {errors.fertigation && (
                <Text className="text-error text-sm">
                  {errors.fertigation.message}
                </Text>
              )}
            </>
          )}
        />

        {/* 3️⃣ Nutrition Plan (optional) */}
        <FormInput
          control={control}
          name="nutritionPlan"
          label="Nutrition Plan (optional)"
          icon="book-open-page-variant"
          error={errors.nutritionPlan?.message}
        />

        {/* 4️⃣ Mulching (YES/NO) */}
        <Text className="text-base font-semibold mt-4 mb-2 text-dark">
          Mulching
        </Text>

        <Controller
          control={control}
          name="mulching"
          render={({ field: { value, onChange } }) => (
            <>
              <RadioButton.Group onValueChange={onChange} value={value}>
                {yesNoOptions.map((opt) => (
                  <View key={opt.value} className="flex-row items-center mb-1">
                    <RadioButton value={opt.value} color="#c7611f" />
                    <Text className="text-dark">{opt.label}</Text>
                  </View>
                ))}
              </RadioButton.Group>

              {errors.mulching && (
                <Text className="text-error text-sm">
                  {errors.mulching.message}
                </Text>
              )}
            </>
          )}
        />

        {/* 5️⃣ Last Fertilizer Application Date */}
        <FormInput
          control={control}
          name="lastFertiliserDate"
          label="Last Fertiliser Application Date"
          icon="calendar"
          error={errors.lastFertiliserDate?.message}
        />

        {/* 6️⃣ Mode of Application */}
        <SingleSelectInput
          control={control}
          name="applicationMode"
          label="Mode of Fertiliser Application"
          options={applicationModeOptions}
          error={errors.applicationMode}
        />

      </View>
    </ScrollView>
  );
}
