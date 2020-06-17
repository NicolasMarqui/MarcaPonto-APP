import styled from 'styled-components';

export const BlockWrapper = styled.TouchableOpacity`
    flex: ${props => props.size || 1};
    background-color: ${props => props.color || '#eeee'};
    padding: 10px;
    margin: 6px 5px;
    justify-content: center;
    align-items: center;
    z-index: 2;
`

export const IconImage = styled.Image`
    height: ${props => props.isLarge ? '111px' : '47px'};
    width: ${props => props.isLarge ? '113px' : '47px'};
    margin-top: ${props => props.isLarge ? '-50px' : '0'}
    margin-bottom: 5px;
`

export const Description = styled.Text`
    font-size: 15px;
    color: #fff;
    font-weight: 400;
    margin-top: -2px;
`