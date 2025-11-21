import React, { useState } from "react";
import BottomSheetWrapper from "../components/BottomSheetWrapper";
import InputField from "../components/InputField";
import SubmitButton from "../components/SubmitButton";

import { useAuth } from "@/src/contexts/AuthContext";
import {
  useAddressQuery,
  useAddressUpdateMutation,
} from "@/src/hooks/useUserProfileMutation";

export default function EditAddressForm({ onClose }) {
  const { userProfileId } = useAuth();
  const { data: addressData, refetch } = useAddressQuery(userProfileId);
  const { mutateAsync: updateAddressApi } = useAddressUpdateMutation();

  const [form, setForm] = useState({
    profileId: userProfileId,
    village: addressData?.village || "",
    tehsil: addressData?.tehsil || "",
    district: addressData?.district || "",
    state: addressData?.state || "",
    pincode: addressData?.pincode || "",
    gps: addressData?.gps || "",
  });

  const submit = async () => {
    await updateAddressApi(form);
    alert("Address Updated!");
    refetch();
    onClose();
  };

  return (
    <BottomSheetWrapper title="Edit Address" onClose={onClose}>
      {Object.keys(form)
        .filter((k) => k !== "profileId")
        .map((key) => (
          <InputField
            key={key}
            label={key}
            value={form[key]}
            onChange={(t) => setForm({ ...form, [key]: t })}
          />
        ))}
      <SubmitButton title="Update Address" onPress={submit} />
    </BottomSheetWrapper>
  );
}
