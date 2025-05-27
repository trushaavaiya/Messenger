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

const SettingsScreen = () => {
  const [pureBlackMode, setPureBlackMode] = useState(false);
  const [useSystemFont, setUseSystemFont] = useState(true);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-left" size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
      </View>

      <Text style={styles.sectionHeader}>Appearance</Text>

      <View style={styles.settingRow}>
        <Icon name="gavel" size={22} color="#888" style={styles.icon} />
        <View style={styles.settingTextContainer}>
          <Text style={styles.settingTitle}>Night Mode</Text>
          <Text style={styles.settingSubtitle}>System</Text>
        </View>
      </View>

      <View style={styles.settingRow}>
        <Icon name="weather-night" size={22} color="#888" style={styles.icon} />
        <View style={styles.settingTextContainer}>
          <Text style={styles.settingTitle}>Pure black night mode</Text>
        </View>
        <Switch
          value={pureBlackMode}
          onValueChange={setPureBlackMode}
          trackColor={{ false: '#ccc', true: '#5A31F4' }}
          thumbColor={pureBlackMode ? '#fff' : '#f4f3f4'}
        />
      </View>

      <View style={styles.settingRow}>
        <Icon name="format-size" size={22} color="#888" style={styles.icon} />
        <View style={styles.settingTextContainer}>
          <Text style={styles.settingTitle}>Font size</Text>
          <Text style={styles.settingSubtitle}>Normal</Text>
        </View>
      </View>

      <View style={styles.settingRow}>
        <Icon name="format-text" size={22} color="#888" style={styles.icon} />
        <View style={styles.settingTextContainer}>
          <Text style={styles.settingTitle}>Use system font</Text>
        </View>
        <Switch
          value={useSystemFont}
          onValueChange={setUseSystemFont}
          trackColor={{ false: '#ccc', true: '#5A31F4' }}
          thumbColor={useSystemFont ? '#fff' : '#f4f3f4'}
        />
      </View>

      <Text style={styles.sectionHeader}>General</Text>

      <View style={styles.settingRow}>
        <Icon name="bell-outline" size={22} color="#888" style={styles.icon} />
        <View style={styles.settingTextContainer}>
          <Text style={styles.settingTitle}>Notifications</Text>
        </View>
      </View>

      <View style={styles.settingRow}>
        <Icon name="timer-outline" size={22} color="#888" style={styles.icon} />
        <View style={styles.settingTextContainer}>
          <Text style={styles.settingTitle}>Delayed Sending</Text>
          <Text style={styles.settingSubtitle}>No delay</Text>
        </View>
      </View>

      <View style={styles.settingRow}>
        <Icon name="gesture-swipe-horizontal" size={22} color="#888" style={styles.icon} />
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