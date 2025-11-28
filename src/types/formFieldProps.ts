// src/types/FormFieldProps.ts

import { Control, FieldError } from "react-hook-form";
import { KeyboardTypeOptions } from "react-native";

export interface FormFieldProps {
  // Required for all fields
  control: Control<any>;
  name: string;
  label: string;

  // Validation
  error?: FieldError | string | any;
  optional?: boolean;

  // Input-specific (text, email, phone, password, number)
  type?: string;
  keyboardType?: KeyboardTypeOptions;
  defaultValue?: any;

  // Select-specific
  options?: { label: string; value: string }[];

  // Multi-select-specific
  multiple?: boolean;

  // File input-specific
  accept?: string[];
  maxFiles?: number;

  // Chip / Tag input
  placeholder?: string;

  // Date input-specific
  mode?: "date" | "time" | "datetime";

  // Allow all other props
  [key: string]: any;
}
