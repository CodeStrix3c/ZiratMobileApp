import { useState } from "react";

import { SafeAreaView } from "react-native-safe-area-context";
import HeaderBar from "../components/shared/HeaderBar";
import Searchandfilter from "../components/shared/SearchandfilterBar";
import AddProductModal from "../modules/vendor/components/AddProductModal";
import ProductTableHeader from "../modules/vendor/components/ProductTableHeader";
import VendorProductCard from "../modules/vendor/components/VendorProductCardt";

export default function ProductsScreen() {
  const [showModal, setShowModal] = useState(false);

  const products = [
    { id: 1, name: "Emamectin Benzoate", price: 750, sku: "COF-2024-B", expiry: "2024-10-13", published: true },
    { id: 2, name: "Imidacloprid", price: 20, sku: "BRD-9921", expiry: "2024-03-10", published: false },
    { id: 3, name: "Cypermethrin", price: 110, sku: "SOP-5541", expiry: "2024-09-01", published: true },
  ];

  return (
     <SafeAreaView  className="flex-1 bg-gray-100">

     
{/* HEADER */}
      <HeaderBar title="Vendor Profile" icon="person-circle" />
      {/* Search + Filters */}
      <Searchandfilter/>

      {/* Table Header */}
      <ProductTableHeader/>

      {/* Table Rows */}
      {products.map((item) => (
        <VendorProductCard key={item.id} item={item} />
      ))}

      {/* Add/Edit Modal */}
      {showModal && <AddProductModal onClose={() => setShowModal(false)} />}
   </SafeAreaView>
  );
}
