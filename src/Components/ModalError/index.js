import React, { useContext, useEffect, useState} from 'react';
import { Dimensions } from 'react-native';
import LottieView from "lottie-react-native";
import { ModalInside, Image, Date, TitleAndLoading, CanHaveDigits, ButtonOpenDigit, SupSmall} from './styles';
import { MainContext } from '../../Contexts/MainContext';
import { TitleSmallBlack, TitleSmall } from '../../../global';
import Modal from 'react-native-modal';

const ModalError = ({ picture, navigation }) => {

    const ERROR = require('../../../assets/animations/error.json');
    const LOADING = require('../../../assets/animations/loading.json');

    const { errorAttemps, setErrorAttemps, setModalOpen} = useContext(MainContext);
    const [ canUseDigits , setcanUseDigits ] = useState(false);
    const [ digitsOpen , setdigitsOpen ] = useState(false);

    useEffect(() => {
        setErrorAttemps(errorAttemps => errorAttemps + 1)

    }, [])

    const goToPonto = () => {
        if(errorAttemps < 2){
            setModalOpen(false);
        }else{
            setcanUseDigits(true);
        }
    }

    const WINDOW_HEIGHT = Dimensions.get('window').height;
    const WINDOW_WIDTH = Dimensions.get('window').width;

    return(
        <ModalInside contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-start'}}>
            <Image source={{ uri: picture }} resizeMode="contain" style={{ height: 400 , width: '100%'}}/>

            <LottieView 
                autoPlay
                loop={false} 
                onAnimationFinish={() => goToPonto()}
                source={ERROR} 
                style={{
                    width: 100,
                    height: 100,
                    position: 'absolute',
                    top: 70,
                    left: 60
                }}
            />

            {
                !canUseDigits ?

                <TitleAndLoading>
                    <TitleSmallBlack>
                        Não encontrado :(
                    </TitleSmallBlack>
                    <Date>
                        Tente Novamente
                    </Date>

                    <LottieView 
                        autoPlay
                        loop={true} 
                        source={LOADING} 
                        style={{
                            width: 50,
                            height: 50,
                        }}
                    />
                </TitleAndLoading> :

                <CanHaveDigits>
                    <Date>Não reconhecemos sua face :(</Date>
                    <Date>Você pode utilizar outros metódos para bater o ponto</Date>

                    <ButtonOpenDigit onPress={() => setdigitsOpen(true)}>
                        <TitleSmall>
                            CPF
                        </TitleSmall>
                    </ButtonOpenDigit>

                    <SupSmall>Seu ponto será aprovado por seu gestor</SupSmall>
                </CanHaveDigits>
            }

            {
                digitsOpen && 

                <Modal
                    animationIn="slideInUp"
                    animationOut="slideOutDown"
                    transparent={false}
                    isVisible={digitsOpen}
                    coverScreen={false}
                    hasBackdrop={true}
                    backdropColor="#fff"
                >

                    
                    
                </Modal>


            }

        </ModalInside>
    );
}

export default ModalError;