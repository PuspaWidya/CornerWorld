import { StatusBar } from "expo-status-bar";

import { QueryClient, QueryClientProvider } from "react-query";

import HomeScreen from "./screens/HomeScreen";
import TodoList from "./screens/TodoList";
import Test from "./screens/test";
import { NavigationContainer } from "@react-navigation/native";

const queryClient = new QueryClient();
import { LogBox } from "react-native";
import Todo from "./screens/Todo";
import Router from "./router";

LogBox.ignoreLogs(["Setting a timer"]);
export default function App() {
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        {/* <Router /> */}
        {/* <TodoList /> */}
        {/* <Test /> */}
        <Todo />
      </QueryClientProvider>
    </NavigationContainer>
  );
}
