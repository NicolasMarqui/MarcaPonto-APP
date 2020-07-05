import React, {useEffect, useContext } from 'react';
import { Wrapper, LogoBehind, TitleArea, Description, WrapperClock} from './styles';
import { TitleBig, TitleSmall, TitleSmallBlack } from '../../../global';
import i18n from '../../Languages/i18n';
import { MainContext } from '../../Contexts/MainContext';
import en from '../../Languages/locales/en.json';
import AsyncStorage from '@react-native-community/async-storage';

import BlockList from '../../Components/BlockList';
import DigitalClock from '../../Components/DigitalClock';

const logo = require('../../../assets/logo.png');

const Home = ({ navigation }) => {
		
    const { currentLanguage, setCurrentLanguage } = useContext(MainContext)

    const pleaseWork = async () => {
        try {
            await AsyncStorage.getItem('language').then(data => {
                i18n.locale = data;
                i18n.reset();
                console.log(`Home ${i18n.currentLocale()}`)
                return i18n;
            })
        } catch (e) {
            i18n.locale = 'pt-BR';
        }
    }

    return (
        <Wrapper>
            <LogoBehind source={logo} />
    
            <TitleArea>
                <TitleBig>
                    {i18n.t('app_title')}
                </TitleBig>
    
                <Description>
                    by PortabilIT
                </Description>
            </TitleArea>
    
            <BlockList navigation={navigation} i18n={i18n}/>
    
            <WrapperClock>
                <DigitalClock />
            </WrapperClock>
    
        </Wrapper>
    )
};

export default Home;