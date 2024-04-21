import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';

const LoginPage = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleLogin = () => {
    // Perform login or registration logic
    navigation.navigate('Welcome', {
      name: name,
      email: email,
      phone: phone,
      address: address,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login/Register</Text>
      <TextInput
        placeholder="Name"
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Phone No"
        onChangeText={setPhone}
        style={styles.input}
        keyboardType="phone-pad"
      />
      <TextInput
        placeholder="Address"
        onChangeText={setAddress}
        style={styles.input}
      />
      <TouchableOpacity style={styles.buttonContainer} onPress={handleLogin}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffffff', // Use the same background color for consistency
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 20,
    color: '#D32F2F', // Title color similar to HomePage
  },
  input: {
    width: '100%',
    marginBottom: 15,
    padding: 15,
    borderWidth: 1,
    borderColor: '#D32F2F', // Input border color to match theme
    borderRadius: 5,
    fontSize: 16, // Larger font for inputs
  },
  buttonContainer: {
    marginTop: 10,
    backgroundColor: '#D32F2F', // Button color to match the red theme
    padding: 15,
    borderRadius: 5,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: '#000',
    shadowOffset: { height: 3, width: 0 },
    width: '100%', // Full width button for a bold look
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center', // Center the text inside the button
  },
});

export default LoginPage;
