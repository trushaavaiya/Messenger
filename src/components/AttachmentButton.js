import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/colors';
import Fonts from '../constants/fonts';

const AttachmentButton = ({ iconName, label, active = false, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.iconButton, active && styles.iconButtonActive]}
      onPress={onPress}
    >
      <Icon name={iconName} size={28} color={Colors.buttonText} />
      <Text style={[styles.iconLabel, active && { color: Colors.buttonText }]}>{label}</Text>
    </TouchableOpacity>
  );
};

export default AttachmentButton;

const styles = StyleSheet.create({
  iconButton: {
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  iconLabel: {
    fontSize: Fonts.bannerSubSize,
    color: Colors.buttonText,
    marginTop: 4,
  },
  iconButtonActive: {
    backgroundColor: Colors.addicon,
  },
});
