import React, { useState } from "react";
import BottomSheetWrapper from "../components/BottomSheetWrapper";
import InputField from "../components/InputField";
import SubmitButton from "../components/SubmitButton";

import { useAuth } from "@/src/contexts/AuthContext";
import {
  useProfileQuery,
  useProfileUpdateMutation,
} from "@/src/hooks/useUserProfileMutation";

export default function EditProfileForm({ onClose }) {
  const { userId, userProfileId } = useAuth();
  const { data: profileData, refetch } = useProfileQuery(userId);
  const { mutateAsync: updateProfileApi } = useProfileUpdateMutation();

  const [form, setForm] = useState({
    fullname: profileData?.fullName || "",
    email: profileData?.email || "",
    phone: profileData?.phone || "",
    age: profileData?.age?.toString() || "",
    gender: profileData?.gender || "",
    profilepic: profileData?.image || "",
    password: "",
    confirmpassword: "",
    profileId: userProfileId,
  });

  const submit = async () => {
    await updateProfileApi(form);
    alert("Profile Updated!");
    refetch();
    onClose();
  };

  return (
    <BottomSheetWrapper title="Edit Profile" onClose={onClose}>
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

      <SubmitButton title="Update" onPress={submit} />
    </BottomSheetWrapper>
  );
}
