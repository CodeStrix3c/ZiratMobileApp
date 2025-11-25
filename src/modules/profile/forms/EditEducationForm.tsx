import React, { useState } from "react";
import BottomSheetWrapper from "../components/BottomSheetWrapper";
import InputField from "../components/InputField";
import SubmitButton from "../components/SubmitButton";

import { useAuth } from "@/src/contexts/AuthContext";
import {
  useEducationQuery,
  useEducationUpdateMutation,
} from "@/src/hooks/userQueryHooks";

export default function EditEducationForm({ onClose }) {
  const { userProfileId } = useAuth();

  const { data: educationData, refetch } = useEducationQuery(userProfileId);
  const { mutateAsync: updateEducationApi } = useEducationUpdateMutation();

  const [form, setForm] = useState({
    profileId: userProfileId,
    highestQualification: educationData?.highestQualification || "",
    instituteName: educationData?.instituteName || "",
    passingYear: educationData?.passingYear?.toString() || "",
    specialization: educationData?.specialization || "",
  });

  const submit = async () => {
    await updateEducationApi(form);
    alert("Education Updated!");
    refetch();
    onClose();
  };

  return (
    <BottomSheetWrapper title="Edit Education" onClose={onClose}>
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

      <SubmitButton title="Update Education" onPress={submit} />
    </BottomSheetWrapper>
  );
}
