import { colors } from "@/src/constants/colors";
import { Text, TouchableOpacity, View } from "react-native";
import { vendorOffers } from "./MockOffer";
import OfferCard from "./OfferCard";

export default function VendorOfferList() {
  return (
    <View>
      {vendorOffers.map((item, index) => (
        <OfferCard key={index} item={item} type="vendor" />
      ))}

      {/* CTA */}
      <TouchableOpacity
        className="py-4 rounded-2xl mt-5"
        style={{ backgroundColor: colors.primary }}
      >
        <Text className="text-center text-white font-bold text-lg">
          + Create New Offer
        </Text>
      </TouchableOpacity>
    </View>
  );
}
