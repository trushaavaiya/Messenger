import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; 

import SettingSection from './components/SettingSection';

import Fonts from './constants/fonts';
import Colors from './constants/colors';

const BackupRestoreScreen = ({navigation}) => {
  const [isBackingUp, setIsBackingUp] = useState(true);
  const [progress, setProgress] = useState(0.4);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={()=>navigation.navigate('Screen13')}>
          <Icon name="chevron-back" size={26} color={Colors.text1} />
        </TouchableOpacity>
        <Text style={styles.title}>Backup and restore</Text>
      </View>

        <SettingSection
        iconName="cloud-upload-outline"
        heading="Backing up Messages"
        subtext="Saving backup...."
      >
          {isBackingUp && (
            <View style={styles.progressRow}>
              <View style={styles.progressBarBackground}>
                <View style={[styles.progressBarFill, { width: `${progress * 100}%` }]} />
              </View>
              <TouchableOpacity onPress={() => setIsBackingUp(false)}>
                <Icon name="close" size={20} color={Colors.subtitle1} />
              </TouchableOpacity>
            </View>
          )}
          </SettingSection>

       <SettingSection
        iconName="people-outline"
        heading="Last Backup"
        subtext="Never"
      />

      <SettingSection
        iconName="cloud-download-outline"
        heading="Restore"
        subtext="Select a backup"
      />

      <Text style={styles.footerText}>
        Currently, only SMS is supported by backup and restore.{"\n"}
        MMS support and scheduled backups will be coming soon!
      </Text>
    </View>
  );
};
export default BackupRestoreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  title: {
    fontSize: Fonts.headerFontSize,
    fontWeight: Fonts.headerFontWeight,
    color: Colors.text1,
    marginLeft: 10,
    fontFamily: Fonts.regular,
  },
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
  progressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  progressBarBackground: {
    flex: 1,
    height: 6,
    backgroundColor: Colors.borderline,
    borderRadius: 4,
    marginRight: 10,
  },
  progressBarFill: {
    height: 6,
    backgroundColor: Colors.primary,
    borderRadius: 4,
  },
  footerText: {
    marginTop: 40,
    fontSize: Fonts.bannerSubSize,
    color: Colors.subtitle,
    fontFamily: Fonts.regular,
  },
});
