import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Sidebar({ navigation }) {
    const [open, setOpen] = useState(false);

    const menu = [
        { title: "Orchard Profile & Productivity", screen: "Orchard" },
        { title: "Weather & Climate", screen: "Weather" },
        { title: "Soil, Water & Nutrient Management", screen: "SoilWater" },
        { title: "Pest & Disease Management", screen: "PestDisease" },
        { title: "Input & Resource Usage", screen: "InputResource" },
        { title: "Financial & Yield Performance", screen: "FinancialYield" },
        { title: "Knowledge & Advisory Engagement", screen: "Advisory" },
        { title: "Alerts & Notifications Tracking", screen: "Alerts" },
    ];

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => setOpen(!open)}>
                <Text style={styles.header}>Farmer Dashboard {open ? "▲" : "▼"}</Text>
            </TouchableOpacity>

            {open && menu.map((item, index) => (
                <TouchableOpacity
                    key={index}
                    onPress={() => navigation.navigate(item.screen)}
                >
                    <Text style={styles.subItem}>{item.title}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { padding: 15 },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingVertical: 10,
    },
    subItem: {
        paddingLeft: 20,
        paddingVertical: 8,
        fontSize: 16,
    },
});
