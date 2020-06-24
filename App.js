import React, { useEffect, useContext } from 'react';
import { Platform, NativeModules } from 'react-native';
import Loading from './src/Components/Loading';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/Navigation';
import { Container } from './global';
import { useFonts } from '@use-expo/font';
import { Poppins_700Bold, Poppins_400Regular } from '@expo-google-fonts/poppins';
import { storeData } from './src/Contexts/AsyncStorage';
import { MainProvider, MainContext} from './src/Contexts/MainContext';

import i18n, { loadLocale } from './src/Languages/i18n';


export default function App() {

	// const deviceLanguage = Platform.OS === 'ios'
	// 	? NativeModules.SettingsManager.settings.AppleLocale ||
	// 	NativeModules.SettingsManager.settings.AppleLanguages[0] //iOS 13
	// 	: NativeModules.I18nManager.localeIdentifier;
	
	useEffect(() => {
		init()
	}, [])

	const init = async () => {
		await loadLocale()
	}

	let [ fontsLoaded ] = useFonts({
		Poppins_400Regular,
		Poppins_700Bold
	})

	if(!fontsLoaded){
		return <Loading />
	}else{
		return (
			<MainProvider>
				<NavigationContainer>
					<Navigation />
				</NavigationContainer>
			</MainProvider>
		  );
	}
}