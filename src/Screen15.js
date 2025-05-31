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

const contactsData = [
  {
    id: '1',
    name: 'Aayansh joshi',
    phone: '+91 98899 99999',
    image: null,
  },
  {
    id: '2',
    name: 'Anaya tivari',
    phone: '+91 98585 79000',
    image: require('../image/Anaya.png'), 
  },
  {
    id: '3',
    name: 'Aashvi bhogi',
    phone: '+91 87848 78987',
    image: null,
  },
  {
    id: '4',
    name: 'Body dolly',
    phone: '+91 87879 79787',
    image: require('../image/body.png'),
  },
  {
    id: '5',
    name: 'Chakudi',
    phone: '+91 78999 79999',
    image: require('../image/chakudi.png'),
  },
  {
    id: '6',
    name: 'David Tan',
    phone: '+91 98798 98789',
    image: require('../image/david.png'),
  },
  {
    id: '7',
    name: 'Julia Ambriz',
    phone: '+91 87849 79987',
    image: require('../image/julia.png'),
  },
  {
    id: '8',
    name: 'Ketan pandia',
    phone: '+91 78999 70000',
    image: null,
  },
];

export default function ContactScreen() {
  const [selectedContacts, setSelectedContacts] = useState([]);

  const toggleSelect = (id) => {
    if (selectedContacts.includes(id)) {
      setSelectedContacts(selectedContacts.filter((item) => item !== id));
    } else {
      setSelectedContacts([...selectedContacts, id]);
    }
  };

  const renderItem = ({ item }) => {
    const isSelected = selectedContacts.includes(item.id);

    return (
      <TouchableOpacity
        style={styles.contactRow}
        onPress={() => toggleSelect(item.id)}
      >
        {item.image ? (
          <Image source={item.image} style={styles.avatar} />
        ) : (
          <View style={styles.placeholder}>
            <Icon name="person" size={28} color="#914de2" />
          </View>
        )}
        <View style={styles.contactInfo}>
          <Text style={styles.contactName}>{item.name}</Text>
          <Text style={styles.contactPhone}>{item.phone}</Text>
        </View>
        <View style={styles.checkbox}>
          {isSelected ? (
            <Icon name="check-box" size={24} color="#6b28cf" />
          ) : (
            <Icon name="check-box-outline-blank" size={24} color="#555" />
          )}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      
      <View style={styles.header}>
        <Icon name="arrow-back-ios" size={22} color="#fff" />
        <Text style={styles.headerText}>Contacts</Text>
        <Icon name="check" size={24} color="#6b28cf" />
      </View>

      <View style={styles.searchBox}>
        <Icon name="search" size={20} color="#999" />
        <TextInput
          placeholder="Search"
          placeholderTextColor="#999"
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
    backgroundColor: '#000', 
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
    fontSize: 20,
    fontWeight: '600',
    color: '#fff', 
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#222', 
    borderRadius: 20,
    paddingHorizontal: 14,
    height: 40,
    marginBottom: 10,
  },
  input: {
    marginLeft: 10,
    flex: 1,
    color: '#fff',
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderColor: '#333', 
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
    backgroundColor: '#334',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contactInfo: {
    flex: 1,
    marginLeft: 15,
  },
  contactName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff', 
  },
  contactPhone: {
    fontSize: 14,
    color: '#bbb', 
  },
  checkbox: {
    marginRight: 5,
  },
});
