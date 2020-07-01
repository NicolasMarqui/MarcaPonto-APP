import styled from 'styled-components';

export const Wrapper = styled.TouchableOpacity`
    padding: 10px;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin: 7px 0;
    background-color: #f2f2f2;
`

export const IconImage = styled.Image`
    height: 22px;
    width: 22px;
`

export const WrapperText = styled.View`
    flex: 5;
    flex-direction: column;
    justify-content: center;
    margin-left: 10px;
`

export const PontoTitle = styled.Text`
    font-size: 15px;
    font-weight: 400;
    color: #000;
`

export const HourTitle = styled.Text`
    font-size: 10px;
    font-weight: 700;
    color: #000;
`

export const ArrowIcon = styled.View`
    flex: 1;
    align-items: flex-end;
`