import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { ZodType } from "zod";

import { useForm, UseFormProps } from "react-hook-form";

// export function useZodForm<T extends ZodType<any>>(schema: T) {
//   return useForm({ resolver: zodResolver(schema) });
// }
export function useZodForm<T extends ZodType<any>>(
  schema: T,
  options?: Partial<UseFormProps<any>>
) {
  return useForm({
    resolver: zodResolver(schema),

    mode: "onSubmit",          // ❗ errors appear only after submit
    reValidateMode: "onChange", // ❗ errors disappear while typing

    ...options,
  });
}

