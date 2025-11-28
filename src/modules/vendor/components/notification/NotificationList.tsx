// components/notifications/NotificationList.jsx
import { ScrollView } from "react-native";
import NotificationSection from "./NotificationSection";


export default function NotificationList({
  filtered,
  sections,
  colors,
  markRead,
  removeItem,
}) {
  return (
    <ScrollView className="px-4 mt-3 pb-20">
      {sections.map((sec) => {
        const sectionItems = filtered.filter((x) => x.section === sec);

        return (
          <NotificationSection
            key={sec}
            title={sec}
            items={sectionItems}
            colors={colors}
            markRead={markRead}
            removeItem={removeItem}
          />
        );
      })}
    </ScrollView>
  );
}
