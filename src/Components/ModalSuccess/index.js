import React, { useState, useEffect, useContext} from 'react';
import { Dimensions } from 'react-native';
import LottieView from "lottie-react-native";
import {ModalInside, Image, Date, TitleAndLoading, SidSmallImageWrapper} from './styles';
import { TitleSmallBlack } from '../../../global';
import { MainContext } from '../../Contexts/MainContext';

import TipoPonto from '../TipoPonto';

const ModalSuccess = ({ picture, navigation}) => {

    const { setErrorAttemps } = useContext(MainContext);
    const LOADING = require('../../../assets/animations/loading.json');
    const [ pictureHidden, setPictureHidden ] = useState(false);

    useEffect(() => {
        setErrorAttemps(0)
        window.setInterval(hidePicture, 5000);
    }, [])
    
    const WINDOW_HEIGHT = Dimensions.get('window').height;
    const WINDOW_WIDTH = Dimensions.get('window').width;

    const hidePicture = () => {
        setPictureHidden(true);
    }

    return(
        <ModalInside contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
            
            {
                !pictureHidden && <Image source={{ uri: picture }} resizeMode="contain" style={{ height: 500 , width: WINDOW_WIDTH - 20}}/>
            }

            {
                !pictureHidden && 
                
                <TitleAndLoading>
                    <TitleSmallBlack>
                        Aguarde um momento!
                    </TitleSmallBlack>

                    <LottieView 
                        autoPlay
                        loop={true} 
                        source={LOADING} 
                        style={{
                            width: 50,
                            height: 50,
                        }}
                    />
                </TitleAndLoading>
            }

            {
                pictureHidden && 

                <SidSmallImageWrapper>
                    <Image source={{ uri: picture }} resizeMode="contain" style={{ height: 100 }}/>
                </SidSmallImageWrapper>
            }

            {
                pictureHidden && <TipoPonto navigation={navigation}/>
            }


        </ModalInside>
    );
}

export default ModalSuccess;