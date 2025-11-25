import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

import {
  financialPaymentSchema,
  licensingComplianceSchema,
  operationalDetailsSchema,
  supportServicesSchema,
  vendorProductSchema,
} from "@/src/schemas/vendorRegistrationSchema";

import FinancialSection from "./sections/FinancialSection";
import LicenseSection from "./sections/LicenseSection";
import OperationalSection from "./sections/OperationalSection";
import ProductSection from "./sections/ProductSection";
import SupportSection from "./sections/SupportSection";

export default function VendorProfileCompletionScreen() {
  const [step, setStep] = useState(4);

  const schemas = [
    licensingComplianceSchema,
    vendorProductSchema,
    operationalDetailsSchema,
    financialPaymentSchema,
    supportServicesSchema,
  ];

  const methods = useForm({
    resolver: zodResolver(schemas[step]),
    defaultValues: {},
  });

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = methods;

  console.log(errors, "errors....+++");

  const steps = [
    "Licensing",
    "Product Portfolio",
    "Operational Info",
    "Financial Info",
    "Support & Services",
  ];

  const renderSection = () => {
    switch (step) {
      case 0:
        return <LicenseSection control={control} errors={errors} />;
      case 1:
        return <ProductSection control={control} errors={errors} />;
      case 2:
        return <OperationalSection control={control} errors={errors} />;
      case 3:
        return <FinancialSection control={control} errors={errors} />;
      case 4:
        return <SupportSection control={control} errors={errors} />;
      default:
        return null;
    }
  };

  const onSubmit = (data) => {
    if (step < 4) {
      setStep(step + 1);
      return;
    }
    console.log("FINAL VENDOR PROFILE SUBMISSION:", data);
  };

  return (
    <FormProvider {...methods}>
      <ScrollView>
        <View style={{ flex: 1 }}>
          {/* HEADER */}
          <View style={{ padding: 20, backgroundColor: "#ffffff" }}>
            <Text style={{ fontSize: 22, fontWeight: "700" }}>
              Vendor Profile Completion
            </Text>

            <Text style={{ marginTop: 6, color: "#666" }}>
              Step {step + 1} of {steps.length}: {steps[step]}
            </Text>

            {/* PROGRESS BAR */}
            <View
              style={{
                marginTop: 14,
                height: 6,
                backgroundColor: "#e5e5e5",
                borderRadius: 10,
                overflow: "hidden",
              }}
            >
              <View
                style={{
                  width: `${((step + 1) / steps.length) * 100}%`,
                  height: "100%",
                  backgroundColor: "#4CAF50",
                }}
              />
            </View>
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
            {renderSection()}
          </ScrollView>

          {/* BUTTONS */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 20,
            }}
          >
            {step > 0 ? (
              <TouchableOpacity
                onPress={() => setStep(step - 1)}
                style={{
                  backgroundColor: "#ddd",
                  paddingVertical: 12,
                  paddingHorizontal: 20,
                  borderRadius: 10,
                }}
              >
                <Text>Back</Text>
              </TouchableOpacity>
            ) : (
              <View />
            )}

            <TouchableOpacity
              onPress={methods.handleSubmit(onSubmit)}
              style={{
                backgroundColor: "#4CAF50",
                paddingVertical: 12,
                paddingHorizontal: 20,
                borderRadius: 10,
              }}
            >
              <Text style={{ color: "white", fontWeight: "600" }}>
                {step === steps.length - 1 ? "Submit" : "Next"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </FormProvider>
  );
}
