import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import i18n from '../src/Languages/i18n';

import Home from './Pages/Home';
import Ponto from './Pages/Ponto';
import Login from './Pages/Login';
import Config from './Pages/Config';

const Stack = createStackNavigator();

const Navigation = () => (
    <Stack.Navigator screenOptions={{ headerShown: false}}>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Ponto" component={Ponto} options={{ headerShown: true, title: i18n.t('home.ponto_title')}}/>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false, title: i18n.t('home.login_title')}}/>
        <Stack.Screen name="Config" component={Config} options={{ headerShown: true, title: i18n.t('home.config_title')}}/>
    </Stack.Navigator>
)

export default Navigation;