import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Home,
  Login,
  Register,
  Welcome,
  Profile,
  Search,
  Campaigns,
  Category,
  Detail,
  CampaignDetail,
  Basket,
  Payment,
  EditProfile,
  Address,
  Language,
  Help,
  OrderSuccess,
  HistoryOrders,
} from '@src/screens/index';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabMenu() {
  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === 'HomeTab') {
            return (
              <Icon
                name={focused ? 'home' : 'home-outline'}
                size={25}
                color={focused ? '#FFCB02' : '#7E7E7E'}
              />
            );
          } else if (route.name === 'Search') {
            return (
              <Icon
                name={focused ? 'search' : 'search-outline'}
                size={25}
                color={focused ? '#FFCB02' : '#7E7E7E'}
              />
            );
          } else if (route.name === 'Profile') {
            return (
              <Icon
                name={focused ? 'person' : 'person-outline'}
                size={25}
                color={focused ? '#FFCB02' : '#7E7E7E'}
              />
            );
          } else if (route.name === 'Campaigns') {
            return (
              <Icon
                name={focused ? 'gift' : 'gift-outline'}
                size={25}
                color={focused ? '#FFCB02' : '#7E7E7E'}
              />
            );
          }
        },
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
        options={{title: 'Ana sayfa', headerShown: false}}
        name="HomeTab"
        component={Home}
      />
      <Tab.Screen
        options={{title: 'Ürün Ara', headerShown: false}}
        name="Search"
        component={Search}
      />

      <Tab.Screen
        options={{title: 'Profil', headerShown: false}}
        name="Profile"
        component={Profile}
      />
      <Tab.Screen
        options={{title: 'Kampanyalar', headerShown: false}}
        name="Campaigns"
        component={Campaigns}
      />
    </Tab.Navigator>
  );
}

export default function Routes() {
  const dispatch = useDispatch();
  const {authToken} = useSelector(state => state.auth);
  return (
    <NavigationContainer>
      {!authToken ? (
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen
            name="Welcome"
            options={{headerShown: false}}
            component={Welcome}
          />
          <Stack.Screen
            name="Login"
            options={{headerShown: false}}
            component={Login}
          />
          <Stack.Screen
            name="Register"
            options={{headerShown: false}}
            component={Register}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            options={{headerShown: false}}
            component={TabMenu}
          />
          <Stack.Screen
            name="Category"
            options={{headerShown: false, title: 'Ürünler'}}
            component={Category}
          />
          <Stack.Screen
            name="Detail"
            options={{headerShown: false, title: 'Ürünler'}}
            component={Detail}
          />
          <Stack.Screen
            name="CampaignDetail"
            options={{headerShown: false, title: 'Ürünler'}}
            component={CampaignDetail}
          />
          <Stack.Screen
            name="Basket"
            options={{headerShown: false, title: 'Ürünler'}}
            component={Basket}
          />
          <Stack.Screen
            name="Payment"
            options={{headerShown: false, title: 'Ödeme Yap'}}
            component={Payment}
          />
          <Stack.Screen
            name="EditProfile"
            options={{headerShown: false, title: 'EditProfile'}}
            component={EditProfile}
          />
          <Stack.Screen
            name="Address"
            options={{headerShown: false, title: 'Adres Ekle'}}
            component={Address}
          />
          <Stack.Screen
            name="Language"
            options={{headerShown: false, title: 'Uygulama Dili'}}
            component={Language}
          />
          <Stack.Screen
            name="Help"
            options={{headerShown: false, title: 'Yardım'}}
            component={Help}
          />
          <Stack.Screen
            name="OrderSuccess"
            options={{headerShown: false, title: 'OrderSuccess'}}
            component={OrderSuccess}
          />
          <Stack.Screen
            name="HistoryOrders"
            options={{headerShown: false, title: 'HistoryOrders'}}
            component={HistoryOrders}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
