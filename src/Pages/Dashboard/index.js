import React, { useContext, useEffect, useState} from 'react';
import { Wrapper, TitleArea, Description, WrapperConteudo, DescriptionBold, RedDetail, TitleAreaColumn, LoaderWrapper} from './styles';
import { TitleSmallBlack } from '../../../global';
import axios from 'axios';
import PontoInfo from '../../Components/PontoInfo';
import LottieView from "lottie-react-native";
import AsyncStorage from '@react-native-community/async-storage';
import { capitalizeString } from '../../Functions';
import Toast from 'react-native-simple-toast';

import NoPoints from '../../Components/NoPoints';

const Dashboard = ({ navigation }) => {

    const LOADING = require('../../../assets/animations/loading.json');
    const LOGGED_INFO_URL = ''

    const [ currentUsername , setCurrentUsername ] = useState('');
    const [ currentUserToken , setcurrentUserToken ] = useState('');
    const [ currentUserId, setCurrentUserId ] = useState('');
    const [ userInfoLoaded , setUserInfoLoaded ] = useState(false);
    const [ userPontosLoaded , setUserPontosLoaded ] = useState(false);
    const [ allPoints , setAllPoints ] = useState([]);

    const USERNAME_ENDPOINT = 'https://ws-marcaponto.herokuapp.com/api/v1/auth/usuario';
    const ALL_POINTS_ENDPOINT = 'https://ws-marcaponto.herokuapp.com/api/v1/ponto/colaborador';

    useEffect(() => {
        getToken();
        getUsername();
    }, [])

    const getToken = async () => {
        await AsyncStorage.getItem('userToken')
            .then(data => {
                console.log(`Token do getToken: ${data}`)
                setcurrentUserToken(data);
                getColaboradorId(data);
            })
            .catch(err => navigation.replace('Home'))
    }

    const getUsername = async () => {
        await AsyncStorage.getItem('userLoggedUsername')
            .then(data => {
                setCurrentUsername(data)
                setUserInfoLoaded(true)
            })
            .catch(err => navigation.replace('Home'))
    }

    const getColaboradorId = async(token) => {
        console.log(`Token do getColaboradorID: ${token}`)
        await axios.get(USERNAME_ENDPOINT, { headers: { 'Authorization': token } })
            .then( async (response) => {

                const { colaboradorId } = response.data;

                setCurrentUserId(colaboradorId)
                getAllPontos(token, colaboradorId);
                
                await AsyncStorage.setItem('loggedUserInfo', JSON.stringify(response.data));

            })

            .catch(async (err) => {
                Toast.showWithGravity('Sua sessão Expirou :(', Toast.LONG, Toast.CENTER);
                await AsyncStorage.setItem('userLoggedUsername', "")
                await AsyncStorage.setItem('userLogged', "false")
                await AsyncStorage.setItem('userToken', "");
                navigation.replace('Login');
            })
    }

    const getAllPontos = async (token, id) => {
        console.log(`Token do getAllPoints: ${token}`)
        await axios.get(`${ALL_POINTS_ENDPOINT}/${id}`, { headers: { 'Authorization': token } })
            .then(points => {
                console.log(points.data)
                setAllPoints(points.data);
                setUserPontosLoaded(true);
            })
            .catch(err => {
                alert(err)
            })
    }

    return (
        <Wrapper contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-start' }}>

            {
                userInfoLoaded ? 
                <TitleArea>
                    <Description>
                        Olá
                    </Description>
                    <TitleSmallBlack>
                        {capitalizeString(currentUsername)}
                    </TitleSmallBlack>
                    <Description>
                        Aqui vc pode ver todos seus pontos e informações a mais sobre seu perfil, {currentUserId}
                    </Description>
                </TitleArea> :

                <LoaderWrapper>
                    <LottieView 
                        autoPlay
                        loop={true} 
                        source={LOADING} 
                        style={{
                            width: 70,
                            height: 70,
                        }}
                    />
                </LoaderWrapper>
            }
            

            <WrapperConteudo>
                
                <TitleAreaColumn>
                    <RedDetail></RedDetail>
                    <DescriptionBold>
                        Seus pontos
                    </DescriptionBold>
                </TitleAreaColumn>

                {
                    userPontosLoaded ? 

                    allPoints.length !== 0 ? 
                    
                    allPoints.map(p => <PontoInfo key={p.id} ponto={p}/>) 
                    
                    : 
                    
                    <NoPoints />

                    :

                    <LoaderWrapper>
                        <LottieView 
                            autoPlay
                            loop={true} 
                            source={LOADING} 
                            style={{
                                width: 70,
                                height: 70,
                            }}
                        />
                    </LoaderWrapper>
                }

                {/* <LinkToAllWrapper>
                    <LinkToAll>

                    </LinkToAll>
                </LinkToAllWrapper> */}

            </WrapperConteudo>
        </Wrapper>
    );
}

export default Dashboard;