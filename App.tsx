import LoginPage from "./src/components/LoginPage"
import SampleLogin from "./src/components/SampleLogin"
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Dashboard from "./src/components/Dashboard";

import { StyleSheet, View } from "react-native"

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginPage" screenOptions={{ headerStyle: { backgroundColor: "#e6e6e6" } }}>
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
export default App;