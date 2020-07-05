import React from 'react';
import styled from 'styled-components';
import Block from '../Block';

import i18n from '../../Languages/i18n';

const BlockWrapper = styled.View`
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`

const BlockList = ({ navigation }) => {

    const BLOCK_INFO = [
        {
            id: 1,
            title: i18n.t('home.ponto_title'),
            description: i18n.t('home.ponto_subtitle'),
            icon: {
                uri: require('../../../assets/icons/ponto.png'),
                isLarge: true
            },
            defaultTitle: i18n.t('default.ponto'),
            size: 2,
            color: '#8E0C18',
        },
        {
            id: 2,
            title: i18n.t('home.login_title'),
            description: i18n.t('home.login_subtitle'),
            icon: {
                uri: require('../../../assets/icons/login.png'),
                isLarge: false
            },
            defaultTitle: i18n.t('default.login'),
            size: 1,
            color: '#7460EE',
        },
        {
            id: 3,
            title: i18n.t('home.sobre_title'),
            description: i18n.t('home.sobre_subtitle'),
            icon: {
                uri: require('../../../assets/icons/info.png'),
                isLarge: false
            },
            defaultTitle: i18n.t('default.about'),
            size: 1,
            color: '#000000',
        },
        {
            id: 4,
            title: i18n.t('home.config_title'),
            description: i18n.t('home.config_subtitle'),
            icon: undefined,
            defaultTitle: i18n.t('default.config'),
            size: 2,
            color: '#11A0F8',
        },
    
    ]

    return (
        <>
            <BlockWrapper>
                {BLOCK_INFO.map(b => (
                    <Block key={b.id} data={b} navigation={navigation}/>
                ))}
            </BlockWrapper>
        </>
    )
};

export default BlockList;