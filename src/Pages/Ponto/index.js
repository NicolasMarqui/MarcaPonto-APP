import React, {useState, useEffect, useRef} from 'react';
import Modal from 'react-native-modal';
import { PontoWrapper, SnapPic, CloseModal, LoadingModalWrapper} from './styles';
import { TitleSmallBlack } from '../../../global';
import { Camera } from 'expo-camera';
import { Entypo, AntDesign} from '@expo/vector-icons';
import LottieView from "lottie-react-native";

import NoAccess from '../../Components/NoAccess';
import ModalSuccess from '../../Components/ModalSuccess';
import ModalError from '../../Components/ModalError';

const LOADING = require('../../../assets/animations/loading.json');

const Ponto = ({ navigation }) => {
    const camRef = useRef(null);
    const [type, setType] = useState(Camera.Constants.Type.front);
    const [hasPermission, setHasPermission] = useState(null);
    const [capturedPhoto, setCapturedPhoto] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    // Teste only
    const [ photoReconhecida, setPhotoReconhecida ] = useState(false);
    const [ loadingPicture , setLoadingPicture ] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

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
            setPhotoReconhecida(true);
        }
    }

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
                        !loadingPicture && photoReconhecida ? <ModalSuccess picture={capturedPhoto} navigation={navigation} /> : <ModalError navigation={navigation}/>
                    }
        
                </Modal>
            }
        </PontoWrapper>
    )
};

export default Ponto;