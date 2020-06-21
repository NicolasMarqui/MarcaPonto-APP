import React from 'react';
import { Formik } from 'formik';
import { Wrapper, LogoBehind, TitleArea, Description, FormArea, Input, Frag, LoginButton} from './styles';
import { TitleBig, TitleSmall, TitleSmallBlack } from '../../../global';

import i18n from '../../Languages/i18n';

const logo = require('../../../assets/logo.png');

const Login = () => {

    const INIT_VALUES = {
        email: '',
        password: '',
    }

    return(
        <Wrapper>
            
            <LogoBehind source={logo} />
    
            <TitleArea>
                <TitleBig>
                    {i18n.t('home.login_title')}
                </TitleBig>
    
                <Description>
                    Admin Area
                </Description>
            </TitleArea>
    
            <FormArea>
                <Formik
                    initialValues={INIT_VALUES}
                    onSubmit={(values) => {
                        console.log(values)
                    }}
                >
                    {
                        (formikProps) => (
                            <Frag>
                                <Input 
                                    placeholder="Email"
                                    onChangeText={formikProps.handleChange('email')}
                                    value={formikProps.values.email}
                                />

                                <Input 
                                    placeholder="Password"
                                    onChangeText={formikProps.handleChange('password')}
                                    value={formikProps.values.password}
                                />

                                <LoginButton title="Login" color="#8D0C17"/>
                            </Frag>
                        )
                    }
                </Formik>
            </FormArea>
    
        </Wrapper>
    )
}

export default Login