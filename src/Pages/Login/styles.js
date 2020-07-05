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
    justify-content: flex-end;
    align-items: center;
    flex: 1;
`

export const FormArea = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
    flex: 2;
    position: relative;
    z-index: 10;
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
    
    margin: 10px 0;
`

export const Frag = styled.View`
    align-items: stretch;
    justify-content: center;
    width: 80%;
`

export const LoginButton = styled.TouchableOpacity`
    width: 80%;
    margin: 50px auto;
    background-color: #8D0C17;
    border-radius: 25px;
    padding: 20px;
    justify-content: center;
    align-items: center;
`

export const LoaderWrapper = styled.View`
    flex: 2;
`
export const WrapperEsqueci = styled.TouchableOpacity`
    width: 100%;
    margin-top: -30px;
    justify-content: center;
    align-items: center;
`

export const TextEsqueciConta = styled.Text`
    font-size: 12px;
    font-weight: 400;
    color: blue;   
`