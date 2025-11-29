import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export function CustomDrawer(props) {
    const [vendorOpen, setVendorOpen] = useState(false);

    return (
        <DrawerContentScrollView {...props}>


            <DrawerItemList {...props} />


            <TouchableOpacity
                style={styles.header}
                onPress={() => setVendorOpen(!vendorOpen)}
            >
                <Text style={styles.headerText}>
                    Farmer Dashboard {vendorOpen ? "▲" : "▼"}
                </Text>
            </TouchableOpacity>

            {vendorOpen && (
                <View style={styles.subMenu}>
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate("OrchardScreen")}
                    >
                        <Text style={styles.item}>Orchard Profile</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => props.navigation.navigate("WeatherScreen")}
                    >
                        <Text style={styles.item}>Weather & Climate</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => props.navigation.navigate("NutrientScreen")}
                    >
                        <Text style={styles.item}>Nutrient Management</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => props.navigation.navigate("PestDiseaseScreen")}
                    >
                        <Text style={styles.item}>Pest & Disease Management</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => props.navigation.navigate("ResourcesScreen")}
                    >
                        <Text style={styles.item}>Resources Usage</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => props.navigation.navigate("FinancialScreen")}
                    >
                        <Text style={styles.item}>Financial Management</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => props.navigation.navigate("AdvisoryScreen")}
                    >
                        <Text style={styles.item}>Advisory Services</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => props.navigation.navigate("AlertScreen")}
                    >
                        <Text style={styles.item}>Alert Notifications</Text>
                    </TouchableOpacity>
                </View>
            )}
        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    headerText: {
        fontSize: 16,
        fontWeight: "600",
    },
    subMenu: {
        paddingLeft: 35,
    },
    item: {
        paddingVertical: 8,
        fontSize: 15,
    },
});
