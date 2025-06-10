// components/SettingSection.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Fonts from '../constants/fonts';
import Colors from '../constants/colors';

const SettingSection = ({ iconName, heading, subtext, children }) => {
  return (
    <View style={styles.section}>
      <Icon name={iconName} size={24} color={Colors.text1} />
      <View style={styles.textContainer}>
        <Text style={styles.heading}>{heading}</Text>
        <Text style={styles.subtext}>{subtext}</Text>
        {children}
      </View>
    </View>
  );
};

export default SettingSection;

const styles = StyleSheet.create({
  section: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  textContainer: {
    marginLeft: 15,
    flex: 1,
  },
  heading: {
    fontSize: Fonts.contactNameSize,
    fontWeight: Fonts.contactNameWeight,
    color: Colors.text1,
    fontFamily: Fonts.bold,
  },
  subtext: {
    fontSize: Fonts.contactPhoneSize,
    color: Colors.messageText,
    fontFamily: Fonts.regular,
  },
});
