// module/vendor/constants/mockNotifications.js

export const notificationsData = [
  {
    id: 1,
    type: "order",
    title: "New Order Received",
    message: "Order #ORD-9821 has been placed.",
    time: "2 min ago",
    icon: "cart-outline",
    color: "#2d6b06", // primary
    read: false,
    section: "Today",
  },
  {
    id: 2,
    type: "payment",
    title: "Payment Received",
    message: "₹12,000 credited to vendor wallet.",
    time: "10 min ago",
    icon: "cash-outline",
    color: "#1d8e53", // green tone
    read: false,
    section: "Today",
  },
  {
    id: 3,
    type: "credit",
    title: "Overdue Credit Alert",
    message: "Client B Retail missed the payment deadline.",
    time: "1 hour ago",
    icon: "alert-circle-outline",
    color: "#b91c1c", // red
    read: true,
    section: "Yesterday",
  },
  {
    id: 4,
    type: "stock",
    title: "Low Stock Alert",
    message: "Sourdough Bread stock dropped below minimum.",
    time: "3 hours ago",
    icon: "trending-down-outline",
    color: "#c7611f", // secondary
    read: true,
    section: "Yesterday",
  },
  {
    id: 5,
    type: "settlement",
    title: "Weekly Settlement Ready",
    message: "Your weekly settlement statement is generated.",
    time: "2 days ago",
    icon: "wallet-outline",
    color: "#c7611f", // secondary
    read: true,
    section: "Earlier",
  },
  {
    id: 6,
    type: "platform",
    title: "Platform Announcement",
    message: "Ziraat new update rollout starts tonight.",
    time: "3 days ago",
    icon: "megaphone-outline",
    color: "#245805", // primary hover
    read: true,
    section: "Earlier",
  },
];
