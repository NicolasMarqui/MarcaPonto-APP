import React, { useContext, useEffect, useState} from 'react';
import { Formik } from 'formik';
import { Wrapper, LogoBehind, TitleArea, Description, FormArea, Input, Frag, LoginButton, LoaderWrapper, WrapperEsqueci, TextEsqueciConta} from './styles';
import { TitleBig, TitleSmall, TitleSmallBlack } from '../../../global';
import LottieView from "lottie-react-native";
import i18n from '../../Languages/i18n';
import { MainContext } from '../../Contexts/MainContext';
import axios from 'axios'; 
import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-community/async-storage';

const logo = require('../../../assets/logo.png');
const LOADING = require('../../../assets/animations/loading.json');

const Login = ({ navigation }) => {

    const { isUserLogged, setIsUserLogged, setLoggedUserInfo } = useContext(MainContext);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ hasError, setHasError ] = useState(false);
    const URL_ENDPOINT = 'https://ws-marcaponto.herokuapp.com/login';

    useEffect(() => {
        checkIfUserIsLogged();
    }, [])

    const checkIfUserIsLogged = async () => {
        await AsyncStorage.getItem('userLogged')
            .then(data => {
                if(data === "true"){
                    setIsLoading(true);
                    setIsUserLogged(true);

                    navigation.replace('Dashboard')
                }else{
                    setIsLoading(false);
                    setIsUserLogged(false)
                }
            })
    }

    return(
        <Wrapper>
            
            <LogoBehind source={logo} />
    
            <TitleArea>
                <TitleBig>
                    {i18n.t('home.login_title')}
                </TitleBig>

            </TitleArea>
    
            {
                !isLoading && <FormArea>
                <Formik
                    initialValues={{ username: '', password: '' }}
                    onSubmit={ async (values) => {
                        const { username, password } = values;

                        if(username === '' || password == ''){
                            Toast.showWithGravity('Preencha todos os campos', Toast.LONG, Toast.CENTER);
                            return false;
                        }

                        setIsLoading(true);

                        await axios.post(URL_ENDPOINT, { 
                            username: username,
                            password: password
                         })
                            .then(async (data) => {
                                await AsyncStorage.setItem('userLogged', "true");
                                await AsyncStorage.setItem('userToken', data.headers['authorization']);
                                await AsyncStorage.setItem('userLoggedUsername', username);
                                setIsUserLogged(true);
                                navigation.replace('Dashboard')
                            })
                            .catch(err => {
                                Toast.showWithGravity('Usuário ou senha incorretos', Toast.LONG, Toast.CENTER);
                                setHasError(true);
                                setIsLoading(false)
                            })
                    }}
                >
                    {
                        ({ values, handleChange, handleSubmit }) => (
                            <Frag>
                                <Input 
                                    placeholder="Username"
                                    onChangeText={handleChange('username')}
                                    value={values.username}
                                    hasError={hasError ? '#8E0C18' : '#000'}
                                />

                                <Input 
                                    placeholder="Password"
                                    onChangeText={handleChange('password')}
                                    value={values.password}
                                    secureTextEntry={true}
                                    hasError={hasError ? '#8E0C18' : '#000'}
                                />

                                <LoginButton color="#8D0C17" onPress={handleSubmit}>
                                    <TitleSmall>
                                        Login
                                    </TitleSmall>
                                </LoginButton>

                                <WrapperEsqueci onPress={() => navigation.navigate('EsqueciSenha')}>
                                    <TextEsqueciConta>
                                        Esqueci minha senha
                                    </TextEsqueciConta>
                                </WrapperEsqueci>
                            </Frag>
                        )
                    }
                </Formik>
            </FormArea>
            }

            {
                isLoading && <LoaderWrapper>
                <LottieView 
                    autoPlay
                    loop={true} 
                    source={LOADING} 
                    style={{
                        width: 250,
                        height: 250,
                    }}
                />
            </LoaderWrapper>
            }
    
        </Wrapper>
    )
}

export default Login