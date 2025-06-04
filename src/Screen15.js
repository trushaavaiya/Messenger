import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Colors from './constants/colors';
import Fonts from './constants/fonts';

const contactsData = [
  { id: '1', name: 'Aayansh joshi', phone: '+91 98899 99999', image: null },
  { id: '2', name: 'Anaya tivari', phone: '+91 98585 79000', image: require('../image/Anaya.png') },
  { id: '3', name: 'Aashvi bhogi', phone: '+91 87848 78987', image: null },
  { id: '4', name: 'Body dolly', phone: '+91 87879 79787', image: require('../image/body.png') },
  { id: '5', name: 'Chakudi', phone: '+91 78999 79999', image: require('../image/chakudi.png') },
  { id: '6', name: 'David Tan', phone: '+91 98798 98789', image: require('../image/david.png') },
  { id: '7', name: 'Julia Ambriz', phone: '+91 87849 79987', image: require('../image/julia.png') },
  { id: '8', name: 'Ketan pandia', phone: '+91 78999 70000', image: null },
];

export default function ContactScreen() {
  const [selectedContacts, setSelectedContacts] = useState([]);

  const toggleSelect = (id) => {
    setSelectedContacts((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const renderItem = ({ item }) => {
    const isSelected = selectedContacts.includes(item.id);
    return (
      <TouchableOpacity style={styles.contactRow} onPress={() => toggleSelect(item.id)}>
        {item.image ? (
          <Image source={item.image} style={styles.avatar} />
        ) : (
          <View style={styles.placeholder}>
            <Icon name="person" size={28} color={Colors.primary} />
          </View>
        )}
        <View style={styles.contactInfo}>
          <Text style={styles.contactName}>{item.name}</Text>
          <Text style={styles.contactPhone}>{item.phone}</Text>
        </View>
        <View style={styles.checkbox}>
          <Icon
            name={isSelected ? 'check-box' : 'check-box-outline-blank'}
            size={24}
            color={isSelected ? Colors.checkboxSelected : Colors.subtitle}
          />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.darkBackground} barStyle="light-content" />
      <View style={styles.header}>
        <Icon name="arrow-back-ios" size={22} color={Colors.buttonText} />
        <Text style={styles.headerText}>Contacts</Text>
        <Icon name="check" size={24} color={Colors.primary1} />
      </View>
      <View style={styles.searchBox}>
        <Icon name="search" size={20} color={Colors.searchIcon} />
        <TextInput
          placeholder="Search"
          placeholderTextColor={Colors.searchIcon}
          style={styles.input}
        />
      </View>
      <FlatList
        data={contactsData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darkBackground,
    paddingHorizontal: 15,
    paddingTop: 45,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  headerText: {
    fontSize: Fonts.headerFontSize,
    fontWeight: Fonts.headerFontWeight,
    color: Colors.buttonText,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.background3,
    borderRadius: 20,
    paddingHorizontal: 14,
    height: 40,
    marginBottom: 10,
  },
  input: {
    marginLeft: 10,
    flex: 1,
    color: Colors.buttonText,
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderColor: Colors.lightBorder,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  placeholder: {
    width: 45,
    height: 45,
    borderRadius: 10,
    backgroundColor: Colors.contactPlaceholder,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contactInfo: {
    flex: 1,
    marginLeft: 15,
  },
  contactName: {
    fontSize: Fonts.contactNameSize,
    fontWeight: Fonts.contactNameWeight,
    color: Colors.buttonText,
  },
  contactPhone: {
    fontSize: Fonts.contactPhoneSize,
    color: Colors.lightText,
  },
  checkbox: {
    marginRight: 5,
  },
});
