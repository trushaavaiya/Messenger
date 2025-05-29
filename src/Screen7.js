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
         <Icon name="person-add-outline" size={20} color="#000" />
        </View>


      <FlatList
        data={messagesData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 16 }}
      />

      <View style={styles.messageInputContainer}>
                    <View style={styles.inputWithIcon}>
                      <Icon name="add" size={24} color="#FFA500" style={styles.addInsideIcon} />
                      <TextInput
                        style={styles.messageInput}
                        placeholder="Type your message here"
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
    backgroundColor: '#fff',
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
  paddingTop: 30,
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
    marginVertical: 10,
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
 messageInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderTopWidth: 0,
    borderTopColor: "#333",
    backgroundColor: "white",
  },
  inputWithIcon: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    borderRadius: 20,
    flex: 1,
    marginRight: 8,
    paddingHorizontal: 12,
    borderRadius:15,
  },
  addInsideIcon: {
    marginRight: 8,
  },
  messageInput: {
    flex: 1,
    fontSize: 16,
    color: "#fff",
    paddingVertical: 12,
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
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    borderTopWidth: 0,
    borderTopColor: "#333",
    backgroundColor: "white",
  },
  iconButton: {
    alignItems: "center",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  iconLabel: {
    fontSize: 10,
    color: "#fff",
    marginTop: 4,
  },
  iconLabel: {
    fontSize: 10,
    color: "#555",
    marginTop: 4,
  },
  iconButtonActive: {
    backgroundColor: "#7D45FF",
  },
});