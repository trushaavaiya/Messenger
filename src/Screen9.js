import React from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Colors from './constants/colors';
import Fonts from './constants/fonts';

const messages = [
  { name: '+91 87444 87846', message: 'okay, i will manage', date: '08, Dec' },
  { name: 'David Tan', message: 'David, i call you later', date: '07, Dec', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
  { name: '+91 87123 87123', message: 'okay, i will manage', date: '06, Dec' },
  { name: 'Michael Jose', message: 'Check out your email.', date: '06, Dec', avatar: 'https://randomuser.me/api/portraits/men/2.jpg' },
  { name: 'Sarah Kate', message: 'okay. let’s hang out the day after the...', date: '04, Dec', avatar: 'https://randomuser.me/api/portraits/women/1.jpg' },
  { name: 'Sarah Kate', message: 'okay. let’s hang out the day after the...', date: '04, Dec', avatar: 'https://randomuser.me/api/portraits/women/1.jpg' },
];

const MessageApp = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="menu" size={25} color={Colors.text} />
        <Text style={styles.headerTitle}>Messages</Text>
        <Icon name="add" size={25} color={Colors.addicon} />
      </View>

      <View style={styles.searchContainer}>
        <Icon name="search-outline" size={20} color={Colors.searchIcon} />
        <TextInput
          placeholder="Search"
          style={styles.searchInput}
          placeholderTextColor={Colors.text}
        />
      </View>

      <View style={styles.tabs}>
        <Text style={[styles.tab, styles.tabActive]}>All Messages</Text>
        <Text style={styles.tab}>Personal</Text>
        <Text style={styles.tab}>Business</Text>
      </View>

      <View style={styles.banner}>
        <Text style={styles.bannerText}>Love to Message?</Text>
        <Text style={styles.bannerSubText}>Make SMS app to your default SMS app</Text>
        <View style={styles.bannerActions}>
          <TouchableOpacity><Text style={styles.changeText}>CHANGE</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.notNowText}>NOT NOW</Text></TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.messageList}>
        {messages.map((item, index) => (
          <View style={styles.messageItem} key={index}>
            {item.avatar ? (
              <Image source={{ uri: item.avatar }} style={styles.avatar} />
            ) : (
              <View style={styles.avatarPlaceholder}>
                <Icon name="person-outline" size={24} color={Colors.inactiveTab} />
              </View>
            )}
            <View style={styles.messageTextContainer}>
              <Text style={styles.messageName}>{item.name}</Text>
              <Text style={styles.messagePreview}>{item.message}</Text>
            </View>
            <Text style={styles.messageDate}>{item.date}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default MessageApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 10,
    backgroundColor: Colors.background,
  },
  header: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: Fonts.headerFontSize,
    fontWeight: Fonts.headerFontWeight,
    color: Colors.text,
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.searchbg,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  searchInput: {
    marginLeft: 10,
    flex: 1,
    fontSize: Fonts.searchFontSize,
    color: Colors.text,
    fontFamily: Fonts.regular,
  },
  tabs: {
    flexDirection: 'row',
    marginTop: 15,
  },
  tab: {
    marginRight: 20,
    fontSize: Fonts.tabFontSize,
    color: Colors.inactiveTab,
    fontFamily: Fonts.regular,
  },
  tabActive: {
    color: Colors.headerText,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  banner: {
    backgroundColor: Colors.banner,
    borderRadius: 12,
    padding: 25,
    marginTop: 25,
  },
  bannerText: {
    fontWeight: 'bold',
    fontSize: Fonts.bannerTitleSize,
    marginBottom: 2,
    color: Colors.text,
  },
  bannerSubText: {
    fontSize: Fonts.bannerSubSize,
    color: Colors.subtitle1,
  },
  bannerActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  changeText: {
    color: Colors.addicon,
    marginRight: 20,
    fontWeight: 'bold',
    fontSize: Fonts.bannerSubSize,
  },
  notNowText: {
    color: Colors.inactiveTab,
    fontSize: Fonts.bannerSubSize,
  },
  messageList: {
    marginTop: 20,
    flex: 1,
  },
  messageItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 10,
  },
  avatarPlaceholder: {
    width: 60,
    height: 60,
    borderRadius: 10,
    backgroundColor: Colors.back,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  messageTextContainer: {
    flex: 1,
  },
  messageName: {
    fontWeight: '600',
    fontSize: Fonts.contactNameSize,
    color: Colors.text,
    fontFamily: Fonts.bold,
  },
  messagePreview: {
    color: Colors.messageText,
    fontSize: Fonts.contactPhoneSize,
    fontFamily: Fonts.regular,
  },
  messageDate: {
    fontSize: Fonts.messageDateSize,
    color: Colors.subtitle1,
  },
});
