import React from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from './constants/colors';

const messages = [
  { id: 1, name: '+91 87444 87846', message: 'okay, i will manage', date: '08, Dec', avatar: null },
  { id: 2, name: 'David Tan', message: 'David, i call you later', date: '07, Dec', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
  { id: 3, name: '+91 87123 87123', message: 'okay, i will manage', date: '06, Dec', avatar: null },
  { id: 4, name: 'Michael Jose', message: 'Check out your email.', date: '06, Dec', avatar: 'https://randomuser.me/api/portraits/men/2.jpg' },
  { id: 5, name: 'Sarah Kate', message: 'okay. let’s hang out the day after the...', date: '04, Dec', avatar: 'https://randomuser.me/api/portraits/women/1.jpg' },
];

const MessageApp = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="menu" size={24} color={Colors.addicon} />
        <Icon name="add" size={24} color={Colors.addicon} />
      </View>

      <View style={styles.searchContainer}>
        <Icon name="search-outline" size={20} color={Colors.searchIcon} />
        <TextInput
          placeholder="Search"
          placeholderTextColor={Colors.searchIcon}
          style={styles.searchInput}
        />
      </View>

      <View style={styles.tabs}>
        <TouchableOpacity style={[styles.tab, styles.tabActive]}>
          <Text style={[styles.tabText, styles.tabTextActive]}>All Messages</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Personal</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Business</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.banner}>
        <Text style={styles.bannerTitle}>Love to Message?</Text>
        <Text style={styles.bannerSubtitle}>Make SMS app to your default SMS app</Text>
        <View style={styles.bannerButtons}>
          <TouchableOpacity onPress={() => navigation.navigate('Screen22')}>
            <Text style={styles.changeButton}>CHANGE</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.notNowButton}>NOT NOW</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.messageList}>
        {messages.map((item) => (
          <View style={styles.messageItem} key={item.id}>
            {item.avatar ? (
              <Image source={{ uri: item.avatar }} style={styles.avatar} />
            ) : (
              <View style={styles.avatarPlaceholder}>
                <Icon name="person-outline" size={24} color={Colors.addicon} />
              </View>
            )}
            <View style={styles.messageTextContainer}>
              <Text
                style={[
                  styles.messageName,
                  item.name.startsWith('+91') && { color: Colors.accentPurple },
                ]}
                numberOfLines={1}
              >
                {item.name}
              </Text>
              <Text style={styles.messagePreview} numberOfLines={1}>
                {item.message}
              </Text>
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
    backgroundColor: Colors.darkBackground2,
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  header: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.searchContainerBg,
    paddingHorizontal: 15,
    paddingVertical: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  searchInput: {
    marginLeft: 10,
    flex: 1,
    color: Colors.lightGray,
  },
  tabs: {
    flexDirection: 'row',
    marginTop: 15,
  },
  tab: {
    marginRight: 20,
    paddingBottom: 6,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  tabActive: {
    borderBottomColor: Colors.accentPurple,
  },
  tabText: {
    fontSize: 14,
    color: Colors.inactiveTab,
  },
  tabTextActive: {
    color: Colors.accentPurple,
    fontWeight: 'bold',
  },
  banner: {
    backgroundColor: Colors.bannerBg,
    borderRadius: 12,
    padding: 20,
    marginTop: 25,
  },
  bannerTitle: {
    fontWeight: 'bold',
    fontSize: 15,
    color: Colors.headerText,
    marginBottom: 2,
  },
  bannerSubtitle: {
    fontSize: 13,
    color: Colors.bannerSubtitleColor,
  },
  bannerButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  changeButton: {
    color: Colors.accentPurple,
    marginRight: 20,
    fontWeight: 'bold',
  },
  notNowButton: {
    color: Colors.inactiveTab,
  },
  messageList: {
    marginTop: 20,
    flex: 1,
  },
  messageItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 0,
    backgroundColor: Colors.background2,
    borderRadius: 15,
    padding: 12,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 15,
    marginRight: 15,
  },
  avatarPlaceholder: {
    width: 60,
    height: 60,
    borderRadius: 14,
    backgroundColor: Colors.avatarPlaceholderBg,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  messageTextContainer: {
    flex: 1,
  },
  messageName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: Colors.background,
  },
  messagePreview: {
    color: Colors.messageText,
    marginTop: 3,
  },
  messageDate: {
    fontSize: 12,
    color: Colors.subtitle1,
  },
});
