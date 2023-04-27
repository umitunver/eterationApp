import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Cart, Profile, Favorites, Details } from '@src/screens/index';
import { useDispatch, useSelector } from 'react-redux';
import {
  BasketIcon,
  FavIcon,
  HomeIcon,
  PersonIcon
} from '@src/constants/icons';
import { View, Text, StyleSheet, Platform } from 'react-native';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabMenu() {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'HomeTab') {
            return <HomeIcon focused={focused} />;
          } else if (route.name === 'Cart') {
            return (
              <View style={{ position: 'relative' }}>
                <BasketIcon focused={focused} />
                {cartItems?.length > 0 && (
                  <View style={styles.badge}>
                    <Text style={styles.badgeText}>{cartItems?.length}</Text>
                  </View>
                )}
              </View>
            );
          } else if (route.name === 'Favorites') {
            return <FavIcon focused={focused} />;
          } else if (route.name === 'Profile') {
            return <PersonIcon focused={focused} />;
          }
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingTop: Platform.OS === 'ios' ? 10 : 0,
          backgroundColor: '#fff',
          borderTopWidth: 1,
          height: Platform.OS === 'ios' ? 80 : 60
        }
      })}>
      <Tab.Screen
        options={{
          title: 'Home Page',
          headerShown: false
        }}
        name="HomeTab"
        component={Home}
      />
      <Tab.Screen
        options={{
          title: 'Cart',
          headerShown: false,
          tabBarLabel: 'Home PAge'
        }}
        name="Cart"
        component={Cart}
      />

      <Tab.Screen
        options={{ title: 'Favorites', headerShown: false }}
        name="Favorites"
        component={Favorites}
      />
      <Tab.Screen
        options={{
          title: 'Profile',
          headerShown: false
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
          options={{ headerShown: false }}
          component={TabMenu}
        />
        <Stack.Screen
          name="Details"
          options={{ headerShown: false }}
          component={Details}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  badge: {
    position: 'absolute',
    right: -5,
    top: -5,
    zIndex: 2,
    backgroundColor: '#F90000',
    borderRadius: 100,
    width: 20,
    height: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  badgeText: {
    fontSize: 16,
    color: '#fff'
  }
});
