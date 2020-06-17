import React from 'react';
import { Wrapper, LogoBehind, TitleArea, Description} from './styles';
import { TitleBig } from '../../../global';

import BlockList from '../../Components/BlockList';

const logo = require('../../../assets/logo.png');

const Home = () => (
    <Wrapper>
        <LogoBehind source={logo} />

        <TitleArea>
            <TitleBig>
                Marca Ponto
            </TitleBig>

            <Description>
                by PortabilIT
            </Description>
        </TitleArea>

        <BlockList />
    </Wrapper>
);

export default Home;