import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; 

const BackupRestoreScreen = () => {
  const [isBackingUp, setIsBackingUp] = useState(true);
  const [progress, setProgress] = useState(0.4);

  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="chevron-back" size={26} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Backup and restore</Text>
      </View>

      
      <View style={styles.section}>
        <Icon name="cloud-upload-outline" size={24} color="#000" />
        <View style={styles.textContainer}>
          <Text style={styles.heading}>Backing up Messages</Text>
          <Text style={styles.subtext}>Saving backup....</Text>
          {isBackingUp && (
            <View style={styles.progressRow}>
              <View style={styles.progressBarBackground}>
                <View style={[styles.progressBarFill, { width: `${progress * 100}%` }]} />
              </View>
              <TouchableOpacity onPress={() => setIsBackingUp(false)}>
                <Icon name="close" size={20} color="#444" />
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>

      
      <View style={styles.section}>
        <Icon name="people-outline" size={24} color="#000" />
        <View style={styles.textContainer}>
          <Text style={styles.heading}>Last Backup</Text>
          <Text style={styles.subtext}>Never</Text>
        </View>
      </View>

     
      <View style={styles.section}>
        <Icon name="cloud-download-outline" size={24} color="#000" />
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
