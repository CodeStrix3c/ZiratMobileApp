import FormInput from "@/src/components/form/inputs/FormInput";
import SingleSelectInput from "@/src/components/form/inputs/SingleSelectInput";
import React, { useEffect } from "react";
import { Controller, useFormContext, useWatch } from "react-hook-form";
import { Text, TouchableOpacity, View } from "react-native";

export default function FinancialPaymentSection({ control, errors }) {
  const sellingViaZiraat = useWatch({
    control,
    name: "sellingViaZiraat",
    defaultValue: false,
  });

  const { setValue } = useFormContext();

  // Clear bank details when unchecked
  useEffect(() => {
    if (!sellingViaZiraat) {
      setValue("bankDetails", undefined, { shouldValidate: true });
    }
  }, [sellingViaZiraat]);

  return (
    <View style={{ padding: 20 }}>
      {/* PAYMENT OPTIONS */}
      <View
        style={{
          borderWidth: 1,
          borderColor: "#ddd",
          borderRadius: 10,
          padding: 15,
        }}
      >
        <SingleSelectInput
          control={control}
          name="upiAvailable"
          label="UPI / Digital Payment Options"
          options={[
            { value: "", label: "Select" },
            { value: "yes", label: "Yes" },
            { value: "no", label: "No" },
          ]}
          error={errors.upiAvailable}
        />

        <SingleSelectInput
          control={control}
          name="creditFacility"
          label="Credit Facility to Farmers"
          options={[
            { value: "", label: "Select" },
            { value: "yes", label: "Yes" },
            { value: "no", label: "No" },
          ]}
          error={errors.creditFacility}
        />
      </View>

      {/* ZIRAAT MARKETPLACE CHECKBOX */}
      <View
        style={{
          borderWidth: 1,
          borderColor: "#ddd",
          borderRadius: 10,
          padding: 15,
          marginTop: 20,
        }}
      >
        <Controller
          control={control}
          name="sellingViaZiraat"
          defaultValue={false}
          render={({ field }) => (
            <TouchableOpacity
              onPress={() => field.onChange(!field.value)}
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 10,
              }}
            >
              <View
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 3,
                  borderWidth: 2,
                  borderColor: "#4CAF50",
                  backgroundColor: field.value ? "#4CAF50" : "white",
                  marginRight: 10,
                }}
              />
              <Text style={{ fontSize: 16 }}>Sell at ZIRAAT Marketplace</Text>
            </TouchableOpacity>
          )}
        />

        <Text style={{ fontSize: 12, color: "#444", marginBottom: 10 }}>
          If you choose to sell via ZIRAAT, provide your bank details for
          payouts.
        </Text>

        {/* BANK DETAILS BLOCK */}
        {sellingViaZiraat && (
          <View style={{ marginTop: 10 }}>
            <FormInput
              control={control}
              name="bankDetails.accountHolder"
              label="Account Holder Name"
              error={errors.bankDetails?.accountHolder}
            />

            <FormInput
              control={control}
              name="bankDetails.accountNumber"
              label="Account Number"
              type="numeric"
              error={errors.bankDetails?.accountNumber}
            />

            <FormInput
              control={control}
              name="bankDetails.ifsc"
              label="IFSC Code"
              error={errors.bankDetails?.ifsc}
            />

            <FormInput
              control={control}
              name="bankDetails.bankName"
              label="Bank Name"
              error={errors.bankDetails?.bankName}
            />

            <FormInput
              control={control}
              name="bankDetails.branchName"
              label="Branch Name"
              error={errors.bankDetails?.branchName}
            />
          </View>
        )}
      </View>
    </View>
  );
}
