import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

// import Screen1 from './src/Screen1';
//import Screen2 from './src/Screen2';
// import Screen3 from './src/Screen3';
// import Screen4 from './src/Screen4';
// import Screen5 from './src/Screen5';
// import Screen6 from './src/Screen6';
// import Screen7 from './src/Screen7';
// import Screen8 from './src/Screen8';
// import Screen9 from './src/Screen9';
// import Screen10 from './src/Screen10';
// import Screen12 from './src/Screen12';
// import Screen13 from './src/Screen13';
// import Screen11 from './src/Screen11';
// import Screen12 from './src/Screen12';
// import Screen13 from './src/Screen13';
// import Screen14 from './src/Screen14';
// import Screen15 from './src/Screen15';
// import Screen16 from './src/Screen16';
import Screen17 from './src/Screen17';

function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <StatusBar barStyle={'light-content'} />
        {/* <Screen1/> */}
        {/* <Screen2/> */}
        {/* <Screen3/> */}
        {/* <Screen4/> */}
        {/* <Screen5/> */}
        {/* <Screen6/> */}
        {/* <Screen7/> */}
        {/* <Screen8/> */}
        {/* <Screen9/> */}
        {/* <Screen10/> */}
        {/* <Screen11/> */}
        {/* <Screen12/> */}
        {/* <Screen13/> */}
        {/* <Screen12/> */}
        {/* <Screen13/> */}
        {/* <Screen14/> */}
        {/* <Screen15/> */}
        {/* <Screen16/>  */}
        <Screen17 />
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
