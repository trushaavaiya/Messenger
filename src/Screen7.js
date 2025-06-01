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
              colors={[Colors.primary, Colors.addicon]}
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
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => {
            // Add back navigation logic here
          }}
        >
          <Icon name="chevron-back" size={28} color={Colors.text1} />
        </TouchableOpacity>
        <View style={styles.nameBox}>
          <Text style={styles.title}>Aajaybhai</Text>
        </View>
        <Icon name="person-outline" size={20} color={Colors.text1} />
      </View>

      <FlatList
        data={messagesData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 16 }}
      />

      <View style={styles.inputContainer}>
        <TouchableOpacity>
          <Icon name="add-outline" size={Fonts.size} color={Colors.addicon} />
        </TouchableOpacity>
        <TextInput
          style={styles.textInput}
          placeholder="Type your message here"
          placeholderTextColor={Colors.searchIcon}
          value={input}
          onChangeText={setInput}
        />
        <TouchableOpacity>
          <Icon name="send" size={22} color={Colors.addicon} />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
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
    backgroundColor: Colors.placeholderBg,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 10,
  },
  backButton: {
    marginRight: 12,
    padding: 4,
  },
  title: {
    fontSize: Fonts.headerFontSize,
    fontWeight: Fonts.headerFontWeight,
    color: Colors.text1,
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
    color: Colors.buttonText,
    fontSize: Fonts.subtitleSize,
  },
  receivedBubble: {
    backgroundColor: Colors.searchbg,
    padding: 12,
    borderRadius: 18,
    maxWidth: '80%',
    borderBottomLeftRadius: 0,
  },
  receivedText: {
    fontSize: Fonts.subtitleSize,
    color: Colors.text,
  },
  dateSeparator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
    justifyContent: 'center',
  },
  separatorLine: {
    height: 1,
    backgroundColor: Colors.borderline,
    flex: 1,
    marginHorizontal: 10,
  },
  dateText: {
    color: Colors.subtitle1,
    fontSize: 12,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
    borderTopWidth: 0,
    borderTopColor: Colors.border,
    gap: 8,
  },
  textInput: {
    flex: 1,
    backgroundColor: Colors.searchbg,
    borderRadius: 20,
    paddingHorizontal: 28,
    fontSize: Fonts.subtitleSize,
    height: 40,
    color: Colors.text1,
  },
});
