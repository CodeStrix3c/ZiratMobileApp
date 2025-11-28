import React from "react";
import { View } from "react-native";
import MapView from "react-native-maps";

export default function PrecipitationMap() {
    return (
        <View className="h-44 w-full rounded-xl overflow-hidden border border-gray-300">
            <MapView
                style={{ flex: 1 }}
                initialRegion={{
                    latitude: 34.083656,
                    longitude: 74.797371,
                    latitudeDelta: 0.5,
                    longitudeDelta: 0.5,
                }}
            />
        </View>
    );
}
