import { Control, FieldErrors } from "react-hook-form";

export interface BusinessFormValues {
  businessName: string;
  ownerName: string;
  primaryContact: string;
  alternateContact?: string;
  email?: string;

  businessAddressVillage: string;
  businessAddressTehsil: string;
  businessAddressDistrict: string;
  businessAddressState: string;
  businessAddressPincode: string;
}

export interface BusinessSectionProps {
  control: Control<BusinessFormValues>;
  errors: FieldErrors<BusinessFormValues>;
}
