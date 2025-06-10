import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Colors from '../constants/colors';
import Fonts from '../constants/fonts';

const SettingRowTextOnly = ({ iconName, title, subtitle }) => {
  return (
    <View style={styles.settingRow}>
      <Icon name={iconName} size={22} color={Colors.inactiveTab} style={styles.icon} />
      <View style={styles.settingTextContainer}>
        <Text style={styles.settingTitle}>{title}</Text>
        <Text style={styles.settingSubtitle}>{subtitle}</Text>
      </View>
    </View>
  );
};

export default SettingRowTextOnly;

const styles = StyleSheet.create({
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 0.5,
    borderColor: Colors.border,
  },
  icon: {
    width: 30,
  },
  settingTextContainer: {
    flex: 1,
    marginLeft: 10,
  },
  settingTitle: {
    fontSize: Fonts.contactNameSize,
    color: Colors.text,
  },
  settingSubtitle: {
    fontSize: Fonts.subtitleSize,
    color: Colors.subtitle,
  },
});
