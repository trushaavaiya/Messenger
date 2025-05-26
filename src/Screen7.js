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