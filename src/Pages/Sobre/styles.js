import styled from 'styled-components';

export const Wrapper = styled.View`
    flex: 1;
    margin: 10px auto 0;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
`

export const WrapperCurrentLang = styled.View`
    flex-direction: row;
    padding: 0 10px;
    justify-content: center;
    align-items: center;
    box-shadow: 2px 2px #000;
    position: absolute;
    bottom: 20px;
`

export const WrapperOptions = styled.View`
    justify-content: center;
    align-items: center;
`

export const ReallySmallTitle = styled.Text`
    color: #222;
    font-size: 15px;
    margin: 3px 0;
`

export const Image = styled.Image`
    height: 64px;
    width: 64px;
`

export const TitleText = styled.Text`
    font-size: 19px;
    font-weight: 700;
    margin-left: 10px;
`