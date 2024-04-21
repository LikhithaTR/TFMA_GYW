// SubscriptionContext.js
import React, { createContext, useState } from 'react';

// Creating the context object and defining the default values
export const SubscriptionContext = createContext({
  subscriptions: [],
  addSubscription: () => {},
  removeSubscription: () => {}
});

export const SubscriptionProvider = ({ children }) => {
  const [subscriptions, setSubscriptions] = useState([]);

  // Function to add a new subscription to the list
  const addSubscription = (newSubscription) => {
    setSubscriptions([...subscriptions, newSubscription]);
  };

  // Function to remove a subscription from the list by id
  const removeSubscription = (subscriptionId) => {
    setSubscriptions(subscriptions.filter(sub => sub.id !== subscriptionId));
  };

  return (
    <SubscriptionContext.Provider value={{ subscriptions, addSubscription, removeSubscription }}>
      {children}
    </SubscriptionContext.Provider>
  );
};
