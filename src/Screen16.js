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

const messagesData = [
  { id: "1", text: "Yea... We need to discuss about it in person!", sender: "other" },
  { id: "2", text: "Will catch up tomorrow at wendy’s 9 in the morning... C ya!", sender: "other" },
  { id: "3", text: "Good night and tc!", sender: "other" },
  { id: "4", text: "Bye! Good night and tc!", sender: "me" },
  { id: "5", text: "Don’t be late tomorrow morning... will leave if I don’t see u", sender: "other" },
  { id: "6", text: "Hello.! Good morning!", sender: "me" },
];

export default function ChatScreen() {
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
          <TouchableOpacity>
            <Icon name="chevron-back" size={28} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Aajaybhai</Text>
        </View>

        <TouchableOpacity>
          <Icon name="person-add-outline" size={24} color="#fff" />
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
          <Icon name="add" size={24} color="yellow" style={styles.addInsideIcon} />
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

      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="camera-outline" size={28} color="#fff" />
          <Text style={styles.iconLabel}>Camera</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.iconButton, styles.iconButtonActive]}>
          <Icon name="image-outline" size={28} color="#fff" />
          <Text style={[styles.iconLabel, { color: "#fff" }]}>Gallery</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton}>
          <Icon name="person-outline" size={28} color="#fff" />
          <Text style={styles.iconLabel}>Contact</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton}>
          <Icon name="calendar-outline" size={28} color="#fff" />
          <Text style={styles.iconLabel}>Schedule</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton}>
          <Icon name="location-outline" size={28} color="#fff" />
          <Text style={styles.iconLabel}>Location</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  header: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    justifyContent: "space-between",
    borderBottomWidth: 0.5,
    borderBottomColor: "#444",
    backgroundColor: "#111",
  },
  backWithTitle: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  messageContainer: {
    marginVertical: 5,
    padding: 12,
    borderRadius: 20,
  },
  messageLeft: {
    backgroundColor: "#333",
    alignSelf: "flex-start",
    borderTopLeftRadius: 0,
    marginVertical: 15,
  },
  messageRight: {
    backgroundColor: "#7D45FF",
    alignSelf: "flex-end",
    borderTopRightRadius: 0,
    marginVertical: 15,
  },
  messageText: {
    fontSize: 16,
  },
  messageTextLeft: {
    color: "#fff",
  },
  messageTextRight: {
    color: "#fff",
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
    backgroundColor: "#444",
  },
  dateText: {
    marginHorizontal: 8,
    color: "#aaa",
    fontWeight: "600",
  },
  messageInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderTopWidth: 0,
    borderTopColor: "#333",
    backgroundColor: "#111",
  },
  inputWithIcon: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#333",
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
    backgroundColor: "#111",
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
  iconButtonActive: {
    backgroundColor: "#7D45FF",
  },
});
