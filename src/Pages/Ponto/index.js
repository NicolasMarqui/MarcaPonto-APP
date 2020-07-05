import React, {useState, useEffect, useRef, useContext} from 'react';
import Modal from 'react-native-modal';
import { PontoWrapper, SnapPic, CloseModal, LoadingModalWrapper, TitleCPF, WrapperUserNotLogged, TitleNotLogged, GoToLogin, GoToWrapper, WrapperUserLogged, WrapperButtonMarcar, WrapperShowTime, TextHour, WrapperShowRegistros} from './styles';
import { TitleSmallBlack, TitleBig, TitleSmall} from '../../../global';
import { Camera } from 'expo-camera';
import { Entypo, AntDesign} from '@expo/vector-icons';
import LottieView from "lottie-react-native";
import AsyncStorage from '@react-native-community/async-storage';
import moment from 'moment';
import localization from "moment/locale/pt-br";
import Toast from 'react-native-simple-toast';
import axios from 'axios';
import { displayInAnotherLanguage } from '../../Functions';

import NoAccess from '../../Components/NoAccess';
import ModalSuccess from '../../Components/ModalSuccess';
import ModalError from '../../Components/ModalError';
import { MainContext } from '../../Contexts/MainContext';
import AfterPoint from '../../Components/AfterPoint';

const Ponto = ({ navigation }) => {
    const { modalOpen, setModalOpen } = useContext(MainContext)
    const camRef = useRef(null);
    const [ type, setType ] = useState(Camera.Constants.Type.front);
    const [ hasPermission, setHasPermission ] = useState(null);
    const [ capturedPhoto, setCapturedPhoto ] = useState(null);
    const [ currentHour , setcurrentHour ] = useState('')
    const [ currentDate , setcurrentDate ] = useState('')

    // Teste only
    const [ isCameraWorking , setisCameraWorking ] = useState(false);
    const [ photoReconhecida, setPhotoReconhecida ] = useState(false);
    const [ loadingPicture , setLoadingPicture ] = useState(false);

    // No camera working
    const [ isUserLogged , setIsUserLogged ] = useState(false);
    const [ checkingForUser , setcheckingForUser ] = useState(true);
    const [ loggedUserID , setLoggedUserID ] = useState('');
    const [ loggedUserToken , setLoggedUserToken ] = useState('');
    const [ pontoAttempt, setPontoAttempt ] = useState(false);
    const [ pontoSuccess  , setPontoSuccess ] = useState(false);

    const LOADING = require('../../../assets/animations/loading.json');
    const ATENTION = require('../../../assets/animations/atention.json');
    const WORKING = require('../../../assets/animations/working.json');
    const SUCCESS = require('../../../assets/animations/success.json');
    const ERROR = require('../../../assets/animations/error.json');

    const NEW_PONTO_ENDPOINT = 'https://ws-marcaponto.herokuapp.com/api/v1/ponto';

    const TIPOS_REGISTRO = [
        {
            id: 0,
            title: "Início da Jornada"
        },
        {
            id: 1,
            title: "Início do Intervalo"
        },
        {
            id: 2,
            title: "Fim do Intervalo"
        },
        {
            id: 3,
            title: "Fim da Jornada"
        },
    ]

    const checkIfUserIsLogged = async () => {
        await AsyncStorage.getItem('userLogged')
            .then(data => {
                if(data === 'true'){
                    setIsUserLogged(true);
                    setcheckingForUser(false)
                }else{
                    setIsUserLogged(false);
                    setcheckingForUser(false);
                }
            })

        await AsyncStorage.getItem('loggedUserInfo')
            .then(data => {
                const JSONparse = JSON.parse(data);
                setLoggedUserID(JSONparse.colaboradorId)
            })
            .catch(err => alert(err))

        await AsyncStorage.getItem('userToken')
            .then(data => {
                setLoggedUserToken(data)
            })
            .catch(err => alert(err))
    }

    const setTime = () => {
        let time = moment().format('LTS');
        setcurrentHour(time);

        return time;
    }

    const setDate = () => {
        let day = new Date().getDay();
        let date = moment(new Date()).format(`${day < 10 ? '0' : ''}D/MM/YYYY`);
        setcurrentDate(date);

        return date;
    }

    useEffect(() => {

        moment.updateLocale('pt-br', localization);

        checkIfUserIsLogged();

        (async () => {
            // const { status } = await Camera.requestPermissionsAsync();
            setHasPermission('granted');
        })();

        let timer = setInterval(() => {
            setTime();
            setDate();
          }, 1000);

    }, []);

    const marcarPonto = async (registroID) => {

        let day = new Date().getDay();
        let date = moment(new Date()).format(`${day < 10 ? '0' : ''}D/MM/YYYY`);
        let horario = moment().format('LT');

        const newPonto = {
            colaboradorId: loggedUserID,
            tipoDoRegistroId: Number(registroID),
            data: date.toString(),
            horario: horario.toString()
        }

        setPontoAttempt(true)

        await axios.post(NEW_PONTO_ENDPOINT, newPonto, { headers: { 'Authorization': loggedUserToken }})
            .then(response => {
                setPontoSuccess(true)
                Toast.showWithGravity('Ponto gravado com sucesso :)', Toast.LONG, Toast.CENTER);
            })
            .catch(err => {
                setPontoSuccess(false);
                Toast.showWithGravity('Ops, algo deu errado :(', Toast.LONG, Toast.CENTER);
            })
 
    }

    if(hasPermission === null){
        return <NoAccess />
    }

    if(hasPermission === false){
        return <NoAccess />
    }

    async function takePicture(){
        if(camRef){
            const data = await camRef.current.takePictureAsync();
            setCapturedPhoto(data.uri);
            setModalOpen(true);
            setPhotoReconhecida(false);
        }
    }

    if(isCameraWorking){
        return(
            <PontoWrapper>
                <Camera 
                    style={{ flex: 15 }}
                    type={type}
                    ref={camRef}
                />
    
                <SnapPic onPress={ takePicture }>
                    <Entypo name="camera" size={44} color="white" />
                </SnapPic>
    
                {capturedPhoto &&
                    <Modal
                        animationIn="slideInUp"
                        animationOut="slideOutDown"
                        transparent={false}
                        isVisible={modalOpen}
                        coverScreen={true}
                        hasBackdrop={true}
                        backdropColor="#fff"
                    >
                        <CloseModal onPress={() => setModalOpen(false)}>
                            <AntDesign name="closecircle" size={34} color="#8E0C18" />
                        </CloseModal>
    
                        {
                            loadingPicture && 
                            <LoadingModalWrapper>
                                <LottieView source={LOADING} autoPlay style={{ height: 300, width: 300}}/>
                            </LoadingModalWrapper>
                        }
    
                        {
                            !loadingPicture && photoReconhecida 
                            
                            ? 
                            
                            <ModalSuccess picture={capturedPhoto} navigation={navigation} /> 
                            
                            : 
                            
                            <ModalError navigation={navigation} picture={capturedPhoto}/>
                        }
            
                    </Modal>
                }
            </PontoWrapper>
        )
    }else{
        return(
            <PontoWrapper contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center'}}>
                {
                    checkingForUser ? 
                        <LottieView 
                            autoPlay
                            loop={true} 
                            source={LOADING} 
                            style={{
                                width: 70,
                                height: 70,
                            }}
                        />
                    :

                    isUserLogged ? 
                    
                    <WrapperUserLogged>

                        <WrapperShowTime>
                            <TitleBig>
                                {currentDate ? currentDate : 
                                    <LottieView 
                                        autoPlay
                                        loop={true} 
                                        source={LOADING} 
                                        style={{
                                            width: 70,
                                            height: 70,
                                        }}
                                    />
                                }
                            </TitleBig>
                            <TextHour>
                                {currentHour ? currentHour : 
                                    <LottieView 
                                        autoPlay
                                        loop={true} 
                                        source={LOADING} 
                                        style={{
                                            width: 70,
                                            height: 70,
                                        }}
                                    />
                                }
                            </TextHour>
                        </WrapperShowTime>

                        <LottieView 
                            autoPlay
                            loop={true} 
                            source={WORKING} 
                            style={{
                                width: 170,
                                height: 170,
                            }}
                        />

                        {
                            pontoAttempt ? 
                            
                                <LottieView 
                                    autoPlay
                                    loop={false} 
                                    source={pontoSuccess ? ERROR : SUCCESS} 
                                    style={{
                                        width: 270,
                                        height: 270,
                                    }}
                                    onAnimationFinish={() => setPontoAttempt(false)}
                                />

                            :

                            <WrapperShowRegistros>
                                {
                                    TIPOS_REGISTRO.map((r,i) => (
                                        <WrapperButtonMarcar onPress={() => marcarPonto(r.id)} key={r.id}>
                                            <TitleSmall>
                                                {displayInAnotherLanguage(i)}
                                            </TitleSmall>
                                        </WrapperButtonMarcar>
                                    ))
                                }
                            </WrapperShowRegistros>
                        }

                    </WrapperUserLogged>

                    :

                    <WrapperUserNotLogged>

                        <LottieView 
                            autoPlay
                            loop={true} 
                            source={ATENTION} 
                            style={{
                                width: 70,
                                height: 70,
                            }}
                        />

                        <TitleNotLogged>
                            Você precisa se logar
                        </TitleNotLogged>

                        <GoToWrapper onPress={() => navigation.navigate('Login')}>
                            <GoToLogin>
                                Faça Login
                            </GoToLogin>
                        </GoToWrapper>
                    </WrapperUserNotLogged>
                }
            </PontoWrapper>
        )
    }

    
};

export default Ponto;