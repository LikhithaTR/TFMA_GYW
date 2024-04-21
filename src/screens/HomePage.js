import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Switch, Image } from 'react-native';

const HomePage = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      {/* Image added above the text */}
      <Image
        source={require('../new/my.jpg')} // Corrected path for the image
        style={styles.image}
      />
      <Text style={styles.header}>Guard Your Wallet</Text>
      <Text style={styles.subheader}>Secure Your Savings: Guard Your Wallet, Guard Your Future!!!</Text>
      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Enable Notifications:</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#D32F2F" }}
          thumbColor={isEnabled ? "#ffffff" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff', // White background color
    paddingVertical: 30, // Added padding at the top and bottom
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#D32F2F', // Red color for the header text
    marginTop: 16, // Space between image and header
  },
  subheader: {
    fontSize: 16,
    color: '#666', // Grey color for the subheader text
    textAlign: 'center',
    paddingHorizontal: 20,
    marginBottom: 16, // Space between subheader and switch
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20, // Space between switch and button
  },
  switchLabel: {
    fontSize: 16,
    marginRight: 10,
    color: '#333',
  },
  buttonContainer: {
    backgroundColor: '#D32F2F', // Red color for the button background
    borderRadius: 5,
    padding: 12,
    shadowOpacity: 0.1,
    shadowRadius: 3,
    shadowColor: '#000',
    shadowOffset: { height: 2, width: 0 },
  },
  buttonText: {
    fontSize: 18,
    color: '#fff', // White color for the button text
    fontWeight: 'bold',
  },
  image: {
    width: 200, // Set the width
    height: 200, // Set the height
    resizeMode: 'contain', // Contain the image within the dimensions without stretching it
    marginBottom: 20, // Space between the top of the screen and image
  },
});

export default HomePage;
