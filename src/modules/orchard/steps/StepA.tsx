import FormInput from "@/src/components/form/inputs/FormInput";
import { ScrollView, Text, View } from "react-native";

export default function StepA_BasicInfo({control, errors}) {
  

  const fields = [
    { name: "orchardName", label: "Orchard Name", icon: "account" },
    { name: "orchardSize", label: "Orchard Size (Kanals & Marlas)", icon: "square" },
    { name: "establishmentYear", label: "Establishment Year", icon: "calendar" },
    { name: "plantationPattern", label: "Plantation Pattern", icon: "tree" },
    { name: "ownershipType", label: "Ownership Type", icon: "home" },
    { name: "district", label: "District", icon: "map" },
    { name: "tehsil", label: "Tehsil", icon: "map-marker" },
    { name: "zone", label: "Zone", icon: "map-marker-radius" },
    { name: "pincode", label: "PIN Code", icon: "numeric" },
    { name: "latitude", label: "Latitude", icon: "crosshairs-gps" },
    { name: "longitude", label: "Longitude", icon: "crosshairs" },
  ];

  return (
    <ScrollView className="flex-1 w-full">

      <Text className="text-2xl font-bold mb-4 text-center text-primary">
        Orchard Registration
      </Text>

      <View className="bg-light rounded-2xl px-4 shadow-md shadow-neutral w-full">
        <Text className="text-lg font-semibold mb-3 text-primary">
          Basic / Mandatory Information
        </Text>

        {fields.map((field) => (
          <FormInput
            key={field.name}
            control={control}
            name={field.name}
            label={field.label}
            icon={field.icon}
            iconColor="secondary"
            iconSize={20}
            errors={errors}
          />
        ))}

      </View>
    </ScrollView>
  );
}
