import styled from 'styled-components';

export const Wrapper = styled.View`
    flex: 1;
    margin: 10px auto;
    width: 98%;
    justify-content: center;
    align-items: center;
    position: relative;
`

export const TitleArea = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-bottom: 70px;
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

export const WrapperClock = styled.View`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    justify-content: center;
    align-items: center;
`