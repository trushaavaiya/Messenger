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
import Screen13 from './src/Screen13';
import Screen14 from './src/Screen14';
import Screen15 from './src/Screen15';
import Screen16 from './src/Screen16';
import Screen17 from './src/Screen17';
import Screen18 from './src/Screen18';
import Screen19 from './src/Screen19';
import Screen20 from './src/Screen20';
import Screen21 from './src/Screen21';
import Screen22 from './src/Screen22';
import Screen23 from './src/Screen23';
import Screen24 from './src/Screen24';


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
        <Stack.Screen name="Screen13" component={Screen13} />
        <Stack.Screen name="Screen14" component={Screen14} />
        <Stack.Screen name="Screen15" component={Screen15} />
        <Stack.Screen name="Screen16" component={Screen16} />
        <Stack.Screen name="Screen17" component={Screen17} />
        <Stack.Screen name="Screen18" component={Screen18} />
        <Stack.Screen name="Screen19" component={Screen19} />
        <Stack.Screen name="Screen20" component={Screen20} />
        <Stack.Screen name="Screen21" component={Screen21} />
        <Stack.Screen name="Screen22" component={Screen22} />
        <Stack.Screen name="Screen23" component={Screen23} />
        <Stack.Screen name="Screen24" component={Screen24} />
      </Stack.Navigator>
    </NavigationContainer>
    </GestureHandlerRootView>
  );
}
