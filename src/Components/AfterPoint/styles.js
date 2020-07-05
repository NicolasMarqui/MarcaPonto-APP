import styled from 'styled-components';

export const AbsoluteWrapper = styled.View`
    flex: 1;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 999;
    background-color: red;
`

export const DefaultText = styled.Text`
    font-size: 20px;
    text-align: center;
    font-weight: bold;
    margin-top: -20px;
`