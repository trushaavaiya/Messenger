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
  <LinearGradient colors={['#6a5afd', '#8360c3']} style={styles.sidebar}>
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

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['#6a5afd', '#8360c3']} style={styles.container}>
        <View style={styles.mainContainer}>
          <Sidebar />
          <View style={styles.rightSideContainer}>
            <View style={styles.ghostSidebar} />
            <View style={styles.messagesPanel}>
              <View style={styles.topBar}>
                <Text style={styles.hamburgerIcon}>☰</Text>
              </View>
              <View style={styles.searchBar}>
                <Text style={styles.searchIcon}>🔍</Text>
                <TextInput
                  placeholder="Search"
                  placeholderTextColor="#ccc"
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
  logo: { fontSize: 40, color: 'white' },
  sidebarTitle: { color: 'white', fontSize: 24, marginTop: 10, marginBottom: 25, fontWeight: '600' },
  menuItem: { fontWeight: '600', fontSize: 16, color: 'white', marginBottom: 15 },
  divider: { borderBottomColor: '#9e9eff66', borderBottomWidth: 1, marginVertical: 20 },

  rightSideContainer: { flex: 2, position: 'relative' },
  ghostSidebar: {
    position: 'absolute',
    top: 80,
    bottom: 100,
    right: 0,
    left: 15,
    backgroundColor: '#ffffff20',
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    zIndex: 0,
    transform: [{ scale: 0.98 }],
  },
  messagesPanel: {
    flex: 0.7,
    top: 100,
    backgroundColor: '#000', // updated to black
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    paddingHorizontal: 20,
    paddingTop: 20,
    marginLeft: 40,
    shadowColor: '#000',
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
    fontSize: 24,
    color: 'white',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    borderRadius: 25,
    width: '100%',
    maxWidth: 400,
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingVertical: 4,
    marginBottom: 15,
  },
  searchIcon: {
    fontSize: 16,
    marginRight: 8,
    color: 'white',
  },
  searchInput: {
    fontSize: 14,
    flex: 1,
    color: 'white',
  },
  tabs: { flexDirection: 'row', marginBottom: 15 },
  activeTab: { marginRight: 15, fontSize: 14, color: '#6a5afd', fontWeight: 'bold' },
  inactiveTab: { fontSize: 14, color: '#ccc' },
  messageList: { paddingVertical: 15 },
  messageItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomColor: '#333',
    borderBottomWidth: 1,
  },
  avatar: { width: 40, height: 40, borderRadius: 10 },
  defaultAvatar: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#2e2e2e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  defaultAvatarIcon: {
    fontSize: 24,
    color: '#6a5afd',
  },
  messageName: { fontWeight: '700', fontSize: 10, color: 'white' },
  messageText: { fontSize: 13, color: '#ccc', marginTop: 2},
});
