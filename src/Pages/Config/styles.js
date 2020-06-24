import styled from 'styled-components';

export const  Wrapper = styled.SafeAreaView`
    flex: 1;
    margin: 10px auto 0;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
    position: relative;
`

export const WrapperCurrentLang = styled.View`
    flex-direction: row;
    padding: 0 10px;
    justify-content: center;
    align-items: center;
    box-shadow: 2px 2px #000;
    position: absolute;
    bottom: 0;
    background-color: #222;
`

export const WrapperAllLangs = styled.View`
    flex-direction: column;
    padding: 10px 0;
    width: 100%;
`

export const IndividualLangs = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
`

export const WrapperOptions = styled.View`
    flex-direction: column;
    padding: 10px;
    width: 100%;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 10px;
`

export const SmallBorder = styled.View`
    width: 100%;
    height: 2px;
    background-color: #000;
    opacity: .7;
    margin-top: 6px;
`

export const ReallySmallTitle = styled.Text`
    flex: 1;
    color: #fff;
    font-size: 15px;
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