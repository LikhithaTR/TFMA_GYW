// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SubscriptionProvider } from './src/context/SubscriptionContext'; // Adjust the import path as needed

// Screens
import HomePage from './src/screens/HomePage';
import LoginPage from './src/screens/LoginPage';
import WelcomePage from './src/screens/WelcomePage';
import AddSubscriptionPage from './src/screens/AddSubscriptionPage';
import SubscriptionDetailsPage from './src/screens/SubscriptionDetailsPage';
import SubscriptionScreen from './src/screens/SubscriptionScreen';

// Create a stack navigator
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SubscriptionProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomePage} options={{ title: 'Guard Your Wallet' }} />
          <Stack.Screen name="Login" component={LoginPage} options={{ title: 'Login' }} />
          <Stack.Screen name="Welcome" component={WelcomePage} options={{ title: 'Welcome' }} />
          <Stack.Screen name="AddSubscription" component={AddSubscriptionPage} options={{ title: 'Add Subscription' }} />
          <Stack.Screen name="SubscriptionDetails" component={SubscriptionDetailsPage} options={{ title: 'Subscription Details' }} />
          <Stack.Screen name="SubscriptionScreen" component={SubscriptionScreen} options={{ title: 'Subscriptions' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SubscriptionProvider>
  );
};

export default App;
