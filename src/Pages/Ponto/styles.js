import styled from 'styled-components';

export const PontoWrapper = styled.SafeAreaView`
    flex: 1;
    padding: 5px 10px;
`

export const SnapPic = styled.TouchableOpacity`
    flex: 1;
    width: 100%;
    padding: 20px;
    background-color: #8E0C18;
    margin: 10px 0;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
`

export const CloseModal = styled.TouchableOpacity`
    position: absolute;
    top: 0;
    right: 0;
    z-index:3;
    background-color: #eee;
    padding: 20px;
    border-radius: 15px;
`

export const LoadingModalWrapper = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`

export const TitleCPF = styled.Text`

`

export const WrapperUserNotLogged = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
`

export const TitleNotLogged = styled.Text`
    font-size: 20px;
    text-align: center;
    font-weight: bold;
    margin-top: -20px;
`

export const GoToLogin = styled.Text`
    color: blue;
    font-size: 15px;
`

export const GoToWrapper = styled.TouchableOpacity`
`

export const WrapperUserLogged = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
`

export const WrapperButtonMarcar = styled.TouchableOpacity`
    width: 80%;
    align-items: center;
    margin: 40px auto;
    background-color: #8D0C17;
    padding: 12px 0;
    border-radius: 25px;
`

export const WrapperShowTime = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
`

export const TextHour = styled.Text`
    font-size: 20px;
`