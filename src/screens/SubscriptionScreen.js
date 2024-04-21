import React, { useContext } from 'react';
import { View, Text, FlatList, SectionList, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { SubscriptionContext } from '../context/SubscriptionContext';

const SubscriptionScreen = ({ navigation }) => {
  const { subscriptions } = useContext(SubscriptionContext);

  const groupSubscriptionsByBillingCycle = () => {
    const groups = {};
    subscriptions.forEach(sub => {
      if (!groups[sub.billingCycle]) {
        groups[sub.billingCycle] = [];
      }
      groups[sub.billingCycle].push(sub);
    });
    return Object.keys(groups).map(key => ({ title: key, data: groups[key] }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.mainHeader}>Your Subscriptions</Text>
      <FlatList
        data={subscriptions}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item.subscriptionName}</Text>
            <Text style={styles.details}>Cost: ${item.cost}</Text>
            <Text style={styles.details}>Billing Cycle: {item.billingCycle}</Text>
          </View>
        )}
      />
      <Text style={styles.mainHeader}>Grouped by Billing Cycle</Text>
      <SectionList
        sections={groupSubscriptionsByBillingCycle()}
        keyExtractor={(item, index) => item.subscriptionName + index}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item.subscriptionName}</Text>
            <Text style={styles.details}>Cost: ${item.cost}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionHeader}>{title}</Text>
        )}
      />
      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddSubscription')}>
        <Text style={styles.addButtonText}>Add Subscription</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  mainHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    borderBottomWidth: 2,
    borderBottomColor: '#cc0000',
    paddingBottom: 5,
  },
  item: {
    backgroundColor: '#fff',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#444',
  },
  details: {
    fontSize: 16,
    color: '#666',
  },
  sectionHeader: {
    fontWeight: 'bold',
    fontSize: 18,
    backgroundColor: '#cc0000',
    color: '#fff',
    padding: 10,
  },
  addButton: {
    backgroundColor: '#cc0000',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  addButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  }
});

export default SubscriptionScreen;
