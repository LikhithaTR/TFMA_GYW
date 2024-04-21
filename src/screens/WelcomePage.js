import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const WelcomePage = ({ route, navigation }) => {
  const { name } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome, {name}!</Text>
      <Image
        source={require('../new/hi.jpg')} // Adjust the path to where your image is stored
        style={styles.image}
      />
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('AddSubscription')}
      >
        <Text style={styles.buttonText}>Add Subscription</Text>
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
    backgroundColor: '#ffffff',
  },
  header: {
    fontSize: 28,
    fontWeight: '700',
    color: '#D32F2F',
    marginBottom: 20, // You may need to adjust the spacing
  },
  image: {
    width: 150, // Adjust the size as necessary
    height: 150, // Adjust the size as necessary
    resizeMode: 'contain', // or 'cover', depending on how you want it displayed
    marginBottom: 20, // Space between the image and the button
  },
  buttonContainer: {
    backgroundColor: '#D32F2F',
    padding: 15,
    borderRadius: 5,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: '#000',
    shadowOffset: { height: 3, width: 0 },
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default WelcomePage;
