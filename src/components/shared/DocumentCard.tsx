import { colors } from "@/src/constants/colors";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Animated, {
  FadeInLeft, FadeInUp, Layout
} from "react-native-reanimated";


const documents = [
  {
    title: "GST Certificate",
    status: "uploaded",
    type: "pdf",
    fileSize: "1.2 MB",
    category: "Tax Registration",
    updated: "12 Jan 2025",
    mandatory: true,
    validity: "Lifetime",
    id: "DOC-2281-GST",
    notes: "GST number matches business registry",
  },
  {
    title: "PAN Card",
    status: "uploaded",
    type: "image",
    fileSize: "420 KB",
    category: "Identity Verification",
    updated: "10 Jan 2025",
    mandatory: true,
    validity: "Lifetime",
    id: "DOC-9811-PAN",
    notes: "Clear and valid identity proof",
  },
  {
    title: "Bank Passbook",
    status: "verified",
    type: "image",
    fileSize: "610 KB",
    category: "Bank Information",
    updated: "14 Jan 2025",
    mandatory: true,
    validity: "Linked (Verified)",
    id: "DOC-4191-BNK",
    notes: "Account validation successful",
  },
  {
    title: "Business License",
    status: "verified",
    type: "pdf",
    fileSize: "2.4 MB",
    category: "Business Compliance",
    updated: "01 Jan 2025",
    mandatory: true,
    validity: "Expires 2028",
    id: "DOC-7811-LIC",
    notes: "Official trade license verified",
  },
  {
    title: "Food Safety Certificate",
    status: "pending",
    type: "pdf",
    fileSize: "1.1 MB",
    category: "Compliance",
    updated: "--",
    mandatory: false,
    validity: "--",
    id: "DOC-6611-FSC",
    notes: "Required only for perishable products",
  },
];


function StatusBadge({ status }) {
  const map = {
    verified: {
      icon: "checkmark-circle",
      color: colors.primary,
      text: "Verified",
    },
    uploaded: {
      icon: "cloud-done-outline",
      color: colors.secondary,
      text: "Uploaded",
    },
    pending: {
      icon: "alert-circle-outline",
      color: colors.error,
      text: "Pending",
    },
  };

  const s = map[status];

  return (
    <View className="flex-row items-center">
      <Ionicons name={s.icon} size={16} color={s.color} />
      <Text className="ml-1 text-[11px] font-semibold" style={{ color: s.color }}>
        {s.text}
      </Text>
    </View>
  );
}


function FileTypeIcon({ type, color }) {
  const icons = {
    pdf: { name: "file-pdf-box", color },
    image: { name: "image", color },
    zip: { name: "zip-box", color },
    other: { name: "file-document-outline", color },
  };

  const icon = icons[type] || icons.other;

  return <MaterialCommunityIcons name={icon.name} size={22} color={color} />;
}


export default function DocumentCard() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <Animated.View
      entering={FadeInUp.duration(650)}
      layout={Layout.springify()}
      className="rounded-2xl p-5 mb-6"
      style={{
        backgroundColor: colors.light,
        borderColor: colors.neutral,
        borderWidth: 1,
        shadowColor: colors.dark,
        shadowOpacity: 0.08,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 4 },
      }}
    >
      {/* HEADER */}
      <View className="flex-row justify-between">
        <View>
          <Text className="text-lg font-extrabold" style={{ color: colors.dark }}>
            Documents & Verification
          </Text>
          <Text
            className="text-[11px] mt-[2px]"
            style={{ color: colors.darkHover }}
          >
            Legal, compliance and business verification
          </Text>
        </View>

        <Ionicons name="folder-open" size={26} color={colors.primary} />
      </View>

      {/* DOCUMENTS */}
      <View className="mt-5">
        {documents.map((doc, index) => {
          const color =
            doc.status === "verified"
              ? colors.primary
              : doc.status === "uploaded"
              ? colors.secondary
              : colors.error;

          const isOpen = openIndex === index;

          return (
            <Animated.View
              key={index}
              entering={FadeInLeft.delay(index * 100)}
              layout={Layout.springify()}
              className="rounded-xl p-4 mb-3"
              style={{
                backgroundColor: colors.darkHover,
                borderColor: colors.neutral,
                borderWidth: 1,
              }}
            >
              <TouchableOpacity
                onPress={() => toggle(index)}
                activeOpacity={0.8}
                className="flex-row items-center justify-between"
              >
                <View className="flex-row items-center">
                  <View
                    className="w-12 h-12 rounded-xl items-center justify-center"
                    style={{
                      backgroundColor: color + "22",
                    }}
                  >
                    <FileTypeIcon type={doc.type} color={color} />
                  </View>

                  <View className="ml-3">
                    <Text
                      className="text-sm font-semibold"
                      style={{ color: colors.dark }}
                    >
                      {doc.title}
                    </Text>
                    <Text
                      className="text-[11px]"
                      style={{ color: colors.darkHover }}
                    >
                      {doc.category}
                    </Text>
                  </View>
                </View>

                <View className="items-end">
                  <StatusBadge status={doc.status} />
                  {/* Expand / collapse */}
                  <Ionicons
                    name={isOpen ? "chevron-up" : "chevron-down"}
                    size={18}
                    color={colors.dark}
                    style={{ marginTop: 4 }}
                  />
                </View>
              </TouchableOpacity>

              {/* EXPANDED AREA */}
              {isOpen && (
                <Animated.View
                  entering={FadeInUp.duration(350)}
                  className="mt-4 ml-1"
                >
                  <Text className="text-[12px]" style={{ color: colors.dark }}>
                    Document ID: <Text className="font-semibold">{doc.id}</Text>
                  </Text>

                  <Text
                    className="text-[12px] mt-[2px]"
                    style={{ color: colors.dark }}
                  >
                    File Size: {doc.fileSize}
                  </Text>

                  <Text
                    className="text-[12px] mt-[2px]"
                    style={{ color: colors.dark }}
                  >
                    Last Updated: {doc.updated}
                  </Text>

                  <Text
                    className="text-[12px] mt-[2px]"
                    style={{ color: colors.dark }}
                  >
                    Validity: {doc.validity}
                  </Text>

                  <Text
                    className="text-[12px] mt-[8px]"
                    style={{ color: colors.dark }}
                  >
                    Notes:{" "}
                    <Text className="font-medium">{doc.notes}</Text>
                  </Text>

                  {/* ACTION BUTTONS */}
                  <View className="flex-row mt-4">
                    <TouchableOpacity
                      className="px-3 py-2 rounded-lg mr-2"
                      style={{ backgroundColor: colors.primary }}
                    >
                      <Text className="text-white text-[12px] font-semibold">
                        View
                      </Text>
                    </TouchableOpacity>

                   
                   
                  </View>
                </Animated.View>
              )}
            </Animated.View>
          );
        })}
      </View>

     
      <TouchableOpacity
        activeOpacity={0.8}
        className="flex-row items-center justify-center py-3 rounded-xl mt-3"
        style={{
          backgroundColor: colors.secondary,
          shadowColor: colors.secondary,
          shadowOpacity: 0.2,
          shadowRadius: 8,
        }}
      >
        <Ionicons name="cloud-upload" size={18} color="#fff" />
        <Text className="ml-2 text-white font-semibold text-sm">
          Upload New Document
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
}
