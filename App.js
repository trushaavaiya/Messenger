import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Screen1 from './src/Screen1';
import Screen2 from './src/Screen2';
import ContactScreen from './src/Screen3';
import ChatScreen from './src/Screen4';
import MessagesScreen from './src/Screen5';
import ChatScreen1 from './src/Screen7';
import ChatListScreen from './src/Screen8';
import MessageApp from './src/Screen9';
import MessageApp1 from './src/Screen10';
import SettingsScreen from './src/Screen11';
import BackupRestoreScreen from './src/Screen12';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen1" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
        <Stack.Screen name="Screen3" component={ContactScreen} />
        <Stack.Screen name="Screen4" component={ChatScreen} />
        <Stack.Screen name="Screen5" component={MessagesScreen} />
        <Stack.Screen name="Screen7" component={ChatScreen1} />
        <Stack.Screen name="Screen8" component={ChatListScreen} />
        <Stack.Screen name="Screen9" component={MessageApp} />
        <Stack.Screen name="Screen10" component={MessageApp1} />
        <Stack.Screen name="Screen11" component={SettingsScreen} />
        <Stack.Screen name="Screen12" component={BackupRestoreScreen} />  
      </Stack.Navigator>
    </NavigationContainer>
    </GestureHandlerRootView>
  );
}
