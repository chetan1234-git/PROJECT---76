import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./screens/Home";
import DailyPicScreen from "./screens/DailyPicScreen";
import SpaceCraftsScreen from "./screens/SpaceCraftsScreen";
import StarMapScreen from "./screens/StarMapScreen";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="DailyPicScreen" component={DailyPicScreen} />
        <Stack.Screen name="SpaceCraftsScreen" component={SpaceCraftsScreen} />    
        <Stack.Screen name="StarMapScreen" component={StarMapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;