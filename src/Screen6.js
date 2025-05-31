import React from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,

  StyleSheet,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from './constants/colors';
import Fonts from './constants/fonts';
const messages = [
  {
    id: '1',
    name: '+91 87444 87846',
    message: 'okay, i will manage',
    date: '08, Dec',
    unreadCount: 2,
    avatar: null,
  },
  {
    id: '2',
    name: 'David Tan',
    message: 'David, i call you later',
    date: '07, Dec',
    unreadCount: 1,
    avatar: require('../image/david.png'),
  },
  {
    id: '3',
    name: '+91 87123 87123',
    message: 'okay, i will manage',
    date: '06, Dec',
    unreadCount: 0,
    avatar: null,
  },
  {
    id: '4',
    name: 'Michael Jose',
    message: 'Check out your email.',
    date: '06, Dec',
    avatar: require('../image/Anaya.png'),
  },
  {
    id: '5',
    name: 'Sarah Kate',
    message: 'okay. let’s hang out the day after the...',
    date: '04, Dec',
    avatar: require('../image/body.png'),
  },
  {
    id: '6',
    name: 'Steven Doe',
    message: 'Yeah sure, you can contact anytime...',
    date: '01, Dec',
    avatar: require('../image/chakudi.png'),
  },
  {
    id: '7',
    name: 'Julia Ambriz',
    message: 'Send me all pics in last night in ws.',
    date: '01, Dec',
    avatar: require('../image/julia.png'),
  },
];

const MessagesScreen = () => {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.messageRow}>
        {item.avatar ? (
          <Image source={item.avatar} style={styles.avatar} />
        ) : (
          <View style={styles.avatarPlaceholder}>
            <Icon name="person-outline" size={Fonts.size} color={Colors.addicon} />
          </View>
        )}
        <View style={styles.messageContent}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.message}>{item.message}</Text>
        </View>
        <View style={styles.meta}>
          <Text style={styles.date}>{item.date}</Text>
          {item.unreadCount > 0 && (
            <View style={styles.unreadBadge}>
              <Text style={styles.unreadText}>{item.unreadCount}</Text>
            </View>
          )}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Icon name="menu-outline" size={Fonts.titleSize} color={Colors.text1} />
        <Icon name="add-outline" size={Fonts.titleSize} color={Colors.text1} />
      </View>

      <View style={styles.searchContainer}>
        <Icon name="search-outline" size={Fonts.headerFontSize} color={Colors.searchIcon} />
        <TextInput
          placeholder="Search"
          placeholderTextColor={Colors.searchIcon}
          style={styles.searchInput}
        />
      </View>

      <View style={styles.tabs}>
        <Text style={styles.activeTab}>All Messages</Text>
        <Text style={styles.tab}>Personal</Text>
        <Text style={styles.tab}>Business</Text>
      </View>

      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 16 }}
      />
    </View>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: 16,
    paddingTop: Fonts.headerFontSize,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Fonts.headerFontSize,
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.searchbg,
    borderRadius: Fonts.headerFontSize,
    paddingHorizontal: 12,
    alignItems: 'center',
    height: 40,
    marginBottom: Fonts.headerFontSize,
  },
  searchInput: {
    marginLeft: 8,
    flex: 1,
    fontSize: Fonts.subtitleSize,
    color: Colors.text1,
  },
  tabs: {
    flexDirection: 'row',
    marginBottom: Fonts.headerFontSize,
  },
  activeTab: {
    color: Colors.addicon,
    fontWeight: 'bold',
    marginRight: 16,
    borderBottomWidth: 2,
    borderColor: Colors.addicon,
    paddingBottom: 4,
  },
  tab: {
    color: Colors.subtitle1,
    marginRight: 16,
  },
  messageRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 12,
  },
  avatarPlaceholder: {
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: Colors.placeholderBg,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  messageContent: {
    flex: 1,
  },
  name: {
    fontWeight: Fonts.contactNameWeight,
    fontSize: Fonts.contactNameSize,
    color: Colors.text1,
  },
  message: {
    fontSize: Fonts.contactPhoneSize,
    color: Colors.subtitle1,
    marginTop: 2,
  },
  meta: {
    alignItems: 'flex-end',
  },
  date: {
    fontSize: 12,
    color: Colors.searchIcon,
  },
  unreadBadge: {
    backgroundColor: Colors.addicon,
    borderRadius: 10,
    width: Fonts.size,
    height: Fonts.size,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 6,
  },
  unreadText: {
    color: Colors.buttonText,
    fontWeight: 'bold',
    fontSize: 12,
  },
});
