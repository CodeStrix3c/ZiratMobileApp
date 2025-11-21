import React, { useState } from "react";
import BottomSheetWrapper from "../components/BottomSheetWrapper";
import InputField from "../components/InputField";
import SubmitButton from "../components/SubmitButton";

import { useAuth } from "@/src/contexts/AuthContext";
import {
  useProfessionQuery,
  useProfessionUpdateMutation,
} from "@/src/hooks/useUserProfileMutation";

export default function EditProfessionForm({ onClose }) {
  const { userProfileId } = useAuth();

  const { data: professionData, refetch } = useProfessionQuery(userProfileId);
  const { mutateAsync: updateProfessionApi } = useProfessionUpdateMutation();

  const [form, setForm] = useState({
    profileId: userProfileId,
    professionType: professionData?.professionType || "",
    organizationName: professionData?.organizationName || "",
    designation: professionData?.designation || "",
    experienceYears: professionData?.experienceYears?.toString() || "",
    skills: professionData?.skills || "",
  });

  const submit = async () => {
    await updateProfessionApi(form);
    alert("Profession Updated!");
    refetch();
    onClose();
  };

  return (
    <BottomSheetWrapper title="Edit Profession" onClose={onClose}>
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

      <SubmitButton title="Update Profession" onPress={submit} />
    </BottomSheetWrapper>
  );
}
