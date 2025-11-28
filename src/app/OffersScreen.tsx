
import { useState } from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import HeaderBar from "@/src/components/shared/HeaderBar";
import OffersTabs from "../modules/vendor/components/offers/OffersTabs";
import PlatformOfferList from "../modules/vendor/components/offers/PlatformOfferList";
import VendorOfferList from "../modules/vendor/components/offers/VendorOfferList";

export default function OffersScreen() {
  const [tab, setTab] = useState("vendor");

  return (
    <SafeAreaView className="flex-1 bg-white">
      <HeaderBar title="Offers" icon="pricetag" />

      <View className="px-4 mt-3">
        <OffersTabs tab={tab} setTab={setTab} />
      </View>

      <ScrollView className="px-4 mt-3" showsVerticalScrollIndicator={false}>
        {tab === "vendor" ? (
          <VendorOfferList />
        ) : (
          <PlatformOfferList />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
