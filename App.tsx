import AppNavigator from "./src/features/navigation/AppNavigator";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={client}>
      <AppNavigator />
    </QueryClientProvider>
  );
}
