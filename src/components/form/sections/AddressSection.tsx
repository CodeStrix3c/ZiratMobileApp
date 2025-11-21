//@ts-nocheck
import * as Location from "expo-location";
import React, { useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import FormInput from "../inputs/FormInput";
import SingleSelectInput from "../inputs/SingleSelectInput";

interface Props {
  control: any;
  errors: any;
}

export default function AddressSection({ control, errors }: Props) {
  const [coords, setCoords] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchLocation() {
    try {
      setLoading(true);

      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        alert("Permission denied");
        return;
      }

      const loc = await Location.getCurrentPositionAsync({});
      setCoords({
        latitude: loc.coords.latitude,
        longitude: loc.coords.longitude,
      });
    } catch (err) {
      console.log("GPS error", err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      {/* State */}
      <SingleSelectInput
        control={control}
        name="state"
        label="State"
        options={[
          { label: "Jammu & Kashmir", value: "jammu_kashmir" },
          { label: "Ladakh", value: "ladakh" },
          { label: "Punjab", value: "punjab" },
          { label: "Haryana", value: "haryana" },
        ]}
        error={errors.state}
      />

      {/* District */}
      <SingleSelectInput
        control={control}
        name="district"
        label="District"
        options={[
          { label: "Srinagar", value: "srinagar" },
          { label: "Jammu", value: "jammu" },
          { label: "Leh", value: "leh" },
          { label: "Amritsar", value: "amritsar" },
          { label: "Ludhiana", value: "ludhiana" },
        ]}
        error={errors.district}
      />

      {/* Tehsil */}
      <SingleSelectInput
        control={control}
        name="tehsil"
        label="Tehsil"
        options={[
          { label: "Tehsil A", value: "tehsil_a" },
          { label: "Tehsil B", value: "tehsil_b" },
          { label: "Tehsil C", value: "tehsil_c" },
          { label: "Tehsil D", value: "tehsil_d" },
        ]}
        error={errors.tehsil}
      />
      <FormInput
        control={control}
        name="village"
        label="Village"
        error={errors.village}
      />

      {/* Pincode */}
      <FormInput
        control={control}
        name="pincode"
        label="Pin Code"
        keyboardType="numeric"
        error={errors.pincode}
      />

      {/* Street */}
      <FormInput
        control={control}
        name="street"
        label="Street / Locality"
        error={errors.street}
      />

      {/* GPS Button */}
      <Button
        title={loading ? "Fetching Location..." : "Use Current Location"}
        onPress={fetchLocation}
      />

      {/* GPS Value */}
      {coords && (
        <View style={{ marginTop: 10 }}>
          <FormInput
            control={control}
            name="gps"
            label="GPS Location"
            value={`${coords.latitude}, ${coords.longitude}`}
            editable={false}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 12,
  },
});
