
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

