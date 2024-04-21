import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const SubscriptionDetailsPage = ({ route, navigation }) => {
  const { subscription } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Subscription Details</Text>
      <Text>Subscription Name: {subscription.subscriptionName}</Text>
      <Text>Cost: ${subscription.cost}</Text>
      <Text>Billing Cycle: {subscription.billingCycle}</Text>
      <Button
        title="Add Another Subscription"
        onPress={() => navigation.navigate('AddSubscription')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  // Your StyleSheet here
});

export default SubscriptionDetailsPage;
