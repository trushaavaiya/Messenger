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

      
      <Image
        source={require('../assets/messenger-icon.png')} 
        style={styles.logo}
      />

      
      <Text style={styles.title}>Text{'\n'}<Text style={styles.bold}>Messenger</Text></Text>

      
      <Text style={styles.subtitle}>
        Let’s Connect with your friends and family with this{'\n'}
        fastest and instant messaging app
      </Text>

      
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Give Me Permission</Text>
      </TouchableOpacity>

        </View>
  );
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
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
    backgroundColor: 'linear-gradient(90deg, #9F6CF2 0%, #3F2B96 100%)',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 30,
    backgroundColor: '#9F6CF2', 
    elevation: 4,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

});