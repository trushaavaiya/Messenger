import React from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  useColorScheme,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

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
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  const theme = {
    background: isDarkMode ? '#121212' : '#fff',
    text: isDarkMode ? '#fff' : '#000',
    secondaryText: isDarkMode ? '#aaa' : '#666',
    placeholder: isDarkMode ? '#333' : '#f0f0f0',
    border: isDarkMode ? '#333' : '#eee',
    searchText: isDarkMode ? '#ccc' : '#000',
    inputBg: isDarkMode ? '#1e1e1e' : '#f0f0f0',
    tabInactive: isDarkMode ? '#aaa' : '#888',
  };

  const renderItem = ({ item }) => {
    const isDavidTan = item.name === 'David Tan';

    return (
      <View style={[styles.item, { borderBottomColor: theme.border }]}>
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
          {isDavidTan && (
            <TouchableOpacity style={styles.deleteButton}>
              <Icon name="trash" size={18} color="#fff" />
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  };

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
        <Text style={[styles.activeTab, { borderColor: '#7D45FF', color: '#7D45FF' }]}>All Messages</Text>
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
    backgroundColor: '#7D45FF',
    borderRadius: 12,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  unreadText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  deleteButton: {
    backgroundColor: '#FF3B30',
    borderRadius: 20,
    padding: 6,
  },
});
