import React, {useState, useEffect, useContext } from "react";
import { Wrapper, WrapperCurrentLang, ReallySmallTitle, Image, TitleText, WrapperOptions, SmallBorder, WrapperAllLangs, IndividualLangs} from './styles';
import { TitleSmallBlack } from '../../../global';
import { Updates } from 'expo';
import { Alert } from 'react-native';

import axios from 'axios';
import { getData, storeData } from '../../Contexts/AsyncStorage';
import { MainProvider, MainContext} from '../../Contexts/MainContext';
import { getLocal } from '../../Functions';
import AsyncStorage from '@react-native-community/async-storage';
import i18n from '../../Languages/i18n';

const Config = () => {

    useEffect(() => {
        console.log(`Language Context At first: ${currentLanguage}`)
    }, [])

    const LanguageList = [
        {
            "id": 1,
            "name": i18n.t('languages.pt'),
            "code": "BR",
            "toVerify": 'PT',
        },
        {
            "id": 2,
            "name": i18n.t('languages.en'),
            "code": "US",
            "toVerify": 'EN'
        },
        {
            "id": 3,
            "name": i18n.t('languages.fr'),
            "code": "FR",
            "toVerify": 'FR'
        },
        {
            "id": 4,
            "name": i18n.t('languages.ger'),
            "code": "DE",
            "toVerify": 'DE'
        },
        {
            "id": 5,
            "name": i18n.t('languages.esp'),
            "code": "MX",
            "toVerify": 'ES' 
        }
    ]

    const { currentLanguage, setCurrentLanguage } = useContext(MainContext);

    const currentFlag = LanguageList.filter(ll => ll.toVerify === getLocal(currentLanguage).toUpperCase())[0].code;

    const flag = `https://www.countryflags.io/${currentFlag}/flat/64.png`;

    const languageLocal = async (value, name) => {

        Alert.alert(
            `Mudar idioma para ${name}`,
            'O app irá resetar',
            [
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              { text: 'OK', onPress: async () => {

                try {
                    await AsyncStorage.setItem('language', value);
                } catch (e) {
                    // saving error
                }

                Updates.reload()
              } },
            ],
            { cancelable: false }
          );

    }

    return (
        <MainProvider>
            <Wrapper>
                
                <WrapperCurrentLang>
                    <ReallySmallTitle>
                        Linguagem atual
                    </ReallySmallTitle>

                    <Image source={{ uri: flag }} />
                </WrapperCurrentLang>

                <WrapperOptions>
                    <TitleText>
                        Idioma
                    </TitleText>

                    <SmallBorder></SmallBorder>

                    <WrapperAllLangs>
                        {
                           LanguageList.map(l => (
                               <IndividualLangs key={l.id} onPress={() => languageLocal(`${l.toVerify.toLocaleLowerCase()}`, l.name)}>
                                   <Image source={{ uri: `https://www.countryflags.io/${l.code}/flat/64.png`}}/>
                                   <TitleText>
                                       {l.name}
                                   </TitleText>
                               </IndividualLangs>
                           )) 
                        }
                    </WrapperAllLangs>
                </WrapperOptions>

            </Wrapper>
        </MainProvider>
    )
}

export default Config;