import React, { UseEffect, useState, createContext } from 'react';
import { Platform, NativeModules  } from 'react-native';

export const MainContext = createContext();

export const MainProvider = props => {

    const deviceLanguage = Platform.OS === 'ios'
        ? NativeModules.SettingsManager.settings.AppleLocale ||
          NativeModules.SettingsManager.settings.AppleLanguages[0] //iOS 13
        : NativeModules.I18nManager.localeIdentifier;

    const [ currentLanguage, setCurrentLanguage ] = useState(deviceLanguage);
    const [ isAdmLogged, setIsAdminLogged ] = useState(false);
    const [ errorAttemps, setErrorAttemps ] = useState(0);
    const [ modalOpen , setModalOpen ] = useState(false);

    const contextValue = {
        currentLanguage,
        setCurrentLanguage,
        errorAttemps,
        setErrorAttemps,
        isAdmLogged,
        setIsAdminLogged,
        modalOpen,
        setModalOpen
    }

    return (
        <MainContext.Provider value={contextValue}>
            { props.children }
        </MainContext.Provider>
    );
}