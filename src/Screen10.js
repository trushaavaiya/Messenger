import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Colors from './constants/colors';
import Fonts from './constants/fonts';

const messages = [
  { name: '+91 87444 87846', message: 'okay, i will manage', date: '08, Dec' },
  { name: 'David Tan', message: 'David, i call you later', date: '07, Dec', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
  { name: '+91 87123 87123', message: 'okay, i will manage', date: '06, Dec' },
  { name: 'Michael Jose', message: 'Check out your email.', date: '06, Dec', avatar: 'https://randomuser.me/api/portraits/men/2.jpg' },
  { name: 'Sarah Kate', message: 'okay. let’s hang out the day after the...', date: '04, Dec', avatar: 'https://randomuser.me/api/portraits/women/1.jpg' },
  { name: 'Sarah Kate', message: 'okay. let’s hang out the day after the...', date: '04, Dec', avatar: 'https://randomuser.me/api/portraits/women/1.jpg' },
];

const MessageApp1 = () => {
  const [modalVisible, setModalVisible] = useState(true);
  const [rating, setRating] = useState(4);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="menu" size={25} color={Colors.text} />
        <Icon name="add" size={25} color={Colors.text} />
      </View>

      <View style={styles.searchContainer}>
        <Icon name="search-outline" size={20} color={Colors.searchIcon} />
        <TextInput
          placeholder="Search"
          style={styles.searchInput}
          placeholderTextColor={Colors.text}
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
                <Icon name="person-outline" size={24} color={Colors.searchIcon} />
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
                    color={i <= rating ? Colors.orange : Colors.checkboxUnselected}
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

export default MessageApp1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 10,
    backgroundColor: Colors.background,
  },
  header: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: Fonts.headerFontSize,
    fontWeight: Fonts.headerFontWeight,
    color: Colors.headerText,
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.searchbg,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  searchInput: {
    marginLeft: 10,
    flex: 1,
    fontSize: Fonts.searchFontSize,
    color: Colors.text,
  },
  tabs: {
    flexDirection: 'row',
    marginTop: 15,
  },
  tab: {
    marginRight: 20,
    fontSize: Fonts.tabFontSize,
    color: Colors.inactiveTab,
  },
  tabActive: {
    color: Colors.headerText,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  banner: {
    backgroundColor: Colors.banner,
    borderRadius: 12,
    padding: 25,
    marginTop: 25,
  },
  bannerText: {
    fontWeight: 'bold',
    fontSize: Fonts.bannerTitleSize,
    color: Colors.text,
    marginBottom: 2,
  },
  bannerSubText: {
    fontSize: Fonts.bannerSubSize,
    color: Colors.subtitle1,
  },
  bannerActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  changeText: {
    color: Colors.addicon,
    marginRight: 20,
    fontWeight: 'bold',
    fontSize: Fonts.bannerSubSize,
  },
  notNowText: {
    color: Colors.searchIcon,
    fontSize: Fonts.bannerSubSize,
  },
  messageList: {
    marginTop: 20,
    flex: 1,
  },
  messageItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 10,
  },
  avatarPlaceholder: {
    width: 60,
    height: 60,
    borderRadius: 10,
    backgroundColor: Colors.placeholderBg,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  messageTextContainer: {
    flex: 1,
  },
  messageName: {
    fontWeight: '600',
    fontSize: Fonts.contactNameSize,
    color: Colors.text,
  },
  messagePreview: {
    color: Colors.messageText,
    fontSize: Fonts.contactPhoneSize,
  },
  messageDate: {
    fontSize: Fonts.messageDateSize,
    color: Colors.searchIcon,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  popup: {
    width: 300,
    backgroundColor: Colors.background,
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 10,
  },
  headerSection: {
    backgroundColor: Colors.searchbg,
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  popupImage: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  popupTitle: {
    fontWeight: 'bold',
    fontSize: Fonts.headerFontSize,
    color: Colors.text,
    marginBottom: 5,
  },
  popupSubtitle: {
    textAlign: 'center',
    color: Colors.subtitle1,
    fontSize: Fonts.bannerSubSize,
  },
  stars: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 15,
  },
  buttonContainer: {
    alignItems: 'center',
    marginBottom: 15,
  },
  rateButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 10,
  },
  rateButtonText: {
    color: Colors.buttonText,
    fontWeight: 'bold',
    fontSize: Fonts.bannerSubSize,
  },
});
