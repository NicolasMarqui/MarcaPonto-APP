import React, { useState } from 'react';
import { Wrapper, IconImage, WrapperText, PontoTitle, HourTitle, ArrowIcon} from './styles';
import { Entypo } from '@expo/vector-icons';
import Modal from 'react-native-modal';

const PontoInfo = ({ ponto }) => {

    
    // const { type, day, time } = ponto;

    // const Alltypes = [
    //     {
    //         id: 1,
    //         name: 'ENTRY',
    //         icon: require('../../../assets/icons/entry.png'),
    //     },
    //     {
    //         id: 2,
    //         name: 'LUNCH',
    //         icon: require('../../../assets/icons/lunch.png'),
    //     },
    //     {
    //         id: 3,
    //         name: 'LEAVE',
    //         icon: require('../../../assets/icons/leave.png'),
    //     },
    // ]

    // const returnTypeIcon = (arr, individual_type) => {
    //     return arr.filter((t) => t.name === individual_type)[0].icon
    // }

    return(
        <Wrapper>
            {/* <IconImage source={ returnTypeIcon(Alltypes, type) } />

            <WrapperText>
                <PontoTitle>
                    {day}
                </PontoTitle>

                <HourTitle>
                    {time}
                </HourTitle>
            </WrapperText>

            <ArrowIcon>
                <Entypo name="arrow-with-circle-right" size={24} color="black" />
            </ArrowIcon> */}
            <PontoTitle>
                Ponto
            </PontoTitle>
        </Wrapper>
    );
}

export default PontoInfo;