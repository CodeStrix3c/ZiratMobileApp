import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  ScrollView,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderBar from "../components/shared/HeaderBar";

/* ROOT BRAND COLORS */
const colors = {
  primary: "#2d6b06",
  primaryDark: "#245805",
  secondary: "#c7611f",
  secondaryDark: "#a64f18",
};

/* BRAND-BASED RISK COLORS */
const RISK_MAP = {
  green: {
    bg: `${colors.primary}15`,
    text: colors.primaryDark,
    bar: colors.primary,
  },
  yellow: {
    bg: `${colors.secondary}20`,
    text: colors.secondaryDark,
    bar: colors.secondary,
  },
  red: {
    bg: `${colors.secondaryDark}20`,
    text: colors.secondaryDark,
    bar: colors.secondaryDark,
  },
};

/* BRAND-BASED STATUS COLORS */
const STATUS_MAP = {
  warning: {
    bg: `${colors.secondary}20`,
    text: colors.secondaryDark,
  },
  danger: {
    bg: `${colors.secondaryDark}20`,
    text: colors.secondaryDark,
  },
  success: {
    bg: `${colors.primary}20`,
    text: colors.primaryDark,
  },
};

/* MOCK DATA */
const mockClients = [
  {
    id: 1,
    name: "Client A Corp",
    code: "CLT-A-102",
    creditLimit: 5000,
    validity: "Dec 31, 2024",
    outstanding: 1800,
    risk: "green",
  },
  {
    id: 2,
    name: "Client B Retail",
    code: "CLT-B-204",
    creditLimit: 3000,
    validity: "Jun 30, 2024",
    outstanding: 1280,
    overdue: true,
    risk: "yellow",
  },
  {
    id: 3,
    name: "Client C Mart",
    code: "CLT-C-309",
    creditLimit: 8000,
    validity: "Dec 31, 2025",
    outstanding: 0,
    risk: "red",
  },
];

const mockBills = [
  {
    id: "INV-1024",
    client: "Client A Corp",
    period: "Dec 01–07, 2024",
    amount: 1200,
    status: "Due in 3 days",
    statusType: "warning",
  },
  {
    id: "INV-1021",
    client: "Client B Retail",
    period: "Nov 01–30, 2024",
    amount: 1280,
    status: "Overdue",
    statusType: "danger",
  },
  {
    id: "INV-1018",
    client: "Client C Mart",
    period: "Oct 01–31, 2024",
    amount: 0,
    status: "Settled",
    statusType: "success",
  },
];

export default function CreditScreen() {
  const [activeTab, setActiveTab] = useState("clients");
  const [discountPercent, setDiscountPercent] = useState("5");
  const [discountValidity, setDiscountValidity] = useState("30 Days");

  const [reminders, setReminders] = useState({
    dayOfPurchase: true,
    beforeDue: true,
    onDueDate: true,
    overdue: true,
  });

  // Summary metrics
  const totalOutstanding = mockClients.reduce((s, c) => s + c.outstanding, 0);
  const totalLimit = mockClients.reduce((s, c) => s + c.creditLimit, 0);
  const availableCredit = totalLimit - totalOutstanding;

  const upcomingAmount = 3200;
  const upcomingClients = 3;

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <HeaderBar title="Credit Management" icon="person-circle" />

      <ScrollView className="flex-1 px-4 pt-3 pb-24">

        {/* TOP SUMMARY CARD */}
        <View className="bg-white rounded-xl shadow p-4 mb-3">
          <View className="flex-row justify-between items-start">
            <View className="flex-1 mr-3">
              <Text className="text-xs text-gray-700">Total Credit Outstanding</Text>

              <Text
                className="text-2xl font-extrabold mt-1"
                style={{ color: colors.primaryDark }}
              >
                ₹{totalOutstanding.toLocaleString()}
              </Text>

              <Text className="text-[11px] mt-1 text-gray-600">
                Total Limit: ₹{totalLimit.toLocaleString()}
              </Text>
            </View>

            {/* Available Credit */}
            <View className="items-end">
              <Text className="text-xs text-gray-700 mb-1">Available Credit</Text>
              <View
                className="px-3 py-[6px] rounded-full"
                style={{ backgroundColor: `${colors.primary}15` }}
              >
                <Text
                  className="text-xs font-bold"
                  style={{ color: colors.primaryDark }}
                >
                  ₹{availableCredit.toLocaleString()}
                </Text>
              </View>
            </View>
          </View>

          {/* UPCOMING PAYMENTS */}
          <View
            className="mt-3 rounded-xl px-3 py-2 flex-row items-center"
            style={{ backgroundColor: `${colors.secondary}10` }}
          >
            <MaterialIcons name="access-time" size={18} color={colors.secondaryDark} />
            <View className="ml-2 flex-1">
              <Text
                className="text-[11px] font-semibold"
                style={{ color: colors.secondaryDark }}
              >
                Upcoming Payments (7 Days)
              </Text>
              <Text
                className="text-[11px]"
                style={{ color: colors.secondaryDark }}
              >
                ₹{upcomingAmount.toLocaleString()} due from {upcomingClients} clients
              </Text>
            </View>
          </View>
        </View>

        {/* TABS */}
        <View className="flex-row p-1 mb-3">
          <TabButton
            label="Credit Client List"
            active={activeTab === "clients"}
            onPress={() => setActiveTab("clients")}
            activeColor={colors.primary}
          />

          <TabButton
            label="Billing & Statements"
            active={activeTab === "billing"}
            onPress={() => setActiveTab("billing")}
            activeColor={colors.secondary}
          />
        </View>

        {activeTab === "clients" ? (
          <>
            {/* CLIENT COUNT */}
            <Text className="text-sm text-gray-600 mb-1">
              {mockClients.length} credit-approved clients
            </Text>

            {/* CLIENT CARDS */}
            {mockClients.map((client) => (
              <ClientCard key={client.id} client={client} />
            ))}

            {/* SETTLEMENT DISCOUNT */}
            <SettlementCard
              discountPercent={discountPercent}
              setDiscountPercent={setDiscountPercent}
              discountValidity={discountValidity}
              setDiscountValidity={setDiscountValidity}
            />

            {/* REMINDERS */}
            <ReminderCard reminders={reminders} setReminders={setReminders} />
          </>
        ) : (
          <BillingTab />
        )}
      </ScrollView>

      {/* Floating + Button */}
      <TouchableOpacity
        className="absolute right-5 bottom-6 rounded-full px-5 py-3 flex-row items-center shadow-lg"
        style={{ backgroundColor: colors.primaryDark }}
      >
        <Ionicons name="add-circle-outline" size={18} color="#fff" />
        <Text className="ml-2 text-white text-sm font-semibold">
          New Credit Invoice
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

//
// --------------------------------------------
// COMPONENTS
// --------------------------------------------
//

// ⭐ TAB BUTTON
function TabButton({ label, active, onPress, activeColor }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex-1 rounded-full py-2 items-center"
      style={{
        backgroundColor: active ? `${activeColor}15` : "#f2f2f2",
        borderColor: active ? activeColor : "transparent",
        borderWidth: active ? 1 : 0,
      }}
    >
      <Text
        className="text-xs font-semibold"
        style={{ color: active ? activeColor : "#666" }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}

//
// ⭐ CLIENT CARD (BRAND BASED)
//
function ClientCard({ client }) {
  const risk = RISK_MAP[client.risk] || RISK_MAP.green;

  const utilization =
    client.creditLimit > 0
      ? Math.min(client.outstanding / client.creditLimit, 1)
      : 0;

  return (
    <View className="bg-white rounded-2xl shadow p-4 mb-3">
      {/* HEADER */}
      <View className="flex-row justify-between items-start">
        <View className="flex-1">
          <Text
            className="font-semibold text-[14px]"
            style={{ color: colors.secondaryDark }}
          >
            {client.name}
          </Text>

          <Text className="text-[12px] text-gray-600 mt-[3px]">
            Code: {client.code}
          </Text>
          <Text className="text-[12px] text-gray-600 mt-[3px]">
            Credit Limit: ₹{client.creditLimit.toLocaleString()}
          </Text>
          <Text className="text-[12px] text-gray-600 mt-[3px]">
            Valid Thru: {client.validity}
          </Text>
        </View>

        {/* RISK TAG */}
        <View
          className="px-2 py-[2px] rounded-full flex-row items-center"
          style={{ backgroundColor: risk.bg }}
        >
          <View
            style={{
              width: 6,
              height: 6,
              borderRadius: 999,
              backgroundColor: risk.text,
            }}
          />
          <Text
            className="ml-1 text-[10px] font-semibold"
            style={{ color: risk.text }}
          >
            {client.risk === "green"
              ? "Low Risk"
              : client.risk === "yellow"
              ? "Medium Risk"
              : "High Risk"}
          </Text>
        </View>
      </View>

      {/* UTILIZATION */}
      <View className="mt-3">
        <View className="flex-row justify-between mb-[2px]">
          <Text className="text-[12px] text-gray-600">Credit Utilisation</Text>
          <Text className="text-[11px] text-gray-700 font-medium">
            {Math.round(utilization * 100)}%
          </Text>
        </View>

        <View className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <View
            className="h-2 rounded-full"
            style={{
              width: `${utilization * 100}%`,
              backgroundColor: client.overdue
                ? colors.secondaryDark
                : risk.bar,
            }}
          />
        </View>
      </View>

      {/* FOOTER */}
      <View className="flex-row justify-between items-center mt-3">
        <View>
          <Text className="text-[11px] text-gray-600">Outstanding</Text>
          <Text
            className="text-sm font-semibold"
            style={{
              color: client.overdue ? colors.secondaryDark : colors.primaryDark,
            }}
          >
            ₹{client.outstanding.toLocaleString()}
            {client.overdue ? " (Overdue)" : ""}
          </Text>
        </View>

        <View className="flex-row items-center">
          <TouchableOpacity
            className="px-3 py-2 rounded-full mr-2"
            style={{ backgroundColor: colors.primary }}
          >
            <Text className="text-white text-[11px] font-semibold">
              View Bills
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="px-3 py-2 rounded-full border"
            style={{ borderColor: colors.secondaryDark }}
          >
            <Text
              className="text-[11px] font-semibold"
              style={{ color: colors.secondaryDark }}
            >
              Restrict Credit
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

//
// ⭐ SETTLEMENT CARD
//
function SettlementCard({
  discountPercent,
  setDiscountPercent,
  discountValidity,
  setDiscountValidity,
}) {
  return (
    <View className="bg-white rounded-2xl shadow p-4 mb-3">
      <Text className="text-sm font-semibold text-black mb-1">
        Settlement Discount Controls
      </Text>
      <Text className="text-[12px] text-gray-600 mb-3">
        Auto-deduct discounts if the client settles within selected window.
      </Text>

      <View className="flex-row gap-x-3">
        <View className="flex-1">
          <Text className="text-[11px] text-gray-700 mb-1">Discount %</Text>
          <TextInput
            value={discountPercent}
            onChangeText={setDiscountPercent}
            keyboardType="numeric"
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
            placeholder="0"
          />
        </View>

        <View className="flex-1">
          <Text className="text-[11px] text-gray-700 mb-1">Validity</Text>
          <TextInput
            value={discountValidity}
            onChangeText={setDiscountValidity}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
            placeholder="e.g. 30 Days"
          />
        </View>
      </View>

      <View className="mt-3 flex-row items-center">
        <Ionicons name="information-circle-outline" size={16} color="#6b7280" />
        <Text
          className="ml-1 text-[12px]"
          style={{ color: colors.secondaryDark }}
        >
          Applied automatically during settlement.
        </Text>
      </View>
    </View>
  );
}

//
// ⭐ REMINDER CARD
//
function ReminderCard({ reminders, setReminders }) {
  const toggleAll = (v) =>
    setReminders({
      dayOfPurchase: v,
      beforeDue: v,
      onDueDate: v,
      overdue: v,
    });

  return (
    <View className="bg-white rounded-2xl shadow p-4 mb-5">
      <View className="flex-row justify-between items-center mb-2">
        <View>
          <Text className="text-sm font-semibold text-black">
            Payment Reminder System
          </Text>
          <Text className="text-[12px] text-gray-600">
            Configure automatic reminders
          </Text>
        </View>

        <Switch
          value={
            reminders.dayOfPurchase ||
            reminders.beforeDue ||
            reminders.onDueDate ||
            reminders.overdue
          }
          onValueChange={(val) => toggleAll(val)}
          trackColor={{ false: "#d1d5db", true: colors.primary }}
          thumbColor="#fff"
        />
      </View>

      <ReminderRow
        label="Day of Purchase"
        value={reminders.dayOfPurchase}
        onChange={(v) => setReminders((r) => ({ ...r, dayOfPurchase: v }))}
      />

      <ReminderRow
        label="3 Days Before Due"
        value={reminders.beforeDue}
        onChange={(v) => setReminders((r) => ({ ...r, beforeDue: v }))}
      />

      <ReminderRow
        label="On Due Date"
        value={reminders.onDueDate}
        onChange={(v) => setReminders((r) => ({ ...r, onDueDate: v }))}
      />

      <ReminderRow
        label="Overdue + Penalty"
        value={reminders.overdue}
        onChange={(v) => setReminders((r) => ({ ...r, overdue: v }))}
      />

      <View
        className="mt-3 rounded-xl px-3 py-2"
        style={{ backgroundColor: `${colors.primary}10` }}
      >
        <Text
          className="text-[11px]"
          style={{ color: colors.primaryDark }}
        >
          View all scheduled reminders in the Credit Calendar.
        </Text>
      </View>
    </View>
  );
}

//
// ⭐ REMINDER ROW
//
function ReminderRow({ label, value, onChange }) {
  return (
    <View className="flex-row justify-between items-center mt-2">
      <View className="flex-row items-center">
        <View
          className="w-2 h-2 rounded-full mr-2"
          style={{ backgroundColor: colors.primary }}
        />
        <Text className="text-xs text-gray-700">{label}</Text>
      </View>

      <Switch
        value={value}
        onValueChange={onChange}
        trackColor={{ false: "#d1d5db", true: colors.primary }}
        thumbColor="#fff"
      />
    </View>
  );
}

//
// ⭐ BILLING TAB
//
function BillingTab() {
  return (
    <View className="bg-white rounded-2xl shadow p-4 mt-1 mb-6">
      <Text className="text-sm font-semibold text-gray-800 mb-3">
        Billing & Statements
      </Text>

      {/* Statements */}
      <View className="mb-3">
        <Text className="text-xs text-gray-500 mb-1">
          Consolidated Statements
        </Text>

        <View className="flex-row gap-x-2 mb-2">
          <Chip label="Daily" active />
          <Chip label="Weekly" />
          <Chip label="Monthly" />
        </View>

        <Text className="text-[11px] text-gray-500">
          Download or share statements summarising all invoices in the period.
        </Text>
      </View>

      {/* Individual Bills */}
      <View className="border-t border-gray-200 pt-3 mt-2">
        <Text className="text-sm text-gray-800 mb-2">
          Individual Bills
        </Text>

        {mockBills.map((bill) => (
          <BillRow key={bill.id} bill={bill} />
        ))}
      </View>

      {/* Actions */}
      <View className="border-t border-gray-200 pt-3 mt-2">
        <Text className="text-sm text-gray-800 mb-1">Invoice Actions</Text>

        <View className="flex-row flex-wrap gap-2 mt-1">
          <ActionPill icon="print-outline" label="Print / PDF" />
          <ActionPill icon="download-outline" label="Download PDF" />
          <ActionPill icon="logo-whatsapp" label="Send via WhatsApp" />
          <ActionPill icon="chatbox-ellipses-outline" label="Send SMS" />
          <ActionPill icon="cloud-done-outline" label="Online Settlement" />
          <ActionPill icon="cash-outline" label="Offline Settlement" />
        </View>
      </View>
    </View>
  );
}

//
// ⭐ CHIP COMPONENT
//
function Chip({ label, active }) {
  return (
    <View
      className="px-3 py-[4px] rounded-full border"
      style={{
        borderColor: active ? colors.primaryDark : "#ccc",
        backgroundColor: active ? `${colors.primary}20` : "#f2f2f2",
      }}
    >
      <Text
        className="text-[11px]"
        style={{
          color: active ? colors.primaryDark : "#555",
          fontWeight: active ? "600" : "400",
        }}
      >
        {label}
      </Text>
    </View>
  );
}

//
// ⭐ ACTION PILL
//
function ActionPill({ icon, label }) {
  return (
    <View
      className="flex-row items-center px-3 py-2 rounded-full border"
      style={{ borderColor: "#ddd", backgroundColor: "#f9f9f9" }}
    >
      <Ionicons name={icon} size={13} color="#444" />
      <Text className="ml-1 text-[11px] text-gray-700">{label}</Text>
    </View>
  );
}

//
// ⭐ BILL ROW
//
function BillRow({ bill }) {
  const style = STATUS_MAP[bill.statusType];

  return (
    <View className="flex-row justify-between items-center mb-3 bg-white rounded-xl shadow p-4">
      <View className="flex-1">
        <Text className="text-xs font-semibold text-gray-800">
          {bill.client}
        </Text>

        <Text className="text-[11px] text-gray-500">
          {bill.id} · {bill.period}
        </Text>

        <Text className="text-[12px] text-gray-700 mt-[2px]">
          Amount: ₹{bill.amount.toLocaleString()}
        </Text>
      </View>

      <View className="items-end">
        <View
          className="px-2 py-[2px] rounded-full"
          style={{ backgroundColor: style.bg }}
        >
          <Text
            className="text-[10px] font-semibold"
            style={{ color: style.text }}
          >
            {bill.status}
          </Text>
        </View>

        <TouchableOpacity
          className="mt-2 px-3 py-1 rounded-full"
          style={{ backgroundColor: colors.primary }}
        >
          <Text className="text-[10px] text-white font-semibold">
            View Bill
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
