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

export const ModalInside = styled.View`
    justify-content: center;
    flex: 1;
    align-items: center;
    position: relative;
`

export const CloseModal = styled.TouchableOpacity`
    position: absolute;
    top: 20px;
    right: 20px;
`

export const Image = styled.Image`
    width: 95%;
    margin: 0 auto;
    height: 500px;
`

export const Date = styled.Text`
    font-size: 15px;
    font-weight: 400;
`