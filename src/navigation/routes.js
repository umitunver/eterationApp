import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Cart, Profile, Favorites, Details} from '@src/screens/index';
import {useDispatch, useSelector} from 'react-redux';
import {BasketIcon, FavIcon, HomeIcon, PersonIcon} from '@src/constants/icons';
import {View} from 'react-native';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabMenu() {
  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === 'HomeTab') {
            return <HomeIcon />;
          } else if (route.name === 'Cart') {
            return <BasketIcon />;
          } else if (route.name === 'Favorites') {
            return <FavIcon />;
          } else if (route.name === 'Profile') {
            return <PersonIcon />;
          }
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingTop: 10,
          paddingHorizontal: 20,
          backgroundColor: '#fff',
          borderTopWidth: 1,
        },
      })}>
      <Tab.Screen
        options={{
          title: 'Home Page',
          headerShown: false,
        }}
        name="HomeTab"
        component={Home}
      />
      <Tab.Screen
        options={{title: 'Cart', headerShown: false}}
        name="Cart"
        component={Cart}
      />

      <Tab.Screen
        options={{title: 'Favorites', headerShown: false}}
        name="Favorites"
        component={Favorites}
      />
      <Tab.Screen
        options={{
          title: 'Profile',
          headerShown: false,
        }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
}

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          options={{headerShown: false}}
          component={TabMenu}
        />
         <Stack.Screen
          name="Details"
          options={{headerShown: false}}
          component={Details}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
