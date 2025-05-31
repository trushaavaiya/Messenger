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
import Fonts from './constants/fonts';
import Colors from './constants/colors';

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
    message: 'send me all picsin last night in ws.',
    date: '03, Dec',
    unreadCount: 0,
    avatar: null,
  },
];

const MessagesScreen = () => {
  const renderItem = ({ item }) => {
    const isDavidTan = item.name === 'David Tan';

    return (
      <View style={styles.item}>
        <View style={styles.avatarContainer}>
          {item.avatar ? (
            <Image source={item.avatar} style={styles.avatar} resizeMode="cover" />
          ) : (
            <View style={styles.placeholderAvatar}>
              <Icon name="person" size={Fonts.size} color={Colors.subtitle1} />
            </View>
          )}
        </View>

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
      <View style={styles.header}>
        <Icon name="menu-outline" size={Fonts.titleSize} color={Colors.text1} />
        <Icon name="person-add-outline" size={Fonts.titleSize} color={Colors.text1} />
      </View>

      <View style={styles.searchBar}>
        <Icon name="search-outline" size={Fonts.headerFontSize} color={Colors.searchIcon} style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor={Colors.searchIcon}
        />
      </View>

      <View style={styles.tabs}>
        <Text style={styles.activeTab}>All Messages</Text>
        <Text style={styles.tab}>Personal</Text>
        <Text style={styles.tab}>Business</Text>
      </View>

      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
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
    paddingTop: 30,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.searchbg,
    borderRadius: Fonts.headerFontSize,
    paddingHorizontal: 12,
    height: 36,
    marginBottom: Fonts.headerFontSize,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: Fonts.subtitleSize,
    color: Colors.text1,
  },
  tabs: {
    flexDirection: 'row',
    marginBottom: Fonts.headerFontSize,
  },
  activeTab: {
    marginRight: Fonts.headerFontSize,
    fontWeight: 'bold',
    color: Colors.addicon,
    borderBottomWidth: 2,
    borderColor: Colors.addicon,
    paddingBottom: 4,
  },
  tab: {
    marginRight: Fonts.headerFontSize,
    color: Colors.subtitle1,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  avatarContainer: {
    marginRight: 12,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  placeholderAvatar: {
    width: 60,
    height: 60,
    borderRadius: 10,
    backgroundColor: Colors.placeholderBg,
    alignItems: 'center',
    justifyContent: 'center',
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
    justifyContent: 'space-between',
    height: 60,
  },
  date: {
    fontSize: 12,
    color: Colors.searchIcon,
  },
  unreadBadge: {
    backgroundColor: Colors.addicon,
    borderRadius: 12,
    width: Fonts.size,
    height: Fonts.size,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4,
  },
  unreadText: {
    color: Colors.buttonText,
    fontSize: 12,
    fontWeight: 'bold',
  },
  rightTrashIcon: {
    marginTop: 8,
  },
});
