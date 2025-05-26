import React from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const messages = [
  { name: '+91 87444 87846', message: 'okay, i will manage', date: '08, Dec' },
  { name: 'David Tan', message: 'David, i call you later', date: '07, Dec', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
  { name: '+91 87123 87123', message: 'okay, i will manage', date: '06, Dec' },
  { name: 'Michael Jose', message: 'Check out your email.', date: '06, Dec', avatar: 'https://randomuser.me/api/portraits/men/2.jpg' },
  { name: 'Sarah Kate', message: 'okay. let’s hang out the day after the...', date: '04, Dec', avatar: 'https://randomuser.me/api/portraits/women/1.jpg' },
    { name: 'Sarah Kate', message: 'okay. let’s hang out the day after the...', date: '04, Dec', avatar: 'https://randomuser.me/api/portraits/women/1.jpg' },

];

const MessageApp = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="menu" size={25} />
        <Text style={styles.headerTitle}></Text>
        <Icon name="add" size={25} />
      </View>

      <View style={styles.searchContainer}>
        <Icon name="search-outline" size={20} color="#aaa" />
        <TextInput
          placeholder="Search"
          style={styles.searchInput}
          placeholderTextColor={"black"}
        />
      </View>

      <View style={styles.tabs}>
        <Text style={[styles.tab, styles.tabActive]}>All Messages</Text>
        <Text style={styles.tab}>Personal</Text>
        <Text style={styles.tab}>Business</Text>
      </View>

      <View style={styles.banner}>
        <Text style={styles.bannerText}>Love to Message?</Text>
        <Text style={styles.bannerSubText}>Make SMS app to your default SMS app</Text>
        <View style={styles.bannerActions}>
          <TouchableOpacity><Text style={styles.changeText}>CHANGE</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.notNowText}>NOT NOW</Text></TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.messageList}>
        {messages.map((item, index) => (
          <View style={styles.messageItem} key={index}>
            {item.avatar ? (
              <Image source={{ uri: item.avatar }} style={styles.avatar} />
            ) : (
              <View style={styles.avatarPlaceholder}>
                <Icon name="person-outline" size={24} color="#999" />
              </View>
            )}
            <View style={styles.messageTextContainer}>
              <Text style={styles.messageName}>{item.name}</Text>
              <Text style={styles.messagePreview}>{item.message}</Text>
            </View>
            <Text style={styles.messageDate}>{item.date}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};