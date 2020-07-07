import React, {useState, useEffect, useContext } from "react";
import { Wrapper, WrapperCurrentLang, ReallySmallTitle, Image, TitleText, WrapperOptions, SmallBorder, WrapperAllLangs, IndividualLangs} from './styles';
import i18n from '../../Languages/i18n';
import LottieView from "lottie-react-native";

const Sobre = () => {

    const LOGO = require('../../../assets/logo.png');
    const TEAM = require('../../../assets/animations/team.json');

    const ALUNOS = [
        {
            id: 1,
            name: "Erikson Lopes"
        },
        {
            id: 2,
            name: "Heitor Amaral"
        },
        {
            id: 3,
            name: "Juarez Junior"
        },
        {
            id: 4,
            name: "Lucas Amstalden"
        },
        {
            id: 5,
            name: "Nicolas Marqui"
        },
    ]

    return (
        <Wrapper>
            
            <WrapperCurrentLang>
                <Image source={LOGO} />
            </WrapperCurrentLang>

            <LottieView 
                autoPlay
                loop={true} 
                source={TEAM} 
                style={{
                    width: 270,
                    height: 270,
                }}
            />

            <WrapperOptions>
                <TitleText>
                    Desenvolvido por
                </TitleText>

                {
                    ALUNOS.map(a => (
                        <ReallySmallTitle key={a.id}>
                            {a.name}
                        </ReallySmallTitle>
                    ))
                }
            </WrapperOptions>

        </Wrapper>
    )
}

export default Sobre;