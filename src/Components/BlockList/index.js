import React from 'react';
import styled from 'styled-components';
import Block from '../Block';

import i18n from '../../Languages/i18n';

const BLOCK_INFO = [
    {
        id: 1,
        title: i18n.t('home.ponto_title'),
        description: i18n.t('home.ponto_subtitle'),
        icon: {
            uri: require('../../../assets/icons/ponto.png'),
            isLarge: true
        },
        size: 2,
        color: '#8E0C18',
    },
    {
        id: 2,
        title: 'Login',
        description: 'Relatórios',
        icon: {
            uri: require('../../../assets/icons/login.png'),
            isLarge: false
        },
        size: 1,
        color: '#7460EE',
    },
    {
        id: 3,
        title: 'Sobre',
        description: 'Informações',
        icon: {
            uri: require('../../../assets/icons/info.png'),
            isLarge: false
        },
        size: 1,
        color: '#000000',
    },
    {
        id: 4,
        title: 'Configurações',
        description: 'Lorem Ipsum',
        icon: undefined,
        size: 2,
        color: '#11A0F8',
    },

]

const BlockWrapper = styled.View`
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`

const BlockList = ({ navigation }) => (
    <>
        <BlockWrapper>
            {BLOCK_INFO.map(b => (
                <Block key={b.id} data={b} navigation={navigation}/>
            ))}
        </BlockWrapper>
    </>
);

export default BlockList;