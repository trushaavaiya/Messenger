import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  useWindowDimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Colors from './constants/colors';
import Fonts from './constants/fonts';

const data = [
  {
    id: '1',
    name: '+91 87444 87846',
    lastMessage: 'okay, i will manage',
    date: '08, Dec',
    avatar: null,
    unread: false,
  },
  {
    id: '2',
    name: 'David Tan',
    lastMessage: 'David, i call you later',
    date: '07, Dec',
    avatar: require('../image/david.png'),
    unread: false,
  },
  {
    id: '3',
    name: '+91 87123 87123',
    lastMessage: 'okay, i will manage',
    date: '06, Dec',
    avatar: null,
    unread: false,
  },
  {
    id: '4',
    name: 'Michael Jose',
    lastMessage: 'Check out your email.',
    date: '06, Dec',
    avatar: require('../image/Anaya.png'),
    unread: false,
  },
  {
    id: '5',
    name: 'Sarah Kate',
    lastMessage: 'okay. let’s hang out the day after the...',
    date: '04, Dec',
    avatar: require('../image/body.png'),
    unread: false,
  },
  {
    id: '6',
    name: 'Steven Doe',
    lastMessage: 'Yeah sure, you can contact anytime...',
    date: '01, Dec',
    avatar: require('../image/chakudi.png'),
    unread: false,
  },
  {
    id: '7',
    name: 'Julia Ambriz',
    lastMessage: 'Send me all pics in last night in ws',
    date: '01, Dec',
    avatar: require('../image/julia.png'),
    unread: false,
  },
];

const tabs = ['All Messages', 'Personal', 'Business'];

const ChatListScreen = () => {
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState('All Messages');
  const { height } = useWindowDimensions();

  const dynamicFontSize = height * 0.022;
  const dynamicSmallFontSize = height * 0.016;
  const dynamicDateFontSize = height * 0.013;

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.avatarContainer}>
        {item.avatar ? (
          <Image source={item.avatar} style={styles.avatar} />
        ) : (
          <View style={styles.placeholderAvatar}>
            <Icon name="person-outline" size={Fonts.titleSize} color={Colors.accentPurple} />
          </View>
        )}
      </View>
      <View style={styles.messageContainer}>
        <Text
          style={[
            styles.name,
            {
              color: item.unread ? Colors.accentPurple : Colors.buttonText,
              fontSize: dynamicFontSize,
              fontFamily: Fonts.bold,
            },
          ]}
          numberOfLines={1}
        >
          {item.name}
        </Text>
        <Text
          style={[
            styles.lastMessage,
            {
              fontSize: dynamicSmallFontSize,
              fontFamily: Fonts.regular,
            },
          ]}
          numberOfLines={1}
        >
          {item.lastMessage}
        </Text>
      </View>
      <Text
        style={[
          styles.dateText,
          {
            fontSize: dynamicDateFontSize,
            fontFamily: Fonts.regular,
          },
        ]}
      >
        {item.date}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="menu-outline" size={Fonts.titleSize} color={Colors.accentPurple} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="add-outline" size={Fonts.titleSize} color={Colors.accentPurple} />
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <Icon
          name="search-outline"
          size={20}
          color={Colors.searchIcon}
          style={{ marginRight: 8 }}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor={Colors.lightText}
          value={search}
          onChangeText={setSearch}
        />
      </View>

      <View style={styles.tabsContainer}>
        {tabs.map(tab => (
          <TouchableOpacity
            key={tab}
            onPress={() => setActiveTab(tab)}
            style={styles.tab}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === tab && styles.activeTabText,
              ]}
            >
              {tab}
            </Text>
            {activeTab === tab && <View style={styles.tabUnderline} />}
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={filteredData}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 8 }}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default ChatListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darkBackground,
  },
  header: {
    height: 60,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.background2,
    marginHorizontal: 16,
    borderRadius: 20,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginVertical: 10,
    height: 40,
  },
  searchInput: {
    flex: 1,
    fontSize: Fonts.searchFontSize,
    color: Colors.buttonText,
  },
  tabsContainer: {
    flexDirection: 'row',
    marginHorizontal: 16,
    justifyContent: 'flex-start',
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightBorder,
  },
  tab: {
    alignItems: 'center',
    paddingBottom: 8,
    flex: 1,
  },
  tabText: {
    color: Colors.inactiveTab,
    fontWeight: '600',
    fontSize: Fonts.tabFontSize,
  },
  activeTabText: {
    color: Colors.accentPurple,
    fontWeight: '700',
  },
  tabUnderline: {
    marginTop: 4,
    height: 3,
    width: '60%',
    backgroundColor: Colors.accentPurple,
    borderRadius: 2,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: Colors.divider,
  },
  avatarContainer: {
    marginRight: 12,
  },
  avatar: {
    width: 55,
    height: 55,
    borderRadius: 10,
  },
  placeholderAvatar: {
    width: 55,
    height: 55,
    borderRadius: 10,
    backgroundColor: Colors.background3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageContainer: {
    flex: 1,
  },
  name: {
    fontWeight: '600',
  },
  lastMessage: {
    color: Colors.messageText,
    marginTop: 2,
  },
  dateText: {
    color: Colors.lightText,
    marginLeft: 10,
  },
});
