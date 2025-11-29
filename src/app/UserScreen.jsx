import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  Modal,
  ScrollView,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderBar from "../components/shared/HeaderBar";

const colors = {
  primary: "#2d6b06",
  primaryDark: "#245805",
  secondary: "#c7611f",
  secondaryDark: "#a64f18",
  secondaryLight: "#f7e9df",
};

const ALL_ROLES = ["Admin", "Billing", "Stock Manager", "Delivery Manager"];

export default function UserScreen() {
  const [teamMembers, setTeamMembers] = useState([
    { id: 1, name: "Arjun Singh", role: "Admin", email: "arjun.manager@example.com", active: true },
    { id: 2, name: "Ravi Kumar", role: "Billing", email: "ravi.billing@example.com", active: true },
    { id: 3, name: "Neha Sharma", role: "Stock Manager", email: "neha.stock@example.com", active: false },
    { id: 4, name: "Danish Ali", role: "Delivery Manager", email: "danish.delivery@example.com", active: true },
  ]);

  const activityLog = [
    { id: 1, text: "Arjun updated stock levels", time: "2 hrs ago" },
    { id: 2, text: "Ravi generated a new invoice", time: "5 hrs ago" },
    { id: 3, text: "Danish marked an order as delivered", time: "Yesterday" },
  ];

  const [filter, setFilter] = useState("All");
  const [showModal, setShowModal] = useState(false);

  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newRole, setNewRole] = useState("Admin");
  const [newActive, setNewActive] = useState(true);

  const [openAccordion, setOpenAccordion] = useState(null);

  const filteredMembers =
    filter === "Active"
      ? teamMembers.filter((u) => u.active)
      : filter === "Disabled"
      ? teamMembers.filter((u) => !u.active)
      : teamMembers;

  const addMember = () => {
    if (!newName.trim() || !newEmail.trim()) return;

    const newUser = {
      id: Date.now(),
      name: newName,
      email: newEmail,
      role: newRole,
      active: newActive,
    };

    setTeamMembers([...teamMembers, newUser]);

    setNewName("");
    setNewEmail("");
    setNewRole("Admin");
    setNewActive(true);
    setShowModal(false);
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-100">

      {/* HEADER */}
      <HeaderBar title="User & Role Management" icon="person-circle" />

      <ScrollView className="px-4 pt-3 pb-24">

        {/* FILTER TABS – Premium */}
        <View className="flex-row mb-4">
          {["All", "Active", "Disabled"].map((item) => {
            const active = filter === item;
            return (
              <TouchableOpacity
                key={item}
                onPress={() => setFilter(item)}
                className="px-4 py-2 rounded-full mr-2"
                style={{
                  backgroundColor: active ? colors.secondaryLight : "#f2f2f2",
                  borderWidth: active ? 1 : 0,
                  borderColor: active ? colors.secondaryDark : "transparent",
                }}
              >
                <Text
                  className="text-xs font-semibold"
                  style={{ color: active ? colors.secondaryDark : "#555" }}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* TEAM MEMBERS HEADER */}
        <View className="flex-row justify-between items-center mb-3">
          <Text className="text-gray-800 font-semibold text-base">
            Team Members
          </Text>

          
        </View>

        {/* TEAM MEMBER CARDS */}
        {filteredMembers.map((user) => (
          <View
            key={user.id}
            className="bg-white rounded-2xl p-5 mb-3 shadow"
            style={{
              borderLeftWidth: 4,
              borderLeftColor: user.active ? colors.primary : colors.secondaryDark,
            }}
          >
            <View className="flex-row justify-between items-center">
              {/* Left section */}
              <View className="flex-row items-center">
                <View
                  className="w-11 h-11 rounded-full items-center justify-center mr-3"
                  style={{ backgroundColor: colors.secondaryLight }}
                >
                  <Ionicons name="person-outline" size={22} color={colors.secondaryDark} />
                </View>

                <View>
                  <Text className="font-semibold text-gray-900 text-sm">
                    {user.name}
                  </Text>
                  <Text className="text-xs text-gray-500">{user.email}</Text>
                </View>
              </View>

              {/* Status */}
              <View
                className="px-3 py-[4px] rounded-full"
                style={{
                  backgroundColor: user.active ? "#e7f5ea" : "#fdeeee",
                }}
              >
                <Text
                  className="text-[11px] font-semibold"
                  style={{
                    color: user.active ? colors.primary : colors.secondaryDark,
                  }}
                >
                  {user.active ? "Active" : "Disabled"}
                </Text>
              </View>
            </View>

            {/* ROLE TAG */}
            <View
              className="mt-3 self-start px-3 py-[4px] rounded-full"
              style={{ backgroundColor: colors.secondaryLight }}
            >
              <Text
                className="text-[11px] font-semibold"
                style={{ color: colors.secondaryDark }}
              >
                {user.role}
              </Text>
            </View>
          </View>
        ))}

        {/* ROLES ACCORDION */}
        <Text className="text-gray-800 font-semibold mt-5 mb-2">
          Available Roles & Permissions
        </Text>

        {[
          {
            role: "Admin",
            desc: "Full control over billing, stock, team & settlements.",
            perms: ["Add/Delete team", "Manage stock", "Manage billing", "View all reports"],
            icon: "shield-checkmark-outline",
            color: colors.primaryDark,
          },
          {
            role: "Billing",
            desc: "Handles invoices, payments & settlements.",
            perms: ["Create invoices", "Process payments", "View settlements"],
            icon: "document-text-outline",
            color: colors.secondaryDark,
          },
          {
            role: "Stock Manager",
            desc: "Manages stock levels, availability & product updates.",
            perms: ["Update stock", "Manage products", "Adjust quantities"],
            icon: "cube-outline",
            color: colors.primaryDark,
          },
          {
            role: "Delivery Manager",
            desc: "Handles dispatch, route & delivery completion.",
            perms: ["Assign delivery", "Track status", "Mark delivery done"],
            icon: "bicycle-outline",
            color: colors.secondaryDark,
          },
        ].map((r, i) => (
          <View
            key={i}
            className="bg-white rounded-2xl p-5 mb-3 shadow"
          >
            <TouchableOpacity
              onPress={() => setOpenAccordion(openAccordion === i ? null : i)}
              className="flex-row items-center justify-between"
            >
              <View className="flex-row items-center">
                <View
                  className="w-10 h-10 rounded-xl items-center justify-center"
                  style={{ backgroundColor: `${r.color}20` }}
                >
                  <Ionicons name={r.icon} size={20} color={r.color} />
                </View>

                <View className="ml-3">
                  <Text className="font-semibold text-gray-900">{r.role}</Text>
                  <Text className="text-xs text-gray-500">{r.desc}</Text>
                </View>
              </View>

              <Ionicons
                name={openAccordion === i ? "chevron-up" : "chevron-down"}
                size={20}
                color="#777"
              />
            </TouchableOpacity>

            {openAccordion === i && (
              <View className="mt-3 pl-1">
                {r.perms.map((p, idx) => (
                  <Text key={idx} className="text-xs text-gray-700 mb-1">
                    • {p}
                  </Text>
                ))}
              </View>
            )}
          </View>
        ))}

        {/* ACTIVITY LOG */}
        <Text className="text-gray-800 font-semibold mb-2">Activity Log</Text>

        <View className="bg-white rounded-2xl p-5 shadow mb-12">
          {activityLog.map((l) => (
            <View
              key={l.id}
              className="flex-row justify-between items-center border-b border-gray-200 py-2"
            >
              <Text className="text-gray-700 text-sm flex-1">{l.text}</Text>
              <Text className="text-gray-400 text-[10px]">{l.time}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* ADD MEMBER MODAL */}
      <Modal visible={showModal} animationType="slide" transparent>
        <View className="flex-1 bg-black/40 justify-end">
          <View className="bg-white rounded-t-3xl p-6">
            <Text className="text-lg font-semibold text-gray-900 mb-4">
              Add Team Member
            </Text>

            <TextInput
              placeholder="Full Name"
              className="border border-gray-300 rounded-xl px-4 py-3 mb-3"
              value={newName}
              onChangeText={setNewName}
            />

            <TextInput
              placeholder="Email Address"
              className="border border-gray-300 rounded-xl px-4 py-3 mb-3"
              value={newEmail}
              onChangeText={setNewEmail}
            />

            {/* Role Picker */}
            <View className="border border-gray-300 rounded-xl px-4 py-3 mb-3">
              <Text className="text-xs text-gray-600 mb-2">Role</Text>
              {ALL_ROLES.map((role) => (
                <TouchableOpacity
                  key={role}
                  onPress={() => setNewRole(role)}
                  className="py-2"
                >
                  <Text
                    style={{
                      color: newRole === role ? colors.primary : "#444",
                      fontWeight: newRole === role ? "700" : "400",
                    }}
                  >
                    {role}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* ACTIVE SWITCH */}
            <View className="flex-row items-center justify-between mb-4">
              <Text className="text-gray-700">Active User</Text>
              <Switch
                value={newActive}
                onValueChange={setNewActive}
                trackColor={{ true: colors.secondaryLight, false: "#ccc" }}
                thumbColor={newActive ? colors.secondaryDark : "#666"}
              />
            </View>

            {/* BUTTONS */}
            <View className="flex-row justify-end mt-2">
              <TouchableOpacity
                className="px-4 py-3 mr-3"
                onPress={() => setShowModal(false)}
              >
                <Text className="text-gray-700 font-semibold">Cancel</Text>
              </TouchableOpacity>

              
            </View>
          </View>
        </View>
      </Modal>

    </SafeAreaView>
  );
}
