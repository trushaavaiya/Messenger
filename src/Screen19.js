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
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

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
    text: 'Will catch up tomorrow at wendy’s 9 in the morning... C ya!',
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

const ChatScreen = () => {
  const [input, setInput] = useState('');

  const renderItem = ({ item, index }) => {
    const showDate =
      index === 0 || item.date !== messagesData[index - 1].date;

    return (
      <View>
        {showDate && (
          <View style={styles.dateSeparator}>
            <View style={styles.separatorLine} />
            <Text style={styles.dateText}>{item.date}</Text>
            <View style={styles.separatorLine} />
          </View>
        )}

        <View
          style={[
            styles.messageContainer,
            item.sender === 'me' ? styles.rightAlign : styles.leftAlign,
          ]}
        >
          {item.sender === 'me' ? (
            <LinearGradient
              colors={['#9D4EDD', '#7D45FF']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.sentBubble}
            >
              <Text style={styles.sentText}>{item.text}</Text>
            </LinearGradient>
          ) : (
            <View style={styles.receivedBubble}>
              <Text style={styles.receivedText}>{item.text}</Text>
            </View>
          )}
        </View>
      </View>
    );
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'android' ? 'padding' : null}
      keyboardVerticalOffset={80}
    >
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Icon name="chevron-back" size={28} color="#fff" />
        </TouchableOpacity>

        <View style={styles.nameBox}>
          <Text style={styles.title}>Aajaybhai</Text>
        </View>

        <TouchableOpacity style={styles.avtar}>
          <Icon name="person" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={messagesData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 16 }}
      />

      <View style={styles.inputContainer}>
        <View style={styles.inputBox}>
          <Icon name="add-outline" size={22} color="yellow" style={styles.leftIcon} />
          <TextInput
            style={styles.textInput}
            placeholder="Type your message"
            placeholderTextColor="#ccc"
            value={input}
            onChangeText={setInput}
          />
          <TouchableOpacity style={styles.sendButton}>
                      <Icon name="send" size={22} color="white" />
        </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    paddingTop: 20,
    paddingBottom: 12,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backButton: {
    padding: 4,
  },
  nameBox: {
    flex: 1,
    alignItems: 'center',
  },
  avtar: {
    padding: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
  messageContainer: {
    marginVertical: 12,
    flexDirection: 'row',
  },
  leftAlign: {
    justifyContent: 'flex-start',
  },
  rightAlign: {
    justifyContent: 'flex-end',
  },
  sentBubble: {
    padding: 12,
    borderRadius: 18,
    maxWidth: '80%',
    borderBottomRightRadius: 0,
  },
  sentText: {
    color: '#fff',
    fontSize: 14,
  },
  receivedBubble: {
    backgroundColor: '#222',
    padding: 12,
    borderRadius: 18,
    maxWidth: '80%',
    borderBottomLeftRadius: 0,
  },
  receivedText: {
    fontSize: 14,
    color: '#fff',
  },
  dateSeparator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
    justifyContent: 'center',
  },
  separatorLine: {
    height: 1,
    backgroundColor: '#555',
    flex: 1,
    marginHorizontal: 10,
  },
  dateText: {
    color: '#888',
    fontSize: 12,
  },
  inputContainer: {
    padding: 10,
    backgroundColor: '#111',
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#222',
    borderRadius: 24,
    paddingHorizontal: 15,
    height: 45,
    position: 'relative',
  },
  textInput: {
    flex: 1,
    fontSize: 14,
    color: '#fff',
    textAlignVertical: 'center', 
  textAlign: 'center', 
    
  },
  leftIcon: {
    position: 'absolute',
    left: 12,
    zIndex: 1,
  },
  sendIconContainer: {
    position: 'absolute',
    right: 12,
    padding: 4,
    zIndex: 1,
  },
  sendButton: {
    backgroundColor: "#7D45FF",
    borderRadius: 20,
    width: 35,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    borderTopRightRadius: 0,
    transform: [{ rotate: "-0deg" }],
  },
});
