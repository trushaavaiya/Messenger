
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
  const lastMessage = messages[messages.length - 1]; //

  const renderItem = ({ item }) => (
    <View
      style={[
        styles.messageContainer,
        item.sender === "me" ? styles.messageRight : styles.messageLeft,
        { maxWidth: width * 0.75 },
      ]}
    >
      <Text style={[styles.messageText, item.sender === "me" && styles.messageTextRight]}>
        {item.text}
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
            <Icon name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>

        <View style={styles.headerTitleContainer}>
             <Text style={styles.headerTitle}>Aajaybhai</Text>
        </View>

        <TouchableOpacity>
            <Icon name="person-add-outline" size={24} color="#333" />
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
        <TouchableOpacity style={styles.addButton}>
          <Icon name="add" size={24} color="#7D45FF" />
        </TouchableOpacity>
        <TextInput
          style={styles.messageInput}
          placeholder="Type your message here"
          placeholderTextColor="#999"
          value={input}
          onChangeText={setInput}
        />
        <TouchableOpacity style={styles.sendButton}>
          <Icon name="send" size={22} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="camera-outline" size={28} color="#555" />
          <Text style={styles.iconLabel}>Camera</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.iconButton, styles.iconButtonActive]}>
          <Icon name="image-outline" size={28} color="white" />
          <Text style={[styles.iconLabel, { color: "white" }]}>Gallery</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton}>
          <Icon name="person-outline" size={28} color="#555" />
          <Text style={styles.iconLabel}>Contact</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton}>
          <Icon name="calendar-outline" size={28} color="#555" />
          <Text style={styles.iconLabel}>Schedule</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton}>
          <Icon name="location-outline" size={28} color="#555" />
          <Text style={styles.iconLabel}>Location</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  header: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    justifyContent: "space-between",
    borderBottomWidth: 0.5,
    borderBottomColor: "#ccc",
  },
  headerTitleContainer: {
  backgroundColor: "#ccc",     
  paddingHorizontal: 26,
  paddingVertical: 6,
  borderRadius: 15,            
  justifyContent: "flex-start",
  alignItems: "flex-start",
  
  },
  headerTitle: {
     fontSize: 18,
      fontWeight: "bold",
       color: "#333" 
    },

  messageContainer: {
    marginVertical: 5,
    padding: 12,
    borderRadius: 20,
  },
  messageLeft: {
    backgroundColor: "#f2f2f2",
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
    color: "#333",
  },
  messageTextRight: {
    color: "white",
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
    backgroundColor: "#ccc",
  },
  dateText: {
    marginHorizontal: 8,
    color: "#666",
    fontWeight: "600",
  },

  messageInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  addButton: {
    padding: 6,
    marginRight: 6,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#7D45FF",
    alignItems: "center",
    justifyContent: "center",
  },
  messageInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: "#f2f2f2",
    marginRight: -45,
    
  },
  sendButton: {
    backgroundColor: "#7D45FF",
    borderRadius: 1,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderEndEndRadius:20,
    borderBottomLeftRadius:20,
    borderStartStartRadius:20,
    paddingRight:0
  },

  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  iconButton: {
    alignItems: "center",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 20,
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

