import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Cart, Profile, Favorites} from '@src/screens/index';
import {useDispatch, useSelector} from 'react-redux';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabMenu() {
  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      screenOptions={({route}) => ({
        // tabBarIcon: ({focused, color, size}) => {
        //   if (route.name === 'HomeTab') {
        //     return (
        //       <Icon
        //         name={focused ? 'home' : 'home-outline'}
        //         size={25}
        //         color={focused ? '#FFCB02' : '#7E7E7E'}
        //       />
        //     );
        //   } else if (route.name === 'Search') {
        //     return (
        //       <Icon
        //         name={focused ? 'search' : 'search-outline'}
        //         size={25}
        //         color={focused ? '#FFCB02' : '#7E7E7E'}
        //       />
        //     );
        //   } else if (route.name === 'Profile') {
        //     return (
        //       <Icon
        //         name={focused ? 'person' : 'person-outline'}
        //         size={25}
        //         color={focused ? '#FFCB02' : '#7E7E7E'}
        //       />
        //     );
        //   } else if (route.name === 'Campaigns') {
        //     return (
        //       <Icon
        //         name={focused ? 'gift' : 'gift-outline'}
        //         size={25}
        //         color={focused ? '#FFCB02' : '#7E7E7E'}
        //       />
        //     );
        //   }
        // },
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingBottom: 20,
          paddingTop: 20,
          height: 80,
          backgroundColor: '#fff',
          borderTopEndRadius: 35,
          borderTopStartRadius: 35,
          borderWidth: 0,
          borderTopWidth: 0,
          position: 'absolute',
        },
      })}>
      <Tab.Screen
        options={{title: 'Home Page', headerShown: false}}
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
        options={{title: 'Profile', headerShown: false}}
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
