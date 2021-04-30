import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/screens/Home';
import Post from './src/screens/postDetails';

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Post" component={Post}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}
