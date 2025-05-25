import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Dimensions,
} from 'react-native';


export default function Screen1() {
  return (
        <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <View style={[styles.circle, { top: 30, left: -40 }]} />
            <View style={[styles.circleSmall, { bottom: 60, left: -0.01 }]} />
            <View style={[styles.triangle, { top: 60, right: 40 }]} />
            <View style={[styles.triangleOrange, { bottom: 150, left: 100 }]} />
            <View style={[styles.zigzag, { top: 180, left: 20 }]} />
            <View style={[styles.zigzagSmall, { bottom: 160, right: 60 }]} />
            <View style={[styles.circleGradient, { bottom: 90, right: -10 }]} />

      
      <View style={styles.content}>
        <Image
          source={require('../image/Messenger-icon.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>
          Text{'\n'}
          <Text style={styles.bold}>Messenger</Text>
        </Text>
        <Text style={styles.subtitle}>
          Let’s Connect with your friends and family with this{'\n'}
          fastest and instant messaging app
        </Text>
      </View>

      
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Give Me Permission</Text>
        </TouchableOpacity>
      </View>
        </View>
  );
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
   content: {
    flex: 1,
    justifyContent: 'center',  
    alignItems: 'center',
  },
   buttonContainer: {
    position: 'absolute',
    bottom: 30,   
    left: 20,
    right: 20,
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    color: '#333',
    fontWeight:'bold',
  },
  bold: {
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#9F6CF2',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 30,
    elevation: 4,
    paddingBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  circle: {
    width: 120,
    height: 120,
    backgroundColor: '#caa1ff',
    borderRadius: 60,
    position: 'absolute',
    
  },
  circleSmall: {
    width: 40,
    height: 40,
    backgroundColor: '#d99bff',
    borderRadius: 50,
    position: 'absolute',
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 12,
    borderRightWidth: 12,
    borderBottomWidth: 20,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#b264ff',
    position: 'absolute',
    transform:[{rotate:'90deg'}],

    
  },
  triangleOrange: {
    width: 20,
    height: 20,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 15,
    borderRightWidth: 15,
    borderBottomWidth: 30,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#ff9900',
    position: 'absolute',
    transform:[{rotate:'40deg'}],
    
  },
   circleGradient: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#fdbb9c',
    position: 'absolute',
  },
  zigzag: {
    width: 10,
    height: 60,
    backgroundColor: '#ff3b6c',
    transform: [{ rotate: '45deg' }],
    position: 'absolute',
  },
   zigzagSmall: {
    width: 40,
    height: 3,
    backgroundColor: '#8b5cf6',
    transform: [{ rotate: '-20deg' }],
    position: 'absolute',
  },


});