import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../home/HomeScreen";
import { GalleryScreen } from "../gallery/GalleryScreen";

const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Select Camera and Date"
        component={HomeScreen}
        options={{
          headerStyle: {
            backgroundColor: "#DCCEBE",
          },
        }}
      />
      <Stack.Screen
        name="Gallery"
        component={GalleryScreen}
        options={{
          headerStyle: {
            backgroundColor: "#DCCEBE",
          },
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
