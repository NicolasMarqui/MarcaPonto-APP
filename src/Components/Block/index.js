import React from 'react';

import { TitleSmall } from '../../../global';
import { BlockWrapper, IconImage, Description} from './styles';

const Block = ({ data, navigation}) => {

    const { title, description, icon, size, color, defaultTitle } = data;

    return(
        <BlockWrapper size={size == 2 ? '100%' : '45%'} color={color} onPress={() => navigation.navigate(defaultTitle)}>

            {icon && <IconImage source={icon.uri} isLarge={icon.isLarge}/>}

            <TitleSmall>
                {title}
            </TitleSmall>

            <Description>
                {description}
            </Description>
        </BlockWrapper>
    )
}

export default Block;