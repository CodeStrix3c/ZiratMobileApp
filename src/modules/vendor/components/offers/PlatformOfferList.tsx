import { View } from "react-native";
import { platformOffers } from "./MockOffer";
import OfferCard from "./OfferCard";

export default function PlatformOfferList() {
  return (
    <View>
      {platformOffers.map((item, index) => (
        <OfferCard key={index} item={item} type="platform" />
      ))}
    </View>
  );
}
