import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/container/Home';
import Detail from './src/container/Detail'


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Detail" 
          component={Detail} 
          options={{
            headerTransparent: true,
            title: ''
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
