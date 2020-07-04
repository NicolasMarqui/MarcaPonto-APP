import React from 'react';
import { Wrapper, AnimationWrapper, DefaultText} from './styles.js';
import { TitleSmallBlack } from '../../../global';
import LottieView from "lottie-react-native";

const NoPoints = () => {

    const NOT_FOUND = require('../../../assets/animations/404.json');

    return(
        <Wrapper>
            <AnimationWrapper>
                <LottieView 
                    autoPlay
                    loop={true} 
                    source={NOT_FOUND} 
                    style={{
                        width: 170,
                        height: 170,
                    }}
                />
            </AnimationWrapper>

            <DefaultText>
                Você não possui nenhum ponto
            </DefaultText>
        </Wrapper>
    )
}

export default NoPoints;