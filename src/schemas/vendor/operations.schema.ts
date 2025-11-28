import z from "zod";

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
      z.array(
        z.object({
          name: z.string().min(1, "Area name is required"),
        })
      )
    ),
    averageMonthlySales: z.coerce
      .number({ invalid_type_error: "Enter a number" })
      .optional(),
  })
  .superRefine((data, ctx) => {
    if (data.deliveryService === "yes" && data.serviceArea.length === 0) {
      ctx.addIssue({
        path: ["serviceArea"],
        code: z.ZodIssueCode.custom,
        message: "At least one service area is required",
      });
    }
  });
