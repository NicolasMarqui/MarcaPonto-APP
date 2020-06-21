import styled from 'styled-components';

export const  Wrapper = styled.SafeAreaView`
    flex: 1;
    margin: 10px auto;
    width: 98%;
    justify-content: center;
    align-items: center;
    position: relative;
`

export const  Text = styled.Text`
    
`

export const TitleArea = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-bottom: 70px;
`

export const FormArea = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
`

export const LogoBehind = styled.Image`
    position: absolute;
    top: -50px;
    opacity: .06;
    height: 90%;
    z-index: 1;
`

export const Description = styled.Text`
    margin-top: -10px;
    font-size: 20px;
    font-weight: 400;   
`

export const Input = styled.TextInput`
    padding: 14px;
    background-color: #fff;
    width: 100%;
    border-radius: 25px;
    border: 1px solid #000;
    margin: 10px 0;
`

export const Frag = styled.View`
    align-items: stretch;
    justify-content: center;
    width: 80%;
`

export const LoginButton = styled.Button`
    width: 60%;
    background-color: #8D0C17;
    border-radius: 25px;
    margin-top: 100px;
`