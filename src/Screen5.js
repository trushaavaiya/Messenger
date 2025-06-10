import React from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Fonts from './constants/fonts';
import Colors from './constants/colors';
import { Swipeable } from 'react-native-gesture-handler';

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
    unreadCount: 0,
    avatar: null,
  },
];

const MessagesScreen = () => {
  const renderRightActions = (item) => (
    <TouchableOpacity
      style={styles.deleteAction}
      onPress={() => console.log('Delete message:', item.name)}
    >
      <Icon name="trash-outline" size={24} color="red" />
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => {
    return (
      <Swipeable renderRightActions={() => renderRightActions(item)}>
        <View style={styles.item}>
          <View style={styles.avatarContainer}>
            {item.avatar ? (
              <Image source={item.avatar} style={styles.avatar} resizeMode="cover" />
            ) : (
              <View style={styles.placeholderAvatar}>
                <Icon name="person" size={24} color={Colors.subtitle1} />
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
      </Swipeable>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="menu-outline" size={Fonts.titleSize} color={Colors.text1} />
        <Icon name="person-add-outline" size={Fonts.titleSize} color={Colors.text1} />
      </View>

      <View style={styles.searchBar}>
        <Icon
          name="search-outline"
          size={Fonts.headerFontSize}
          color={Colors.searchIcon}
          style={styles.searchIcon}
        />
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
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.searchbg,
    borderRadius: 20,
    paddingHorizontal: 12,
    height: 40,
    marginBottom: 20,
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
    marginBottom: 16,
  },
  activeTab: {
    marginRight: 20,
    fontWeight: 'bold',
    fontSize: 14,
    color: Colors.addicon,
    borderBottomWidth: 2,
    borderBottomColor: Colors.addicon,
    paddingBottom: 6,
  },
  tab: {
    marginRight: 20,
    fontSize: 14,
    color: Colors.subtitle1,
    paddingBottom: 6,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
    backgroundColor: Colors.background,
  },
  avatarContainer: {
    marginRight: 12,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 12,
  },
  placeholderAvatar: {
    width: 50,
    height: 50,
    borderRadius: 12,
    backgroundColor: Colors.placeholderBg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  messageContent: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontWeight: Fonts.contactNameWeight,
    fontSize: Fonts.contactNameSize,
    color: Colors.text1,
  },
  message: {
    fontSize: Fonts.contactPhoneSize,
    color: Colors.subtitle1,
    marginTop: 4,
  },
  meta: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: 50,
  },
  date: {
    fontSize: 12,
    color: Colors.searchIcon,
  },
  unreadBadge: {
    marginTop: 4,
    backgroundColor: Colors.addicon,
    borderRadius: 12,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  unreadText: {
    color: Colors.buttonText,
    fontSize: 12,
    fontWeight: 'bold',
  },
  deleteAction: {
    backgroundColor: '#FCEAEA',
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: '100%',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
});
