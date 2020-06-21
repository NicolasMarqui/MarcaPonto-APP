import React, { useState } from 'react';
import { TitleSmall, TitleSmallBlack} from '../../../global';
import { Wrapper, ButtonLike, InfoArea, Description, AnimationContainer} from './styles';

import LottieView from "lottie-react-native";

const TipoPonto = ({ navigation }) => {
    
    const [ currentOption, setCurrentOption ] = useState(null);
    const SUCCESS = require('../../../assets/animations/success.json');

    const INFORMACOES = [
        {
            id: 1,
            text: 'Entrada'
        },
        {
            id: 2,
            text: 'Saída'
        },
        {
            id: 3,
            text: 'Almoço'
        },
        {
            id: 4,
            text: 'Sexo'
        },
    ]

    return(
        <Wrapper>

            <InfoArea>
                <Description>Olá</Description>
                <TitleSmallBlack>Nicolas Marqui</TitleSmallBlack>
                <Description>Escolha o tipo de situação que melhor expressa seu horário</Description>
            </InfoArea>

            {
                !currentOption ? INFORMACOES.map((info) => (
                    <ButtonLike onPress={() => setCurrentOption(info.text)} key={info.id}>
                        <TitleSmall>
                            {info.text}
                        </TitleSmall>
                    </ButtonLike>     
                )    
            ) :

            <AnimationContainer>
                <LottieView 
                    autoPlay 
                    onAnimationFinish={() => navigation.navigate('Home')}
                    loop={false} 
                    source={SUCCESS} 
                    style={{
                        width: 200,
                        height: 200,
                    }}
                />
            </AnimationContainer>
        
        }

        </Wrapper>
    );
}

export default TipoPonto;