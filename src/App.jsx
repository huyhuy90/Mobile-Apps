// src/AppNavigator.js
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Beranda from './screens/Beranda';
import DaftarMobil from './screens/DaftarMobil';
import DetailMobil from './screens/DetailMobil';
import Pemesanan from './screens/Pemesanan';
import Profil from './screens/Profil';

const Tab = createBottomTabNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Beranda"
          component={Beranda}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Daftar"
          component={DaftarMobil}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Detail"
          component={DetailMobil}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Pemesanan"
          component={Pemesanan}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Profil"
          component={Profil}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
