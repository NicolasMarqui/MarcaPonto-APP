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
    top: 20px;
    right: -6px;
    z-index:3;
`

export const LoadingModalWrapper = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`