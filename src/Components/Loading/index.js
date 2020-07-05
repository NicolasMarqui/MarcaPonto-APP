import React from 'react';
import LottieView from "lottie-react-native";
import { Wrapper } from './styles';

const Loading = () => {

    const LOADING = require('../../../assets/animations/loading.json')

    return (
        <Wrapper>
            <LottieView 
                autoPlay
                loop={true} 
                source={LOADING} 
                style={{
                    width: 270,
                    height: 270,
                }}
            />
        </Wrapper>
    );
}

export default Loading;