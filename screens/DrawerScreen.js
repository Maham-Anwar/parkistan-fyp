import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomePage from '../pages/HomePage';
import Map from '../Features/QuickPark';
import Locations from '../pages/Location';
import CustomDrawer from '../components/CustomDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { 
  BalooBhai2_400Regular,
  BalooBhai2_500Medium,
  BalooBhai2_600SemiBold,
  BalooBhai2_700Bold,
  BalooBhai2_800ExtraBold 
} from '@expo-google-fonts/baloo-bhai-2'
const Drawer = createDrawerNavigator();

const DrawerScreen = () => {
  return (
    <Drawer.Navigator  drawerContent={props => <CustomDrawer {...props} />}
    screenOptions={{
      headerShown: true,
      drawerActiveBackgroundColor: '#aa18ea',
      drawerActiveTintColor: '#fff',
      drawerInactiveTintColor: '#333',
      drawerLabelStyle: {
        fontFamily: 'BalooBhai2_600SemiBold',
        fontSize: 15,
        marginLeft:-5
      },
    }}>
      <Drawer.Screen name='Home' component={HomePage} options={{
          drawerIcon: ({color}) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ), 
        }}/> 
      <Drawer.Screen name='Search a parking spot' component={Map} options={{
          drawerIcon: ({color}) => (
            <Ionicons name="search" size={22} color={color} />
          ), 
        }}/> 
       <Drawer.Screen name='About us' component={HomePage} options={{
          drawerIcon: ({color}) => (
            <Ionicons name="people-outline" size={22} color={color} />
          ), 
        }}/>
    </Drawer.Navigator>
  );
};
export default DrawerScreen;