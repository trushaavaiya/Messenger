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
            <Icon name="person-outline" size={24} color="#7D45FF" />
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
        <Icon name="menu-outline" size={28} color="#000" />
        <Icon name="add-outline" size={28} color="#000" />
      </View>

      <View style={styles.searchContainer}>
        <Icon name="search-outline" size={20} color="#888" />
        <TextInput
          placeholder="Search"
          placeholderTextColor="#888"
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

