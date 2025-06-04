import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Colors from './constants/colors';
import Fonts from './constants/fonts';

const BackupRestoreScreen = () => {
  const [isBackingUp, setIsBackingUp] = useState(true);
  const [progress, setProgress] = useState(0.4);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="chevron-back" size={26} color={Colors.buttonText} />
        </TouchableOpacity>
        <Text style={styles.title}>Backup and restore</Text>
      </View>

      <View style={styles.section}>
        <Icon name="cloud-upload-outline" size={24} color={Colors.buttonText} />
        <View style={styles.textContainer}>
          <Text style={styles.heading}>Backing up Messages</Text>
          <Text style={styles.subtext}>Saving backup....</Text>
          {isBackingUp && (
            <View style={styles.progressRow}>
              <View style={styles.progressBarBackground}>
                <View style={[styles.progressBarFill, { width: `${progress * 100}%` }]} />
              </View>
              <TouchableOpacity onPress={() => setIsBackingUp(false)}>
                <Icon name="close" size={20} color={Colors.grayTextLight} />
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>

      <View style={styles.section}>
        <Icon name="people-outline" size={24} color={Colors.buttonText} />
        <View style={styles.textContainer}>
          <Text style={styles.heading}>Last Backup</Text>
          <Text style={styles.subtext}>Never</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Icon name="cloud-download-outline" size={24} color={Colors.buttonText} />
        <View style={styles.textContainer}>
          <Text style={styles.heading}>Restore</Text>
          <Text style={styles.subtext}>Select a backup</Text>
        </View>
      </View>

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
    backgroundColor: Colors.darkBackground,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  title: {
    fontSize: Fonts.headerFontSize,
    fontWeight: Fonts.headerFontWeight,
    color: Colors.buttonText,
    marginLeft: 10,
  },
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
  footerText: {
    marginTop: 40,
    fontSize: Fonts.bannerSubSize,
    color: Colors.grayTextLight,
  },
});
