

import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
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
// import Screen11 from './src/Screen11';
import Screen12 from './src/Screen12';
// import Screen13 from './src/Screen13';




function App() {

  return (
    <View style={{flex:1}}>
      <StatusBar
        barStyle={'light-content'}
      />
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
      <Screen12/>
      {/* <Screen13/> */}
      

      
       
      
    </View>
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
