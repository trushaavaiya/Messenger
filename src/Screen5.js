import React from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
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
    message: 'send me all picsin last night in ws.',
    date: '03, Dec',
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
      <Swipeable renderRightActions={() => renderRightActions(item)} >
        <View style={styles.item}>
          <View style={styles.avatarContainer}>
            {item.avatar ? (
              <Image source={item.avatar} style={styles.avatar} resizeMode="cover" />
            ) : (
              <View style={styles.placeholderAvatar}>
                <Icon name="person" size={24} color="#aaa" />
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
        <Icon name="menu-outline" size={25} color="#000" />
        <Icon name="person-add-outline" size={25} color="#000" />
      </View>

      <View style={styles.searchBar}>
        <Icon name="search-outline" size={20} color="#999" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#999"
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
    backgroundColor: '#fff',
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
    backgroundColor: '#f0f0f0',
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
    color: '#000',
  },
  tabs: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  activeTab: {
    marginRight: 20,
    fontWeight: 'bold',
    color: '#7D45FF',
    borderBottomWidth: 2,
    borderColor: '#7D45FF',
    paddingBottom: 4,
  },
  tab: {
    marginRight: 20,
    color: '#888',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
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
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  messageContent: {
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#000',
  },
  message: {
    fontSize: 13,
    color: '#666',
    marginTop: 2,
  },
  meta: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: 60,
  },
  date: {
    fontSize: 12,
    color: '#999',
  },
  unreadBadge: {
    backgroundColor: '#7D45FF',
    borderRadius: 10,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4,
  },
  unreadText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  rightTrashIcon: {
    marginTop: 8,
  },
  deleteAction: {
    backgroundColor: 'lightgrey',
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 80,
    borderRadius: 5,
    
  },
});