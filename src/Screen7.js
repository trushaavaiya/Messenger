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
        <TouchableOpacity style={styles.backButton} onPress={() => {/* add back navigation logic here */}}>
         <Icon name="chevron-back" size={28} color="#000" />
        </TouchableOpacity>
        <View style={styles.nameBox}>
        <Text style={styles.title}>Aajaybhai</Text>
        </View>
         <Icon name="notifications-outline" size={20} color="#000" />
        </View>


      <FlatList
        data={messagesData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 16 }}
      />

      <View style={styles.inputContainer}>
        <TouchableOpacity>
          <Icon name="add-outline" size={24} color="#7D45FF" />
        </TouchableOpacity>
        <TextInput
          style={styles.textInput}
          placeholder="Type your message here"
          placeholderTextColor="#aaa"
          value={input}
          onChangeText={setInput}
        />
        <TouchableOpacity>
          <Icon name="send" size={22} color="#7D45FF" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ChatScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingTop: 50,
    paddingBottom: 12,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nameBox: {
    backgroundColor: '#f0f0f0', // light grey
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 10,
  },
  backButton: {
  marginRight: 12,
  padding: 4,
},
header: {
  paddingTop: 50,
  paddingBottom: 12,
  paddingHorizontal: 16,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
},

  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  messageContainer: {
    marginVertical: 8,
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
    backgroundColor: '#f1f1f1',
    padding: 12,
    borderRadius: 18,
    maxWidth: '80%',
    borderBottomLeftRadius: 0,
  },
  receivedText: {
    fontSize: 14,
    color: '#000',
  },
  dateSeparator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
    justifyContent: 'center',
  },
  separatorLine: {
    height: 1,
    backgroundColor: '#ccc',
    flex: 1,
    marginHorizontal: 10,
  },
  dateText: {
    color: '#aaa',
    fontSize: 12,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
    borderTopWidth: 0,
    borderTopColor: '#eee',
    gap: 8,
  },
  textInput: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    borderRadius: 20,
    paddingHorizontal: 28,
    fontSize: 14,
    height: 40,
    color: '#000',
  },
});