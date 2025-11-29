import { z } from "zod";

export const productPortfolioSchema = z.object({
  inputsSold: z.preprocess(
    (val) => val ?? [],
    z.array(z.string()).nonempty("Select at least one input")
  ),

  majorBrands: z.string().min(1, "Major brands stocked are required"),

  otherInputs: z.preprocess(
    (val) => {
      if (!Array.isArray(val)) return [];
      return val.filter(
        (item) =>
          item && (item.name?.trim()?.length || item.stock?.toString()?.length)
      );
    },
    z.array(
      z.object({
        name: z.string().min(1, "Input name is required"),
        stock: z
          .number({ invalid_type_error: "Enter stock as a number" })
          .min(0, "Stock cannot be negative"),
      })
    )
  ),

  storageCapacity: z.string().optional(),
});
