import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import i18n from '../src/Languages/i18n';
import { AntDesign } from '@expo/vector-icons';
import styled from 'styled-components';
import AsyncStorage from '@react-native-community/async-storage';

import Home from './Pages/Home';
import Ponto from './Pages/Ponto';
import Login from './Pages/Login';
import Config from './Pages/Config';
import Dashboard from './Pages/Dashboard';
import EsqueciSenha from './Pages/EsqueciSenha';

const Stack = createStackNavigator();

const LOGO = require('../assets/logo.png');

const ConfigWrapperDashboard = styled.TouchableOpacity`
    flex: 1;
    padding: 0 10px;
    align-items: center;
    justify-content: center;
`

const Navigation = () => (
    <Stack.Navigator screenOptions={({ navigation }) => (
        { 
            headerShown: false,
            headerRight: () => <ConfigWrapperDashboard onPress={async () => {
                await AsyncStorage.setItem('userLoggedUsername', "")
                await AsyncStorage.setItem('userLogged', "false")
                await AsyncStorage.setItem('userToken', "");
                await AsyncStorage.setItem('userLoggedInfo', "");
                navigation.replace('Login')
            }}>
                <AntDesign name="logout" size={25} color="black" />
            </ConfigWrapperDashboard>

        })}>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Ponto" component={Ponto} options={{ headerShown: true, title: i18n.t('home.ponto_title'), headerRight: null}}/>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false, title: i18n.t('home.login_title'), headerRight: null}}/>
        <Stack.Screen name="Config" component={Config} options={{ headerShown: true, title: i18n.t('home.config_title'), headerRight: null}}/>
        <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown: true, title: 'Dashboard'}}/>
        <Stack.Screen name="EsqueciSenha" component={EsqueciSenha} options={{headerShown: true, title: 'Recuperar Senha', headerRight: null}}/>
    </Stack.Navigator>
)

export default Navigation;