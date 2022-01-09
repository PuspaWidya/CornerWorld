import { QueryClient, QueryClientProvider } from "react-query";
import { NavigationContainer } from "@react-navigation/native";

const queryClient = new QueryClient();
import { LogBox } from "react-native";
import Router from "./router";
import Register from "./screens/Register";

LogBox.ignoreLogs(["Setting a timer"]);
export default function App() {
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </NavigationContainer>
  );
}
