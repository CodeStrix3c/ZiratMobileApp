import { z } from "zod";

export const vendorBusinessSchema = z.object({
  shopName: z.string().min(1, "Shop/Business name is required"),
  ownerName: z.string().min(1, "Owner name is required"),
  primaryPhone: z.string().min(10, "Invalid phone"),
  alternatePhone: z.string().optional(),
  email: z.string().email().optional(),
  village: z.string().min(1),
  tehsil: z.string().min(1),
  district: z.string().min(1),
  state: z.string().min(1),
  pincode: z.string().min(6, "Invalid pincode"),
  gpsLocation: z.string().optional(), // lat,long
});

export const licensingComplianceSchema = z.object({
  dealerLicenseNumber: z.string().min(1, "Required Field"),

  licenseValidityStart: z
    .string()
    .min(1, "License validity start date is required"),

  licenseValidityEnd: z.string().min(1, "License expiry date is required"),

  licenseCopy: z
    .object({
      uri: z.string(),
      name: z.string(),
      size: z.number().optional(),
      mimeType: z.string().optional(),
    })
    .nullable()
    .refine((file) => !!file, "License copy is required")
    .refine(
      (file) =>
        !file ||
        ["application/pdf", "image/jpeg", "image/png"].includes(file?.mimeType),
      "Only PDF or JPEG/PNG files are allowed"
    ),

  gstNumber: z
    .string()
    .optional()
    .refine(
      (val) => !val || val.trim() === "" || /^[0-9]{15}$/.test(val),
      "GST must be a valid 15-digit number"
    ),

  pan: z
    .string()
    .optional()
    .refine(
      (val) =>
        !val || val.trim() === "" || /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(val),
      "Invalid PAN format (e.g., ABCDE1234F)"
    ),
});

export const vendorProductSchema = z.object({
  inputsSold: z.preprocess(
    (val) => val ?? [],
    z.array(z.string()).nonempty("Select at least one input")
  ),

  majorBrands: z.string().min(1, "Major brands stocked are required"),

  storageCapacity: z.string().optional(),

  otherInputs: z
    .array(
      z.object({
        name: z.string().min(1, "Input name is required"),

        stock: z.preprocess(
          (val) => (val === "" || val === null ? undefined : Number(val)),
          z
            .number({ invalid_type_error: "Enter stock as a number" })
            .positive("Stock must be greater than 0") // 👈 positive = > 0
        ),
      })
    )
    .default([]),
});

export const operationalDetailsSchema = z
  .object({
    yearsInBusiness: z.coerce
      .number({ invalid_type_error: "Enter a number" })
      .min(1, "Years in business is required"),

    distributorTieUps: z.string().min(1, "This field is required"),

    deliveryService: z.preprocess(
      (val) => (val === undefined || val === null ? "" : val),
      z.string().nonempty("Delivery Service selection is required")
    ),

    serviceArea: z.preprocess(
      (val) => (val === undefined || val === null ? [] : val),
      z.array(z.string())
    ),

    averageMonthlySales: z.coerce
      .number({ invalid_type_error: "Enter a number" })
      .optional(),
  })
  .superRefine((data, ctx) => {
    if (
      data.deliveryService === "yes" &&
      (!data.serviceArea || data.serviceArea.length === 0)
    ) {
      ctx.addIssue({
        path: ["serviceArea"],
        code: "custom", // Use string literal instead of ZodIssueCode.custom
        message: "Service Area is required if delivery service is available",
      });
    }
  });

export const financialPaymentSchema = z
  .object({
    sellingViaZiraat: z.boolean(),
    bankDetails: z
      .object({
        accountHolder: z.string().min(1, "Account Holder Name is required"),
        accountNumber: z
          .string()
          .regex(/^[0-9]{9,18}$/, "Enter a valid Account Number"),
        ifsc: z
          .string()
          .regex(/^[A-Z]{4}0[A-Z0-9]{6}$/, "Enter a valid IFSC Code"),
        bankName: z.string().min(1, "Bank Name is required"),
        branchName: z.string().min(1, "Branch Name is required"),
      })
      .optional(),

    upiAvailable: z.preprocess(
      (val) => (val === undefined || val === null ? "" : val),
      z.string().nonempty("Select if UPI/Digital Payment is available")
    ),
    creditFacility: z.preprocess(
      (val) => (val === undefined || val === null ? "" : val),
      z.string().nonempty("Select if Credit Facility is available")
    ),
  })
  .superRefine((data, ctx) => {
    if (data.sellingViaZiraat) {
      if (!data.bankDetails) {
        ctx.addIssue({
          path: ["bankDetails"],
          code: "custom",
          message: "Bank details are required if selling via ZIRAAT",
        });
      } else {
        // Check each field in bankDetails
        for (const key of [
          "accountHolder",
          "accountNumber",
          "ifsc",
          "bankName",
          "branchName",
        ]) {
          if (
            !data.bankDetails[key] ||
            (typeof data.bankDetails[key] === "string" &&
              data.bankDetails[key].trim() === "")
          ) {
            ctx.addIssue({
              path: ["bankDetails", key],
              code: "custom",
              message: `${key
                .replace(/([A-Z])/g, " $1")
                .replace(/^./, (str) => str.toUpperCase())} is required`,
            });
          }
        }
      }
    }
  });

export const supportServicesSchema = z
  .object({
    advisorySupport: z.preprocess(
      (val) => (val === undefined || val === null ? "" : val),
      z.string().nonempty("Agronomy Advisory Support is required")
    ),
    fieldStaffAvailable: z.preprocess(
      (val) => (val === undefined || val === null ? "" : val),
      z.string().nonempty("Field Staff availability is required")
    ),
    fieldStaffCount: z
      .union([z.string(), z.number()])
      .optional()
      .refine(
        (val) => val === undefined || val === "" || !isNaN(Number(val)),
        "Field staff count must be a number"
      ),
    afterSalesService: z
      .string()
      .min(1, "After-Sales Service details are required"),
    deliveryRange: z
      .string()
      .min(1, "Delivery area range is required")
      .regex(/^\d+$/, "Delivery range must be a number"),
    computerAvailable: z.preprocess(
      (val) => (val === undefined || val === null ? "" : val),
      z.string().nonempty("Computer/Laptop availability is required")
    ),
    vehicleAvailable: z.preprocess(
      (val) => (val === undefined || val === null ? "" : val),
      z.string().nonempty("Vehicle availability is required")
    ),
  })
  .superRefine((data, ctx) => {
    if (data.fieldStaffAvailable === "yes") {
      if (
        data.fieldStaffCount === undefined ||
        data.fieldStaffCount === "" ||
        isNaN(Number(data.fieldStaffCount))
      ) {
        ctx.addIssue({
          path: ["fieldStaffCount"],
          code: "custom",
          message: "Number of Field Staff is required",
        });
      }
    }
  });
