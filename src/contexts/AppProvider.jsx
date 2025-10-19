import { AuthProvider } from "./AuthContext";
import AppQueryClientProvider from "./QueryClientProvider";

function AppProvider({ children }) {
  return (
    <AppQueryClientProvider>
      <AuthProvider>{children}</AuthProvider>
    </AppQueryClientProvider>
  );
}

export default AppProvider;
