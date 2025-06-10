import React from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../constants/colors';
import Fonts from '../constants/fonts';

const SettingItem = ({
  icon,
  title,
  subtitle,
  showSwitch = false,
  switchValue,
  onSwitchChange,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={onPress ? 0.7 : 1}>
      <View style={styles.settingRow}>
        <Icon name={icon} size={22} color={Colors.lightText} style={styles.icon} />

        <View style={styles.settingTextContainer}>
          <Text style={styles.settingTitle}>{title}</Text>
          {subtitle ? <Text style={styles.settingSubtitle}>{subtitle}</Text> : null}
        </View>

        {showSwitch && (
          <Switch
            value={switchValue}
            onValueChange={onSwitchChange}
            trackColor={{ false: Colors.lightBorder, true: Colors.accentPurple }}
            thumbColor={switchValue ? Colors.buttonText : Colors.grayTextLight}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default SettingItem;

const styles = StyleSheet.create({
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 0.5,
    borderColor: Colors.divider,
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
    color: Colors.buttonText,
  },
  settingSubtitle: {
    fontSize: Fonts.bannerSubSize,
    color: Colors.grayTextLight,
  },
});
