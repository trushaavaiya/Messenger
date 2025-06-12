import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  useWindowDimensions,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import AttachmentButton from "./components/AttachmentButton";

import Colors from "./constants/colors";
import Fonts from "./constants/fonts";

const messagesData = [
  { id: "1", text: "Yea... We need to discuss about it in person!", sender: "other" },
  { id: "2", text: "Will catch up tomorrow at wendy’s 9 in the morning... C ya!", sender: "other" },
  { id: "3", text: "Good night and tc!", sender: "other" },
  { id: "4", text: "Bye! Good night and tc!", sender: "me" },
  { id: "5", text: "Don’t be late tomorrow morning... will leave if I don’t see u", sender: "other" },
  { id: "6", text: "Hello.! Good morning!", sender: "me" },
];

export default function ChatScreen({navigation}) {
  const [messages, setMessages] = useState(messagesData);
  const [input, setInput] = useState("");
  const { width } = useWindowDimensions();

  const messagesBeforeToday = messages.slice(0, messages.length - 1);
  const lastMessage = messages[messages.length - 1];

  const renderItem = ({ item }) => (
    <View
      style={[
        styles.messageContainer,
        item.sender === "me" ? styles.messageRight : styles.messageLeft,
        { maxWidth: width * 0.75 },
      ]}
    >
      <Text style={[styles.messageText, item.sender === "me" ? styles.messageTextRight : styles.messageTextLeft]}>
        {item.text}
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.backWithTitle}>
          <TouchableOpacity onPress={() => navigation.navigate('Screen17')}>
            <Icon name="chevron-back" size={28} color={Colors.buttonText} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Aajaybhai</Text>
        </View>

        <TouchableOpacity>
          <Icon name="person-add-outline" size={24} color={Colors.buttonText} />
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
        data={[lastMessage]}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingHorizontal: 10, paddingBottom: 20 }}
        inverted={false}
      />

      <View style={styles.messageInputContainer}>
        <View style={styles.inputWithIcon}>
          <Icon name="add" size={24} color={Colors.addicon} style={styles.addInsideIcon} />
          <TextInput
            style={styles.messageInput}
            placeholder="Type your message here"
            placeholderTextColor={Colors.lightText}
            value={input}
            onChangeText={setInput}
          />
          <TouchableOpacity style={styles.sendButton}>
            <Icon name="send" size={22} color={Colors.buttonText} />
          </TouchableOpacity>
        </View>
      </View>

  <View style={styles.inputContainer}>
  <AttachmentButton iconName="camera-outline" label="Camera" />
  <AttachmentButton iconName="image-outline" label="Gallery" active />
  <AttachmentButton iconName="person-outline" label="Contact" />
  <AttachmentButton iconName="calendar-outline" label="Schedule" />
  <AttachmentButton iconName="location-outline" label="Location" />
  </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darkBackground,
  },
  header: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    justifyContent: "space-between",
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.lightBorder,
    backgroundColor: Colors.darkBackground,
  },
  backWithTitle: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  headerTitle: {
    fontSize: Fonts.headerFontSize,
    fontWeight: Fonts.headerFontWeight,
    color: Colors.buttonText,
  },
  messageContainer: {
    marginVertical: 5,
    padding: 12,
    borderRadius: 20,
  },
  messageLeft: {
    backgroundColor: Colors.lightBorder,
    alignSelf: "flex-start",
    borderTopLeftRadius: 0,
    marginVertical: 15,
  },
  messageRight: {
    backgroundColor: Colors.addicon,
    alignSelf: "flex-end",
    borderTopRightRadius: 0,
    marginVertical: 15,
  },
  messageText: {
    fontSize: Fonts.searchFontSize,
  },
  messageTextLeft: {
    color: Colors.buttonText,
  },
  messageTextRight: {
    color: Colors.buttonText,
  },
  dateSeparator: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginVertical: 10,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.lightBorder,
  },
  dateText: {
    marginHorizontal: 8,
    color: Colors.lightText,
    fontWeight: "600",
    fontSize: Fonts.messageDateSize,
  },
  messageInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderTopWidth: 0,
    backgroundColor: Colors.darkBackground,
  },
  inputWithIcon: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.lightBorder,
    borderRadius: 20,
    flex: 1,
    marginRight: 8,
    paddingHorizontal: 12,
  },
  addInsideIcon: {
    marginRight: 8,
  },
  messageInput: {
    flex: 1,
    fontSize: Fonts.searchFontSize,
    color: Colors.buttonText,
    paddingVertical: 12,
  },
  sendButton: {
    backgroundColor: Colors.addicon,
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
    backgroundColor: Colors.darkBackground,
  },
  iconButton: {
    alignItems: "center",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  iconLabel: {
    fontSize: Fonts.bannerSubSize,
    color: Colors.buttonText,
    marginTop: 4,
  },
  iconButtonActive: {
    backgroundColor: Colors.addicon,
  },
});
