import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Colors from './constants/colors';
import Fonts from './constants/fonts';

const menuItems = [
  { title: 'Inbox' },
  { title: 'Archived' },
  { title: 'Spam' },
  { title: 'Blocked List' },
  { title: 'Scheduled Message' },
  { title: 'Light Mode' },
  { title: 'Settings' },
  { title: 'Send Feedback' },
];

const messages = [
  { id: '1', name: '+91 87444 87846', text: 'okay, i will manage', avatar: null },
  { id: '2', name: 'David Tan', text: 'David, i call you later', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
  { id: '3', name: '+91 87123 87123', text: 'okay, i will manage', avatar: null },
  { id: '4', name: 'Michael Jose', text: 'Check out your email.', avatar: 'https://randomuser.me/api/portraits/men/2.jpg' },
  { id: '5', name: 'Sarah Kate', text: "okay. let's hang out this weekend", avatar: 'https://randomuser.me/api/portraits/women/3.jpg' },
  { id: '6', name: 'Steven Doe', text: 'Yeah sure, you can come!', avatar: 'https://randomuser.me/api/portraits/men/4.jpg' },
  { id: '7', name: 'Julia Ambriz', text: 'Send me all pics in last party', avatar: 'https://randomuser.me/api/portraits/women/5.jpg' },
];

const Sidebar = () => (
  <LinearGradient colors={[Colors.primary, Colors.purple]} style={styles.sidebar}>
    <View style={styles.logoContainer}>
      <Text style={styles.logo}>💬</Text>
      <Text style={styles.sidebarTitle}>Messages</Text>
    </View>
    <View style={styles.divider} />
    <View>
      {menuItems.slice(0, 5).map((item) => (
        <Text key={item.title} style={styles.menuItem}>{item.title}</Text>
      ))}
    </View>
    <View style={styles.divider} />
    <View>
      {menuItems.slice(5).map((item) => (
        <Text key={item.title} style={styles.menuItem}>{item.title}</Text>
      ))}
    </View>
  </LinearGradient>
);

const MessageItem = ({ item }) => (
  <TouchableOpacity style={styles.messageItem}>
    {item.avatar ? (
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
    ) : (
      <View style={styles.defaultAvatar}>
        <Text style={styles.defaultAvatarIcon}>👤</Text>
      </View>
    )}
    <View style={{ marginLeft: 12 }}>
      <Text style={styles.messageName}>{item.name}</Text>
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  </TouchableOpacity>
);

export default function App({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={[Colors.primary, Colors.purple]} style={styles.container}>
        <View style={styles.mainContainer}>
          <Sidebar />
          <View style={styles.rightSideContainer}>
            <View style={styles.ghostSidebar} />
            <View style={styles.messagesPanel}>
              <View style={styles.topBar}>
                <TouchableOpacity onPress={() => navigation.navigate('Screen15')}>
                <Text style={styles.hamburgerIcon}>☰</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.searchBar}>
                <Text style={styles.searchIcon}>🔍</Text>
                <TextInput
                  placeholder="Search"
                  placeholderTextColor={Colors.searchIcon}
                  style={styles.searchInput}
                />
              </View>
              <View style={styles.tabs}>
                <Text style={styles.activeTab}>All Messages</Text>
                <Text style={styles.inactiveTab}>Personal</Text>
              </View>
              <FlatList
                data={messages}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <MessageItem item={item} />}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.messageList}
              />
            </View>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  mainContainer: { flexDirection: 'row', flex: 1 },
  sidebar: {
    flex: 1,
    padding: 25,
    justifyContent: 'flex-start',
  },
  logoContainer: { alignItems: 'center', marginBottom: -20, marginTop: 60 },
  logo: { fontSize: 40, color: Colors.buttonText },
  sidebarTitle: {
    color: Colors.buttonText,
    fontSize: Fonts.titleSize,
    marginTop: 10,
    marginBottom: 25,
    fontWeight: Fonts.headerFontWeight,
  },
  menuItem: {
    fontWeight: Fonts.contactNameWeight,
    fontSize: Fonts.contactNameSize,
    color: Colors.buttonText,
    marginBottom: 15,
  },
  divider: {
    borderBottomColor: Colors.bottomcolor,
    borderBottomWidth: 1,
    marginVertical: 20,
  },
  rightSideContainer: { flex: 2, position: 'relative' },
  ghostSidebar: {
    position: 'absolute',
    top: 80,
    bottom: 100,
    right: 0,
    left: 15,
    backgroundColor: Colors.background1,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    zIndex: 0,
    transform: [{ scale: 0.98 }],
  },
  messagesPanel: {
    flex: 0.7,
    top: 100,
    backgroundColor: Colors.text1,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    paddingHorizontal: 20,
    paddingTop: 20,
    marginLeft: 40,
    shadowColor: Colors.text1,
    shadowOffset: { width: -3, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 10,
    zIndex: 1,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 10,
  },
  hamburgerIcon: {
    fontSize: Fonts.headerFontSize,
    color: Colors.buttonText,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.background2,
    borderRadius: 25,
    width: '100%',
    maxWidth: 400,
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingVertical: 4,
    marginBottom: 15,
  },
  searchIcon: {
    fontSize: Fonts.searchFontSize,
    marginRight: 8,
    color: Colors.buttonText,
  },
  searchInput: {
    fontSize: Fonts.searchFontSize,
    flex: 1,
    color: Colors.buttonText,
  },
  tabs: { flexDirection: 'row', marginBottom: 15 },
  activeTab: {
    marginRight: 15,
    fontSize: Fonts.tabFontSize,
    color: Colors.primary,
    fontWeight: 'bold',
  },
  inactiveTab: {
    fontSize: Fonts.tabFontSize,
    color: Colors.inactiveTab,
  },
  messageList: { paddingVertical: 15 },
  messageItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomColor: Colors.text,
    borderBottomWidth: 1,
  },
  avatar: { width: 40, height: 40, borderRadius: 10 },
  defaultAvatar: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: Colors.background3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  defaultAvatarIcon: {
    fontSize: Fonts.size,
    color: Colors.primary,
  },
  messageName: {
    fontWeight: Fonts.contactNameWeight,
    fontSize: Fonts.contactPhoneSize,
    color: Colors.buttonText,
  },
  messageText: {
    fontSize: Fonts.contactPhoneSize,
    color: Colors.messageText,
    marginTop: 2,
  },
});
