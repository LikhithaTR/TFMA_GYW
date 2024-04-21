import React, { useState, useContext } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { SubscriptionContext } from '../context/SubscriptionContext';

const AddSubscriptionPage = ({ navigation }) => {
  const [subscriptionName, setSubscriptionName] = useState('');
  const [cost, setCost] = useState('');
  const [billingCycle, setBillingCycle] = useState('');
  const { addSubscription } = useContext(SubscriptionContext);

  const handleSubmit = () => {
    const newSubscription = { subscriptionName, cost, billingCycle };
    addSubscription(newSubscription);
    navigation.navigate('SubscriptionScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Subscription</Text>
      
      <Text style={styles.label}>Subscription Name:</Text>
      <TextInput
        placeholder="Enter subscription name"
        value={subscriptionName}
        onChangeText={setSubscriptionName}
        style={styles.input}
      />

      <Text style={styles.label}>Cost:</Text>
      <TextInput
        placeholder="Enter cost"
        value={cost}
        onChangeText={setCost}
        keyboardType="numeric"
        style={styles.input}
      />

      <Text style={styles.label}>Billing Cycle:</Text>
      <TextInput
        placeholder="Enter billing cycle (e.g., Monthly)"
        value={billingCycle}
        onChangeText={setBillingCycle}
        style={styles.input}
      />

      <TouchableOpacity style={styles.buttonContainer} onPress={handleSubmit}>
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
    backgroundColor: '#fff', // Maintaining a clean white background
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#D32F2F', // Using the red color for titles
    marginBottom: 24,
  },
  label: {
    alignSelf: 'flex-start',
    marginBottom: 5,
    color: '#333',
    fontSize: 16,
  },
  input: {
    width: '100%',
    marginBottom: 15,
    padding: 15,
    borderWidth: 1,
    borderColor: '#D32F2F', // Red border color
    borderRadius: 5,
    fontSize: 16,
  },
  buttonContainer: {
    backgroundColor: '#D32F2F', // Red background for the submit button
    padding: 15,
    borderRadius: 5,
    width: '100%', // Full-width button for a modern look
    shadowOpacity: 0.2, // Shadow for depth
    shadowRadius: 4,
    shadowColor: '#000',
    shadowOffset: { height: 3, width: 0 },
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default AddSubscriptionPage;
