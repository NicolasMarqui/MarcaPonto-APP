import React, { useState, useEffect} from 'react';
import { Wrapper, IconImage, WrapperText, PontoTitle, HourTitle, ArrowIcon, SideHourText, Aprovado} from './styles';
import moment from 'moment';

const PontoInfo = ({ ponto }) => {

    useEffect(() => {
        // returnTypeIcon(Alltypes, tipoDoRegistro)
        console.log(tipoDoRegistro)
    })

    
    const { data , horario , tipoDoRegistro, aprovado} = ponto;

    const Alltypes = [
        {
            id: 1,
            name: 'Início da Jornada',
            icon: require('../../../assets/icons/entry.png'),
        },
        {
            id: 2,
            name: 'Início do Intervalo',
            icon: require('../../../assets/icons/lunch.png'),
        },
        {
            id: 3,
            name: 'Fim da Jornada',
            icon: require('../../../assets/icons/leave.png'),
        },
        {
            id: 4,
            name: 'Fim do Intervalo',
            icon: require('../../../assets/icons/lunch.png'),
        },
        {
            id: 5,
            name: 'Indefinido',
            icon: require('../../../assets/icons/lunch.png'),
        },
    ]

    const returnTypeIcon = (arr, individual_type) => {
        if(individual_type !== undefined){
            return arr.filter((t) => t.name === individual_type)[0].icon
        }
    }

    return(
        <Wrapper>
            <IconImage source={ returnTypeIcon(Alltypes, tipoDoRegistro) } />

            <WrapperText>
                <PontoTitle>
                    {moment(data).format('DD/MM/YYYY')}
                </PontoTitle>

                <HourTitle>
                    {tipoDoRegistro}
                </HourTitle>
            </WrapperText>

            <ArrowIcon>
                <SideHourText>
                    {horario}
                </SideHourText>
            </ArrowIcon>

            <Aprovado aprovado={aprovado ? 'green' : 'red'}></Aprovado>

        </Wrapper>
    );
}

export default PontoInfo;