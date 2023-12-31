import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import Dilever from './Dilever';

function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
        </View>
    );
}

const Tab = createBottomTabNavigator();

export default function Taps() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'directions-bike'
                            : 'directions-bike';
                    } else if (route.name === 'Settings') {
                        iconName = focused ? 'home-filled' : 'home-filled';
                    }

                    // You can return any component that you like here!
                    return <MaterialIcons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
                headerShown: false
            })}
        >
            <Tab.Screen options={{ tabBarLabel: 'عمليات التوصيل', tabBarLabelStyle: { fontWeight: 'bold' } }} name="Home" component={Dilever} />
            <Tab.Screen options={{ tabBarLabel: 'الصفحة الرئيسية', tabBarLabelStyle: { fontWeight: 'bold' } }} name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    );
}