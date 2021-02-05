import React from 'react';
import { TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Home from './src/container/Home';
import Detail from './src/container/Detail'
import {Colors} from './src/styles'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Detail" 
          component={Detail} 
          options={({ navigation }) => ({
            headerTransparent: true,
            title: 'Flight to New York',
            headerTitleStyle: {
              fontSize: 20,
              fontWeight: '700',
              color: Colors.WHITE
            },
            headerLeft: () => (
              <TouchableOpacity style={{paddingLeft: 25}} onPress={() => navigation.goBack()}>
                <Ionicons name="chevron-back" size={25} color={Colors.WHITE} />
              </TouchableOpacity>
            )
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
