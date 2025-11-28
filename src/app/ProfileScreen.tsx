

import React, { useState } from "react";
import { Modal, ScrollView } from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

import DocumentCard from "../components/shared/DocumentCard";
import HeaderBar from "../components/shared/HeaderBar";
import OverviewCard from "../components/shared/OverviewCard";
import TabBar from "../components/shared/TabBar";
import TeamCard from "../components/shared/TeamCard";
import WarehouseCard from "../components/shared/WarehouseCard";

import BottomModal from "../components/shared/BottomModal";

const TABS = ["overview", "documents", "team", "warehouse"];

export default function ProfileScreen() {
  const [tab, setTab] = useState("overview");
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-gray-100">

      {/* HEADER */}
      <HeaderBar title="Vendor Profile" icon="person-circle" />

      {/* TABS */}
      <TabBar tabs={TABS} activeTab={tab} onChange={setTab} />

      <ScrollView className="px-4 pt-4 pb-28">

        {tab === "overview" && (
          <Animated.View entering={FadeInUp}>
            <OverviewCard onEditPress={() => setModalVisible(true)} />
          </Animated.View>
        )}

        {tab === "documents" && (
          <Animated.View entering={FadeInUp.delay(100)}>
            <DocumentCard />
          </Animated.View>
        )}

        {tab === "team" && (
          <Animated.View entering={FadeInUp.delay(100)}>
            <TeamCard />
          </Animated.View>
        )}

        {tab === "warehouse" && (
          <Animated.View entering={FadeInUp.delay(100)}>
            <WarehouseCard />
          </Animated.View>
        )}
      </ScrollView>

      

      {/* Modal */}
      <Modal transparent visible={modalVisible} animationType="fade">
        <BottomModal
          title="Edit Onboarding Status"
          onClose={() => setModalVisible(false)}
        />
      </Modal>

    </SafeAreaView>
  );
}
