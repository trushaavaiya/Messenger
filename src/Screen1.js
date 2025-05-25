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


});