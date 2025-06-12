import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  useColorScheme,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Swipeable } from 'react-native-gesture-handler';

import Colors from './constants/colors';

const initialMessages = [
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
    message: 'send me all pics in last night in ws.',
    date: '03, Dec',
    unreadCount: 0,
    avatar: null,
  },
];

const MessagesScreen = ({navigation}) => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  const theme = {
    background: isDarkMode ? Colors.darkBackground : Colors.background,
    text: isDarkMode ? Colors.buttonText : Colors.text,
    secondaryText: isDarkMode ? Colors.lightText : Colors.subtitle,
    placeholder: isDarkMode ? Colors.lightBorder : Colors.placeholderBg,
    border: isDarkMode ? Colors.lightBorder : Colors.border,
    searchText: isDarkMode ? Colors.lightText : Colors.text,
    inputBg: isDarkMode ? Colors.background3 : Colors.searchbg,
    tabInactive: isDarkMode ? Colors.lightText : Colors.inactiveTab,
  };

  const [messages, setMessages] = useState(initialMessages);
  const swipeableRefs = useRef(new Map());

  const closeAllSwipeables = () => {
    swipeableRefs.current.forEach((ref) => {
      if (ref && ref.close) {
        ref.close();
      }
    });
  };

  const handleDelete = (id) => {
    Alert.alert(
      'Delete Message',
      'Are you sure you want to delete this message?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            setMessages((prevMessages) =>
              prevMessages.filter((message) => message.id !== id)
            );
          },
        },
      ],
      { cancelable: true }
    );
  };

  const renderRightActions = (item) => (
    <TouchableOpacity
      style={styles.deleteButtonSwipe}
      onPress={() => handleDelete(item.id)}
    >
      <Icon name="trash-outline" size={24} color={Colors.buttonText} />
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => (
      <TouchableOpacity onPress={() => navigation.navigate('Screen19', { name: item.name })}>

    <Swipeable
      ref={(ref) => {
        if (ref && item.id) {
          swipeableRefs.current.set(item.id, ref);
        }
      }}
      renderRightActions={() => renderRightActions(item)}
      onSwipeableWillOpen={() => {
        swipeableRefs.current.forEach((ref, key) => {
          if (key !== item.id && ref && ref.close) {
            ref.close();
          }
        });
      }}
    >
      <View style={[styles.item, { borderBottomColor: theme.border, backgroundColor: theme.background }]}>
        <View style={styles.avatarContainer}>
          {item.avatar ? (
            <Image source={item.avatar} style={styles.avatar} resizeMode="cover" />
          ) : (
            <View style={[styles.placeholderAvatar, { backgroundColor: theme.placeholder }]}>
              <Icon name="person" size={24} color={theme.secondaryText} />
            </View>
          )}
        </View>

        <View style={styles.messageContent}>
          <Text style={[styles.name, { color: theme.text }]}>{item.name}</Text>
          <Text style={[styles.message, { color: theme.secondaryText }]} numberOfLines={1}>
            {item.message}
          </Text>
        </View>

        <View style={styles.meta}>
          <Text style={[styles.date, { color: theme.secondaryText }]}>{item.date}</Text>
          {item.unreadCount > 0 && (
            <View style={styles.unreadBadge}>
              <Text style={styles.unreadText}>{item.unreadCount}</Text>
            </View>
          )}
        </View>
      </View>
    </Swipeable>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.header}>
        <Icon name="menu-outline" size={28} color={theme.text} />
        <Icon name="person-add-outline" size={28} color={theme.text} />
      </View>

      <View style={[styles.searchBar, { backgroundColor: theme.inputBg }]}>
        <Icon name="search-outline" size={20} color={theme.secondaryText} style={styles.searchIcon} />
        <TextInput
          style={[styles.searchInput, { color: theme.searchText }]}
          placeholder="Search"
          placeholderTextColor={theme.secondaryText}
        />
      </View>

      <View style={styles.tabs}>
        <Text style={[styles.activeTab, { borderColor: Colors.addicon, color: Colors.addicon }]}>All Messages</Text>
        <Text style={[styles.tab, { color: theme.tabInactive }]}>Personal</Text>
        <Text style={[styles.tab, { color: theme.tabInactive }]}>Business</Text>
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
    borderRadius: 20,
    paddingHorizontal: 12,
    height: 36,
    marginBottom: 20,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
  },
  tabs: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  activeTab: {
    marginRight: 20,
    fontWeight: 'bold',
    borderBottomWidth: 2,
    paddingBottom: 4,
  },
  tab: {
    marginRight: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    gap: 12,
  },
  avatarContainer: {
    width: 60,
    height: 60,
    borderRadius: 10,
    overflow: 'hidden',
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  placeholderAvatar: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  messageContent: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  message: {
    fontSize: 13,
    marginTop: 2,
  },
  meta: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    paddingLeft: 6,
  },
  date: {
    fontSize: 12,
  },
  unreadBadge: {
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
  deleteButtonSwipe: {
    backgroundColor: Colors.deleteRed,
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    marginVertical: 8,
    borderRadius: 10,
  },
});
