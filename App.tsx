import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/LoginScreen';
import PostListScreen from './src/PostListScreen';
import PostDetailScreen from './src/PostDetailScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="PostListScreen" component={PostListScreen} />
        <Stack.Screen name="PostDetailScreen" component={PostDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
