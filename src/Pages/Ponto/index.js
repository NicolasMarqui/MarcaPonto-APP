import React, {useState, useEffect, useRef} from 'react';
import { Modal } from 'react-native';
import { PontoWrapper, SnapPic, ModalInside, CloseModal, Image, Date} from './styles';
import { TitleSmallBlack } from '../../../global';
import { Camera } from 'expo-camera';
import { Entypo, AntDesign} from '@expo/vector-icons';

import NoAccess from '../../Components/NoAccess';

const Ponto = () => {
    const camRef = useRef(null);
    const [type, setType] = useState(Camera.Constants.Type.front);
    const [hasPermission, setHasPermission] = useState(null);
    const [capturedPhoto, setCapturedPhoto] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

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
                    animationType="slide"
                    transparent={false}
                    visible={modalOpen}
                >
        
                    <ModalInside>
                        <CloseModal onPress={() => setModalOpen(false)}>
                            <AntDesign name="closecircle" size={34} color="#8E0C18" />
                        </CloseModal>
        
                        {/* <View style={{ flex: 1 }}>
                            <LottieView source={done}/>
                        </View> */}
        
                        <Image source={{ uri: capturedPhoto }}/>

                        <TitleSmallBlack>
                            Nicolas Marqui
                        </TitleSmallBlack>

                        <Date>
                            Sáb 17:04:42
                        </Date>
        
                    </ModalInside>
        
                </Modal>
            }
        </PontoWrapper>
    )
};

export default Ponto;