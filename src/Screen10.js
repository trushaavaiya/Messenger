import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const messages = [
  { name: '+91 87444 87846', message: 'okay, i will manage', date: '08, Dec' },
  { name: 'David Tan', message: 'David, i call you later', date: '07, Dec', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
  { name: '+91 87123 87123', message: 'okay, i will manage', date: '06, Dec' },
  { name: 'Michael Jose', message: 'Check out your email.', date: '06, Dec', avatar: 'https://randomuser.me/api/portraits/men/2.jpg' },
  { name: 'Sarah Kate', message: 'okay. let’s hang out the day after the...', date: '04, Dec', avatar: 'https://randomuser.me/api/portraits/women/1.jpg' },
  { name: 'Sarah Kate', message: 'okay. let’s hang out the day after the...', date: '04, Dec', avatar: 'https://randomuser.me/api/portraits/women/1.jpg' },
];

const MessageApp = () => {
  const [modalVisible, setModalVisible] = useState(true);
  const [rating, setRating] = useState(4);

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

      <Modal visible={modalVisible} transparent animationType="fade">
        <View style={styles.modalBackground}>
          <View style={styles.popup}>
            <View style={styles.headerSection}>
              <Image
                source={{
                  uri: 'https://img.icons8.com/color/96/000000/feedback.png',
                }}
                style={styles.popupImage}
              />
              <Text style={styles.popupTitle}>Like Messages?</Text>
              <Text style={styles.popupSubtitle}>
                Recommend us to others by rating us on Play Store!
              </Text>
            </View>

            <View style={styles.stars}>
              {[1, 2, 3, 4, 5].map((i) => (
                <TouchableOpacity key={i} onPress={() => setRating(i)}>
                  <FontAwesome
                    name="star"
                    size={30}
                    color={i <= rating ? '#FFA500' : '#ccc'}
                  />
                </TouchableOpacity>
              ))}
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.rateButton} onPress={() => setModalVisible(false)}>
                <Text style={styles.rateButtonText}>RATE US</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={styles.notNowText}>NOT NOW</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};