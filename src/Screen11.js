import React, { useState } from 'react';
import {
  View,
  Text,
  Switch,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Colors from './constants/colors';
import Fonts from './constants/fonts';

const SettingsScreen = () => {
  const [pureBlackMode, setPureBlackMode] = useState(false);
  const [useSystemFont, setUseSystemFont] = useState(true);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="chevron-left" size={Fonts.size} color={Colors.headerText} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
      </View>

      <Text style={styles.sectionHeader}>Appearance</Text>

      <View style={styles.settingRow}>
        <Icon name="gavel" size={22} color={Colors.inactiveTab} style={styles.icon} />
        <View style={styles.settingTextContainer}>
          <Text style={styles.settingTitle}>Night Mode</Text>
          <Text style={styles.settingSubtitle}>System</Text>
        </View>
      </View>

      <View style={styles.settingRow}>
        <Icon name="weather-night" size={22} color={Colors.inactiveTab} style={styles.icon} />
        <View style={styles.settingTextContainer}>
          <Text style={styles.settingTitle}>Pure black night mode</Text>
        </View>
        <Switch
          value={pureBlackMode}
          onValueChange={setPureBlackMode}
          trackColor={{ false: Colors.checkboxUnselected, true: Colors.primary }}
          thumbColor={pureBlackMode ? Colors.buttonText : Colors.subtitle}
        />
      </View>

      <View style={styles.settingRow}>
        <Icon name="format-size" size={22} color={Colors.inactiveTab} style={styles.icon} />
        <View style={styles.settingTextContainer}>
          <Text style={styles.settingTitle}>Font size</Text>
          <Text style={styles.settingSubtitle}>Normal</Text>
        </View>
      </View>

      <View style={styles.settingRow}>
        <Icon name="format-text" size={22} color={Colors.inactiveTab} style={styles.icon} />
        <View style={styles.settingTextContainer}>
          <Text style={styles.settingTitle}>Use system font</Text>
        </View>
        <Switch
          value={useSystemFont}
          onValueChange={setUseSystemFont}
          trackColor={{ false: Colors.checkboxUnselected, true: Colors.primary }}
          thumbColor={useSystemFont ? Colors.buttonText : Colors.subtitle}
        />
      </View>

      <Text style={styles.sectionHeader}>General</Text>

      <View style={styles.settingRow}>
        <Icon name="bell-outline" size={22} color={Colors.inactiveTab} style={styles.icon} />
        <View style={styles.settingTextContainer}>
          <Text style={styles.settingTitle}>Notifications</Text>
        </View>
      </View>

      <View style={styles.settingRow}>
        <Icon name="timer-outline" size={22} color={Colors.inactiveTab} style={styles.icon} />
        <View style={styles.settingTextContainer}>
          <Text style={styles.settingTitle}>Delayed Sending</Text>
          <Text style={styles.settingSubtitle}>No delay</Text>
        </View>
      </View>

      <View style={styles.settingRow}>
        <Icon name="gesture-swipe-horizontal" size={22} color={Colors.inactiveTab} style={styles.icon} />
        <View style={styles.settingTextContainer}>
          <Text style={styles.settingTitle}>Swipe actions</Text>
          <Text style={styles.settingSubtitle}>
            Configure swipe actions for conversations
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
    backgroundColor: Colors.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  headerTitle: {
    fontSize: Fonts.headerFontSize,
    fontWeight: Fonts.headerFontWeight,
    marginLeft: 20,
    color: Colors.headerText,
  },
  sectionHeader: {
    color: Colors.primary,
    fontWeight: 'bold',
    fontSize: Fonts.subtitleSize,
    marginBottom: 10,
    marginTop: 10,
  },
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
