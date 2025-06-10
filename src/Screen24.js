import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Colors from './constants/colors';
import Fonts from './constants/fonts';
import BackupItem from './components/BackupItem';

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

      {isBackingUp && (
        <BackupItem
          icon="cloud-upload-outline"
          title="Backing up Messages"
          subtitle="Saving backup...."
          showProgress={true}
          progress={progress}
          onCancel={() => setIsBackingUp(false)}
        />
      )}

      <BackupItem
        icon="people-outline"
        title="Last Backup"
        subtitle="Never"
      />

      <BackupItem
        icon="cloud-download-outline"
        title="Restore"
        subtitle="Select a backup"
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
  footerText: {
    marginTop: 40,
    fontSize: Fonts.bannerSubSize,
    color: Colors.grayTextLight,
  },
});
