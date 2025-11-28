import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderBar from "../components/shared/HeaderBar";


import DeliveryHeaderCard from "../modules/vendor/components/delivery/DeliveryHeaderCard";

import DeliveryOrderAssignment from "../modules/vendor/components/delivery/DeliveryOrderAssignment";
import DeliveryProof from "../modules/vendor/components/delivery/DeliveryProof";
import DeliveryRoute from "../modules/vendor/components/delivery/DeliveryRoute";

const theme = {
  primary: "#2d6b06",
  primaryDark: "#245805",
  secondary: "#c7611f",
  secondaryDark: "#a64f18",
  danger: "#d11a2a",
  muted: "#6b7280",
  bg: "#f3f4f6",
};

export default function DeliveryScreen() {
  const deliveryOrder = {
    id: "ORD-86214",
    status: "Out for Delivery",
    route: [
      "Vendor Warehouse",
      "Stop 1 - Amit Sharma",
      "Return Route",
    ],
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <HeaderBar title="Delivery Management" icon="Settings" />

      <ScrollView className="px-4 py-4 pb-40">
        <DeliveryHeaderCard order={deliveryOrder} theme={theme} />
        <DeliveryOrderAssignment order={deliveryOrder} theme={theme} />
        <DeliveryRoute order={deliveryOrder} theme={theme} />
        <DeliveryProof theme={theme} />
      </ScrollView>
    </SafeAreaView>
  );
}
