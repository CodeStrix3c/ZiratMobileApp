import { router } from "expo-router";
import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

import { FormProvider } from "react-hook-form";

import { orchardSchema } from "@/src/schemas/orchard schemas/stepASchemas";
import { stepBBasicInfoSchema, } from "@/src/schemas/orchard schemas/stepBSchema";


// Step Screens
import { useZodForm } from "@/src/hooks/useZodForm";
import { stepCSoilWaterSchema } from "@/src/schemas/orchard schemas/stepCSchema";
import { stepDCropNutritionSchema } from "@/src/schemas/orchard schemas/stepDSchema";
import { stepEPlantProtectionSchema } from "@/src/schemas/orchard schemas/stepESchema";
import { stepFFarmInfrastructureSchema } from "@/src/schemas/orchard schemas/stepFSchema";
import { stepGProductionMarketingSchema } from "@/src/schemas/orchard schemas/stepGSchema";
import { stepHInputCostDetailsSchema } from "@/src/schemas/orchard schemas/stepHScema";
import { stepIOptionalFutureFieldsSchema } from "@/src/schemas/orchard schemas/stepISchema";
import StepA from "./steps/StepA";
import StepB from "./steps/StepB";
import StepC from "./steps/StepC";
import StepD from "./steps/StepD";
import StepE from "./steps/StepE";
import StepF from "./steps/StepF";
import StepG from "./steps/StepG";
import StepH from "./steps/StepH";
import StepI from "./steps/StepI";

export default function OrchardRegistration() {

  const [step, setStep] = useState(1);

 const schemas = [
  orchardSchema,           // Step A
  stepBBasicInfoSchema,    // Step B
  stepCSoilWaterSchema, 
  stepDCropNutritionSchema,
  stepEPlantProtectionSchema,
  stepFFarmInfrastructureSchema,
  stepGProductionMarketingSchema,
  stepHInputCostDetailsSchema,
  stepIOptionalFutureFieldsSchema
];


  const methods = useZodForm(schemas [step-1])

    const {
      control,
      handleSubmit,
      formState: { errors },
    } = methods;

  const steps = [
    "Basic Info",
    "Variety",
    "Soil & Water",
    "Crop Nutrition",
    "Plant Protection",
    "Infrastructure",
    "Production",
    "Input Cost",
    "Optional Fields",
  ];

  const handleNext = () => {
    handleSubmit(() => {
      if (step < steps.length) {
        setStep(step + 1);
      } else {
        console.log("FINAL SUBMIT:", methods.getValues());
        router.push("/");
      }
    })();
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <FormProvider {...methods}>
      <ScrollView className="flex-1 bg-light w-full">

        {/* STEP INDICATOR */}
        <View className="flex-row justify-between py-5">
          {steps.map((label, index) => {
            const stepNumber = index + 1;
            return (
              <View key={stepNumber} className="items-center flex-1">
                <View
                  className={`
                    w-8 h-8 rounded-full items-center justify-center
                    ${step >= stepNumber ? "bg-primary" : "bg-neutral"}
                  `}
                >
                  <Text className="text-light font-bold text-base">
                    {stepNumber}
                  </Text>
                </View>

                <Text
                  className={`
                    mt-2 text-[10px] font-medium text-center
                    ${step >= stepNumber ? "text-primary font-bold" : "text-neutral"}
                  `}
                >
                  {label}
                </Text>
              </View>
            );
          })}
        </View>

        {/* STEP CONTENT */}
        <View>
          {step === 1 && <StepA control= {control} errors={errors}/>}
          {step === 2 && <StepB control= {control} errors={errors} />}
          {step === 3 && <StepC control= {control} errors={errors}/>}
          {step === 4 && <StepD control= {control} errors={errors}/>}
          {step === 5 && <StepE control= {control} errors={errors} />}
          {step === 6 && <StepF control= {control} errors={errors}/>}
          {step === 7 && <StepG control= {control} errors={errors}/>}
          {step === 8 && <StepH control= {control} errors={errors} />}
          {step === 9 && <StepI control= {control} errors={errors}/>}
        </View>

        {/* NAVIGATION BUTTONS */}
        <View className="flex-row justify-between p-4">

          {step > 1 && (
            <TouchableOpacity
              onPress={handleBack}
              className="flex-1 mr-2 bg-dark-hover py-3 rounded-lg border border-dark items-center justify-center"
            >
              <Text className="text-dark text-base font-bold">Back</Text>
            </TouchableOpacity>
          )}

          <TouchableOpacity
            onPress={handleNext}
            className={`
              bg-primary py-3 rounded-md items-center justify-center
              ${step === 1 ? "flex-1" : "flex-1 ml-2"}
            `}
          >
            <Text className="text-light text-base font-bold">
              {step < steps.length ? "Next" : "Submit"}
            </Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </FormProvider>
  );
}
