import i18n from 'i18n-js';
import * as Localization from 'expo-localization'
import React, {useContext, useEffect} from 'react';
import { Platform, NativeModules } from 'react-native';
import { View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { MainContext } from '../Contexts/MainContext';

import en from './locales/en.json';
import pt from './locales/pt.json';
import es from './locales/es.json';
import de from './locales/de.json';
import fr from './locales/fr.json';

 const deviceLanguage = Platform.OS === 'ios'
        ? NativeModules.SettingsManager.settings.AppleLocale ||
          NativeModules.SettingsManager.settings.AppleLanguages[0] //iOS 13
		: NativeModules.I18nManager.localeIdentifier; 


const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('language')
      if(value !== null) {
        return value;
      }else{
          return 'pt-BR';
      }
    } catch(e) {
      return 'pt-BR'
    }
}
	
i18n.defaultLocale = 'pt-BR';
i18n.fallbacks = true;
// i18n.translations = {  pt , en, es, de, fr};

export const loadLocale = async () => {
	await AsyncStorage.getItem('language').then((data) => {
		console.log(`Data from file ${data}`)
		i18n.locale = data;
		
		switch(data){
			case 'pt':
				i18n.translations = { pt }
			break;
			case 'es':
				i18n.translations = { es }
			break;
			case 'en':
				i18n.translations = { en }
			break;
			case 'fr':
				i18n.translations = { fr }
			break;
			case 'de':
				i18n.translations = { de }
			break;
			default:
				i18n.translations = { pt }
			break;
		}
	})
}

export default i18n;