import React,{useEffect} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  StatusBar,
} from 'react-native';
import Colors from './constants/colors';

const { width, height } = Dimensions.get('window');

export default function App({navigation}) {
   useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Screen3');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.background} barStyle="dark-content" />

      <View style={[styles.circle]} />
      <View style={[styles.smallCircle]} />
      <View style={[styles.gradientCircle]} />

      <View style={[styles.zigzag ]} />
      <View style={[styles.zigzag]} />

      <View style={[styles.triangle]} />
      <View style={[styles.triangleOrange]} />
      <View style={[styles.orangeRing]} />

      <View style={styles.centerContent}>
        <Image source={require('../image/Messenger-icon.png')} style={styles.logo} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  centerContent: {
    position: 'absolute',
    top: height / 2.7,
    left: width / 2 - 80,
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    width: 160,
    height: 160,
    resizeMode: 'contain',
  },

  emoji: {
    width: 40,
    height: 40,
    position: 'absolute',
    top: -20,
    left: -30,
    zIndex: 10,
  },

  circle: {
    position: 'absolute',
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor:Colors.purple,
    top: 50, left: -50,
  },

  smallCircle: {
    position: 'absolute',
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor:Colors.smallPurple,
    bottom: 60, 
    left: 20 ,
  },

  gradientCircle: {
    position: 'absolute',
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor:Colors.orangeLight,
    bottom: 30,
    right: -30 ,
  },

  zigzag: {
    position: 'absolute',
    width: 50,
    height: 4,
    backgroundColor: Colors.zigzag,
    transform: [{ rotate: '45deg' }],
    top: 300,
    left: 30 ,
    bottom: 180,
    right: 100,
  },

  triangle: {
    width: 0,
    height: 0,
    position: 'absolute',
    backgroundColor: 'transparent',
    borderLeftWidth: 12,
    borderRightWidth: 12,
    borderBottomWidth: 20,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: Colors.trianglePurple,
    top: 100,
    right: 4,
  },

  triangleOrange: {
    width: 0,
    height: 0,
    position: 'absolute',
    backgroundColor: 'transparent',
    borderLeftWidth: 15,
    borderRightWidth: 15,
    borderBottomWidth: 30,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: Colors.orange,
    transform: [{ rotate: '10deg' }],
    bottom: 150,
    left: 80 ,
  },

  orangeRing: {
    position: 'absolute',
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 4,
    borderColor: Colors.ringOrange,
    backgroundColor: 'transparent',
    right:20,
    top: height / 2,
  },
});
