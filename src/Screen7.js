import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  useWindowDimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

import Colors from './constants/colors';
import Fonts from './constants/fonts';

const messagesData = [
  { id: '1', text: "How's the concept?", sender: 'me', date: 'Tomorrow' },
  {
    id: '2',
    text: 'Yea... We need to discuss about it in person!',
    sender: 'other',
    date: 'Tomorrow',
  },
  {
    id: '3',
    text: 'Will catch up tomorrow at Wendy’s 9 in the morning... C ya!',
    sender: 'other',
    date: 'Tomorrow',
  },
  { id: '4', text: 'Good night and tc!', sender: 'other', date: 'Tomorrow' },
  {
    id: '5',
    text: 'Bye! Good night and tc!',
    sender: 'me',
    date: 'Tomorrow',
  },
  {
    id: '6',
    text: 'Don’t be late tomorrow morning... will leave if I don’t see u',
    sender: 'other',
    date: 'Tomorrow',
  },
  {
    id: '7',
    text: 'Hello.! Good morning!',
    sender: 'me',
    date: 'Today',
  },
];

const ChatScreen1 = ({ route, navigation }) => {
  const { name } = route.params;
  const { width } = useWindowDimensions();

  const [messages, setMessages] = useState(messagesData);
  const [input, setInput] = useState('');

  const messagesBeforeToday = messages.filter(m => m.date !== 'Today');
  const todayMessages = messages.filter(m => m.date === 'Today');

  const renderItem = ({ item }) => (
    <View
      style={[
        styles.messageContainer,
        item.sender === 'me' ? styles.messageRight : styles.messageLeft,
        { maxWidth: width * 0.75 },
      ]}
    >
      {item.sender === 'me' ? (
        <LinearGradient
          colors={[Colors.primary, Colors.addicon]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.sentBubbleGradient}
        >
          <Text style={[styles.messageText, styles.messageTextRight]}>{item.text}</Text>
        </LinearGradient>
      ) : (
        <View style={styles.messageLeftBubble}>
          <Text style={styles.messageText}>{item.text}</Text>
        </View>
      )}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-back" size={Fonts.size} color={Colors.text}  onPress={() => {
          navigation.navigate('Screen8');
        }} />
        </TouchableOpacity>

        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>{name}</Text>
        </View>

        <TouchableOpacity>
          <Icon name="person-outline" size={Fonts.size} color={Colors.text} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={messagesBeforeToday}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ padding: 10, paddingBottom: 10 }}
        inverted={false}
      />

      <View style={styles.dateSeparator}>
        <View style={styles.line} />
        <Text style={styles.dateText}>Today</Text>
        <View style={styles.line} />
      </View>

      <FlatList
        data={todayMessages}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingHorizontal: 10, paddingBottom: 20 }}
        inverted={false}
      />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'android' ? 'padding' : 'height'}
        keyboardVerticalOffset={80}
      >
        <View style={styles.messageInputContainer}>
          <TouchableOpacity style={styles.addButton}>
            <Icon name="add" size={Fonts.size} color={Colors.addicon} />
          </TouchableOpacity>
          <TextInput
            style={styles.messageInput}
            placeholder="Type your message here"
            placeholderTextColor={Colors.searchIcon}
            value={input}
            onChangeText={setInput}
          />
          <TouchableOpacity style={styles.sendButton}>
            <Icon name="send" size={22} color={Colors.background} />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>

      
    </SafeAreaView>
  );
};

export default ChatScreen1;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },

  header: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.checkboxUnselected,
  },
  headerTitleContainer: {
    backgroundColor: Colors.checkboxUnselected,
    paddingHorizontal: 26,
    paddingVertical: 6,
    borderRadius: 15,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.text,
  },

  messageContainer: {
    marginVertical: 5,
    borderRadius: 20,
  },
  messageLeft: {
    alignSelf: 'flex-start',
    marginVertical: 15,
  },
  messageRight: {
    alignSelf: 'flex-end',
    marginVertical: 15,
  },

  sentBubbleGradient: {
    padding: 12,
    borderRadius: 20,
    borderTopRightRadius: 0,
  },

  messageLeftBubble: {
    backgroundColor: Colors.back,
    padding: 12,
    borderRadius: 20,
    borderTopLeftRadius: 0,
  },

  messageText: {
    fontSize: 16,
    color: Colors.text,
  },
  messageTextRight: {
    color: 'white',
  },

  dateSeparator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.checkboxUnselected,
  },
  dateText: {
    marginHorizontal: 8,
    color: Colors.subtitle1,
    fontWeight: '600',
  },

  messageInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.background,
    marginHorizontal: 12,
    marginBottom: 10,
    borderRadius: 30,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },

  addButton: {
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: Colors.back,
    borderColor: Colors.addicon,
    borderWidth: 1,
  },

  messageInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: Colors.back,
    borderRadius: 20,
    color: Colors.text,
  },

  sendButton: {
    marginLeft: 10,
    backgroundColor: Colors.addicon,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{ rotate: '-45deg' }],
  },

});
