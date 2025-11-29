import { Control, FieldErrors, UseFormSetValue } from "react-hook-form";

export interface FormSectionProps {
  control: Control<any>;
  errors: FieldErrors<any>;
  data?: any;
  setValue?: UseFormSetValue<any>;
}