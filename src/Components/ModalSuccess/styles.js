import styled from 'styled-components';

export const ModalInside = styled.ScrollView`
    width: 100%;
    position: relative;
`

export const Image = styled.Image`
    width: 95%;
    margin: 0 auto;
`

export const Date = styled.Text`
    font-size: 15px;
    font-weight: 400;
`

export const TitleAndLoading = styled.View`
    width: 100%;
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
`

export const SidSmallImageWrapper = styled.View`
    position: absolute;
    left: 5px;
    bottom: 5px;
    height: 100px;
    width: 100px;
    z-index: 5;
    border-radius: 20px;
`