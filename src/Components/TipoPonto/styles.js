import styled from 'styled-components';

export const Wrapper = styled.View`
    flex: 1;
    height: 100%;
    justify-content: center;
    align-items: center;
    position: relative;
`

export const ButtonLike = styled.TouchableOpacity`
    padding: 14px 20px;
    width: 100%;
    margin: 8px 0;
    text-align: center;
    justify-content: center;
    align-items: center;
    background-color: rgba(142, 12, 24, 0.7);
    border-radius: 25px;
`
export const InfoArea = styled.View`
    padding: 10px;
    width: 100%;
`

export const AnimationContainer = styled.View`
    flex: 1;
    position: relative;
    justify-content: center;
    align-items: center;
`

export const Description = styled.Text`
    font-size: 15px;
    color: #000;
    font-weight: 400;
    margin-top: -2px;
`