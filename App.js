import React from 'react';
import Loading from './src/Components/Loading';
import { NavigationContainer } from '@react-navigation/native';
import { IntlProvider } from 'react-intl';
import { Text } from 'react-native';
import { Wrapper } from './global';
import { useFonts } from '@use-expo/font';
import { Poppins_700Bold, Poppins_400Regular } from '@expo-google-fonts/poppins';

import Home from './src/Pages/Home';

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
				<Wrapper>
					<Home />
				</Wrapper>
			</NavigationContainer>
		  );
	}
}