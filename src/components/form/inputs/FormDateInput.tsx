import React, { useState } from "react";
import { Controller } from "react-hook-form";
import { Platform, TouchableOpacity, View } from "react-native";
import DatePicker from "react-native-date-picker";
import { HelperText, TextInput } from "react-native-paper";

export default function FormDateInput({
  control,
  name,
  label,
  optional = false,
  error,
}) {
  const [open, setOpen] = useState(false);
  const isWeb = Platform.OS === "web";

  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, value },
        fieldState: { error: fieldError },
      }) => {
        const showError = !!(fieldError || error);

        return (
          <View style={{ marginBottom: 20 }}>
            {/* 🌐 WEB VERSION (MUI-like floating label) */}
            {isWeb ? (
              <div style={{ display: "flex", flexDirection: "column" }}>
                {/* Floating Label */}
                <label
                  style={{
                    fontSize: 13,
                    marginBottom: 4,
                    color: showError ? "red" : "#444",
                    fontWeight: optional ? "400" : "500",
                  }}
                >
                  {label} {!optional && <span style={{ color: "red" }}>*</span>}
                </label>

                <input
                  type="date"
                  value={value ? value.split("T")[0] : ""}
                  onChange={(e) => {
                    const val = e.target.value;

                    if (!val) {
                      onChange(null);
                      return;
                    }

                    const date = new Date(val);
                    onChange(date.toISOString());
                  }}
                  style={{
                    padding: 12,
                    borderWidth: 1,
                    borderRadius: 6,
                    borderColor: showError ? "red" : "#ccc",
                    width: "100%",
                    outline: "none",
                    fontSize: 15,
                  }}
                />

                {showError && (
                  <span style={{ fontSize: 12, color: "red", marginTop: 4 }}>
                    {(fieldError || error)?.message}
                  </span>
                )}
              </div>
            ) : (
              <>
                {/* 📱 MOBILE VERSION (react-native-paper floating label) */}
                <TouchableOpacity onPress={() => setOpen(true)}>
                  <TextInput
                    mode="outlined"
                    label={optional ? `${label} (Optional)` : `${label} *`}
                    value={value ? new Date(value).toDateString() : ""}
                    editable={false}
                    right={<TextInput.Icon icon="calendar" />}
                    error={showError}
                  />
                </TouchableOpacity>

                <DatePicker
                  modal
                  mode="date"
                  open={open}
                  date={value ? new Date(value) : new Date()}
                  onConfirm={(date) => {
                    setOpen(false);
                    onChange(date.toISOString());
                  }}
                  onCancel={() => setOpen(false)}
                />
              </>
            )}

            {/* Error for mobile (Paper already shows built-in error styling) */}
            {!isWeb && showError && (
              <HelperText type="error" visible>
                {(fieldError || error)?.message}
              </HelperText>
            )}
          </View>
        );
      }}
    />
  );
}
