import React from 'react';
import Loading from './src/Components/Loading';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/Navigation';
import { Container } from './global';
import { useFonts } from '@use-expo/font';
import { Poppins_700Bold, Poppins_400Regular } from '@expo-google-fonts/poppins';

export default function App() {

	let [ fontsLoaded ] = useFonts({
		Poppins_400Regular,
		Poppins_700Bold
	})

	if(!fontsLoaded){
		return <Loading />
	}else{
		return (
			<NavigationContainer>
				<Navigation />
			</NavigationContainer>
		  );
	}
}