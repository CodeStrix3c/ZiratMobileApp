import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export function CustomDrawer(props) {
  const [vendorOpen, setVendorOpen] = useState(false);

  return (
    <DrawerContentScrollView {...props}>
      
    
      <DrawerItemList {...props} />

      {/* --- VENDOR DROPDOWN --- */}
      <TouchableOpacity
        style={styles.header}
        onPress={() => setVendorOpen(!vendorOpen)}
      >
        <Text style={styles.headerText}>
          Vendor Dashboard {vendorOpen ? "▲" : "▼"}
        </Text>
      </TouchableOpacity>

      {vendorOpen && (
        <View style={styles.subMenu}>
         

          <TouchableOpacity
            onPress={() => props.navigation.navigate("ProfileScreen")}
          >
            <Text style={styles.item}>• Profile</Text>
          </TouchableOpacity>
         <TouchableOpacity
            onPress={() => props.navigation.navigate("ProductsScreen")}
          >
            <Text style={styles.item}>• Products</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("SalesScreen")}
          >
            <Text style={styles.item}>• Sales</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.navigate("CreditScreen")}
          >
            <Text style={styles.item}>• Credit</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.navigate("PlatformScreen")}
          >
            <Text style={styles.item}>• Platform</Text>
          </TouchableOpacity>
            <TouchableOpacity
            onPress={() => props.navigation.navigate("DeliveryScreen")}
          >
            <Text style={styles.item}>• Delivery</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.navigate("FinancialScreen")}
          >
            <Text style={styles.item}>• Financial</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.navigate("OffersScreen")}
          >
            <Text style={styles.item}>• Offers</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.navigate("NotificationScreen")}
          >
            <Text style={styles.item}>• Notification</Text>
          </TouchableOpacity>

           <TouchableOpacity
            onPress={() => props.navigation.navigate("ReportsScreen")}
          >
            <Text style={styles.item}>• Reports</Text>
          </TouchableOpacity>

           <TouchableOpacity
            onPress={() => props.navigation.navigate("UserScreen")}
          >
            <Text style={styles.item}>• User</Text>
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
