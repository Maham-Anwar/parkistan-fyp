import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';
import LoginScreen from './.././pages/login/index';
import UserSignUpScreen from './../pages/signup/UserForm';
import OwnerSignUpScreen from './../pages/signup/OwnerForm';
import HomePage from '../pages/HomePage';
import Map from '../Features/QuickPark';
import Locations from '../pages/Location';
import DrawerScreen from './DrawerScreen';
const RootStack = createNativeStackNavigator();

const RootStackScreen = () => {
  return (
    <RootStack.Navigator 
    screenOptions={{
      headerShown: false
    }}>

      <RootStack.Screen  name='LoginScreen' component={LoginScreen}/>
      <RootStack.Screen name='UserSignUpScreen' component={UserSignUpScreen}/>
      <RootStack.Screen name='OwnerSignUpScreen' component={OwnerSignUpScreen}/>
      <RootStack.Screen name='HomePage' component={DrawerScreen}/>
       <RootStack.Screen name='Locations' component={Locations}/>
       <RootStack.Screen name='Map' component={Map}/>
    </RootStack.Navigator>
  );
};
export default RootStackScreen;