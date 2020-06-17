import React from 'react';
import styled from 'styled-components';
import Block from '../Block';

const BLOCK_INFO = [
    {
        id: 1,
        title: 'Ponto',
        description: 'Marque aqui seu ponto',
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
            uri: require('../../../assets/icons/login.png'),
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

const BlockList = () => (
    <>
        <BlockWrapper>
            {BLOCK_INFO.map(b => (
                <Block key={b.id} data={b}/>
            ))}
        </BlockWrapper>
    </>
);

export default BlockList;