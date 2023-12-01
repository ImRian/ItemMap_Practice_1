import React from 'react';
import { View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import MapScreen from '../screens/SearchScreen'; 
import ProfileScreen from '../screens/ProfileScreen';
import { ContentRoutes } from './routes';
import { GRAY, PRIMARY } from '../colors';
import TabBarAddButton from '../components/TabBarAddButton';

const Tab = createBottomTabNavigator();

const TabIconWithLabel = ({ color, size, name, label }) => {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', width: 80 }}>
      <MaterialCommunityIcons name={name} size={size} color={color} />
      <Text style={{ color, fontSize: 10 }} numberOfLines={1}>
        {label}
      </Text>
    </View>
  );
};


const AddButtonScreen = () => null;

const ContentTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: PRIMARY.DARK,
        tabBarInactiveTintColor: GRAY.DARK,
        tabBarShowLabel: false, 
      }}
    >
      <Tab.Screen
        name={ContentRoutes.HOME}
        component={HomeScreen}
        options={{
          tabBarIcon: (props) => (
            <TabIconWithLabel {...props} label="홈" name="home" />
          ),
        }}
      />
      <Tab.Screen
        name={ContentRoutes.MAP}
        component={SearchScreen}
        options={{
          tabBarIcon: (props) => (
            <TabIconWithLabel {...props} label="검색" name="magnify" />
          ),
        }}
      />
 
      <Tab.Screen
        name={'AddButton'}
        component={AddButtonScreen}
        options={{ tabBarButton: () => <TabBarAddButton /> }}
      />
      <Tab.Screen
        name={ContentRoutes.LIST}
        component={MapScreen}
        options={{
          tabBarIcon: (props) => (
            <TabIconWithLabel {...props} label="채팅하기" name="comment" />
          ),
        }}
      />
      <Tab.Screen
        name={ContentRoutes.PROFILE}
        component={ProfileScreen}
        options={{
          tabBarIcon: (props) => (
            <TabIconWithLabel {...props} label="마이페이지" name="account" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default ContentTab;
