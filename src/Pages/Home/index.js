import React from 'react';
import { Wrapper, LogoBehind, TitleArea, Description} from './styles';
import { TitleBig, TitleSmall, TitleSmallBlack } from '../../../global';
import i18n from '../../Languages/i18n';

import BlockList from '../../Components/BlockList';
import DigitalClock from '../../Components/DigitalClock';

const logo = require('../../../assets/logo.png');

const Home = ({ navigation }) => (
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

        <BlockList navigation={navigation}/>

        <DigitalClock />

    </Wrapper>
);

export default Home;