import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { Button, ScrollView, Text, View } from "react-native";

import FinancialSection from "./sections/FinancialSection";
import LicenseSection from "./sections/LicenseSection";
import OperationalSection from "./sections/OperationalSection";
import ProductSection from "./sections/ProductSection";
import SupportSection from "./sections/SupportSection";

// Queries & Mutations
import {
  useVendorFinancialMutation,
  useVendorFinancialQuery,
  useVendorLicenseMutation,
  useVendorLicenseQuery,
  useVendorOperationsMutation,
  useVendorOperationsQuery,
  useVendorProductsMutation,
  useVendorProductsQuery,
  useVendorSupportMutation,
  useVendorSupportQuery,
} from "@/src/hooks/vendorQueryHooks";

// Schemas
import { useAuth } from "@/src/contexts/AuthContext";
import { financialPaymentSchema } from "@/src/schemas/vendor/finance.schema";
import { licensingComplianceSchema } from "@/src/schemas/vendor/licensing.schema";
import { operationalDetailsSchema } from "@/src/schemas/vendor/operations.schema";
import { productPortfolioSchema } from "@/src/schemas/vendor/products.schema";
import { supportServicesSchema } from "@/src/schemas/vendor/support.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

export default function VendorProfileCompletionScreen() {
  const { section } = useLocalSearchParams();
  const { vendorId } = useAuth();

  const sectionMap = {
    license: 0,
    products: 1,
    operations: 2,
    financial: 3,
    support: 4,
  };

  const initialStep = sectionMap[section as string] ?? 0;
  const [step, setStep] = useState(initialStep);

  // -------------------------------
  // 🔍 Queries (FETCH EXISTING DATA)
  // -------------------------------
  const { data: licenseData } = useVendorLicenseQuery(vendorId);
  const { data: productsData } = useVendorProductsQuery(vendorId);
  const { data: operationsData } = useVendorOperationsQuery(vendorId);
  const { data: financialData } = useVendorFinancialQuery(vendorId);
  const { data: supportData } = useVendorSupportQuery(vendorId);

  // -------------------------------
  // 💾 Mutations (SAVE)
  // -------------------------------
  const { mutateAsync: saveLicense } = useVendorLicenseMutation();
  const { mutateAsync: saveProducts } = useVendorProductsMutation();
  const { mutateAsync: saveOperations } = useVendorOperationsMutation();
  const { mutateAsync: saveFinancial } = useVendorFinancialMutation();
  const { mutateAsync: saveSupport } = useVendorSupportMutation();

  // -------------------------------
  // 📌 Step Schemas
  // -------------------------------
  const schemas = [
    licensingComplianceSchema,
    productPortfolioSchema,
    operationalDetailsSchema,
    financialPaymentSchema,
    supportServicesSchema,
  ];

  const methods = useForm({
    resolver: zodResolver(schemas[step]),
    mode: "onChange",
  });

  const {
    handleSubmit,
    trigger,
    control,
    formState: { errors },
  } = methods;

  // -------------------------------
  // 🔄 PRE-FILL ON SCREEN LOAD
  // -------------------------------
  useEffect(() => {
    const prefillMap = {
      0: licenseData,
      1: productsData,
      2: operationsData,
      3: financialData,
      4: supportData,
    };

    const currentData = prefillMap[step];
    if (currentData) {
      Object.entries(currentData).forEach(([key, value]) =>
        setValue(key, value)
      );
    }
  }, [
    step,
    licenseData,
    productsData,
    operationsData,
    financialData,
    supportData,
  ]);

  // -------------------------------
  // 🧩 Step Submit Handler
  // -------------------------------
  const handleStepSubmit = async (values: any) => {
    setStep(step + 1);
    // try {
    //   if (step === 0) {
    //     await saveLicense({ ...values, vendorId });
    //     return setStep(1);
    //   }
    //   if (step === 1) {
    //     await saveProducts({ ...values, vendorId });
    //     return setStep(2);
    //   }
    //   if (step === 2) {
    //     await saveOperations({ ...values, vendorId });
    //     return setStep(3);
    //   }
    //   if (step === 3) {
    //     await saveFinancial({ ...values, vendorId });
    //     return setStep(4);
    //   }
    //   if (step === 4) {
    //     await saveSupport({ ...values, vendorId });
    //     Alert.alert("Success", "Vendor profile completed!");
    //     return router.back();
    //   }
    // } catch (err: any) {
    //   Alert.alert(
    //     "Error",
    //     err?.response?.data?.message || "Something went wrong"
    //   );
    // }
  };

  return (
    <FormProvider {...methods}>
      <ScrollView style={{ flex: 1, padding: 20 }}>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>
          Vendor Profile Completion
        </Text>
        <Text style={{ marginBottom: 12 }}>Step {step + 1} of 5</Text>

        {step === 0 && (
          <LicenseSection
            control={control}
            errors={errors}
            data={licenseData}
          />
        )}
        {step === 1 && (
          <ProductSection
            control={control}
            errors={errors}
            data={productsData}
          />
        )}
        {step === 2 && (
          <OperationalSection
            control={control}
            errors={errors}
            data={operationsData}
          />
        )}
        {step === 3 && (
          <FinancialSection
            control={control}
            errors={errors}
            data={financialData}
          />
        )}
        {step === 4 && (
          <SupportSection
            control={control}
            errors={errors}
            data={supportData}
          />
        )}

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 30,
          }}
        >
          {step > 0 && (
            <Button title="Back" onPress={() => setStep((prev) => prev - 1)} />
          )}

          <Button
            title={step === 4 ? "Save" : "Next"}
            onPress={handleSubmit(handleStepSubmit)}
          />
        </View>
      </ScrollView>
    </FormProvider>
  );
}
