import React, { useState } from 'react';
import {
  View,
  Text,
  Switch,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SettingItem from './components/SettingItem';

import Colors from './constants/colors';
import Fonts from './constants/fonts';

const SettingsScreen = () => {
  const [pureBlackMode, setPureBlackMode] = useState(false);
  const [useSystemFont, setUseSystemFont] = useState(true);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="chevron-back" size={28} color={Colors.buttonText} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
      </View>

      <Text style={styles.sectionHeader}>Appearance</Text>

{/* we should be able to change this part */}

      <SettingItem icon="gavel" title="Night Mode" subtitle="System" />

      <View style={styles.settingRow}>
        <Icon name="weather-night" size={22} color={Colors.lightText} style={styles.icon} />
        <View style={styles.settingTextContainer}>
          <Text style={styles.settingTitle}>Pure black night mode</Text>
        </View>
        <Switch
          value={pureBlackMode}
          onValueChange={setPureBlackMode}
          trackColor={{ false: Colors.lightBorder, true: Colors.accentPurple }}
          thumbColor={pureBlackMode ? Colors.buttonText : Colors.grayTextLight}
        />
      </View>
{/* we should be able to change this part */}
      <SettingItem icon="format-size" title="Font size" subtitle="Normal" />

      <SettingItem
  icon="format-text"
  title="Use system font"
  showSwitch={true}
  switchValue={useSystemFont}
  onSwitchChange={setUseSystemFont}
/>

      <Text style={styles.sectionHeader}>General</Text>

      <SettingItem icon="bell-outline" title="Notifications" />
<SettingItem icon="timer-outline" title="Delayed Sending" subtitle="No delay" />
<SettingItem
  icon="gesture-swipe-horizontal"
  title="Swipe actions"
  subtitle="Configure swipe actions for conversations"
/>
    </ScrollView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
    backgroundColor: Colors.darkBackground,
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
    color: Colors.buttonText,
  },
  sectionHeader: {
    color: Colors.accentPurple,
    fontWeight: 'bold',
    fontSize: Fonts.bannerSubSize,
    marginBottom: 10,
    marginTop: 25,
  },
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
