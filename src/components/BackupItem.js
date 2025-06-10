import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Colors from '../constants/colors';
import Fonts from '../constants/fonts';

const BackupItem = ({
  icon,
  title,
  subtitle,
  showProgress = false,
  progress = 0,
  onCancel,
}) => {
  return (
    <View style={styles.section}>
      <Icon name={icon} size={24} color={Colors.buttonText} />
      <View style={styles.textContainer}>
        <Text style={styles.heading}>{title}</Text>
        <Text style={styles.subtext}>{subtitle}</Text>

        {showProgress && (
          <View style={styles.progressRow}>
            <View style={styles.progressBarBackground}>
              <View style={[styles.progressBarFill, { width: `${progress * 100}%` }]} />
            </View>
            {onCancel && (
              <TouchableOpacity onPress={onCancel}>
                <Icon name="close" size={20} color={Colors.grayTextLight} />
              </TouchableOpacity>
            )}
          </View>
        )}
      </View>
    </View>
  );
};

export default BackupItem;

const styles = StyleSheet.create({
  section: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
    marginTop: 20,
  },
  textContainer: {
    marginLeft: 15,
    flex: 1,
  },
  heading: {
    fontSize: Fonts.contactNameSize,
    fontWeight: Fonts.contactNameWeight,
    color: Colors.buttonText,
  },
  subtext: {
    fontSize: Fonts.contactPhoneSize,
    color: Colors.lightText,
  },
  progressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  progressBarBackground: {
    flex: 1,
    height: 6,
    backgroundColor: Colors.lightBorder,
    borderRadius: 4,
    marginRight: 10,
  },
  progressBarFill: {
    height: 6,
    backgroundColor: Colors.accentPurple,
    borderRadius: 4,
  },
});
