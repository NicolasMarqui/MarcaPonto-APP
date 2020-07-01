import React, { useContext, useEffect } from 'react';
import { Wrapper, TitleArea, Description, WrapperConteudo, DescriptionBold, RedDetail, TitleAreaColumn} from './styles';
import { TitleSmallBlack } from '../../../global';
import { MainContext } from '../../Contexts/MainContext';
import PontoInfo from '../../Components/PontoInfo';
import { Ionicons } from '@expo/vector-icons';

const Dashboard = ({ navigation }) => {

    const { loggedUserInfo } = useContext(MainContext);

    const allPontos = [
        {
            id: 1,
            type: 'ENTRY',
            day: 'Segunda-feira',
            time: '10:30h',
        },
        {
            id: 2,
            type: 'LUNCH',
            day: 'Segunda-feira',
            time: '20:30h',
        },
        {
            id: 3,
            type: 'LEAVE',
            day: 'Terça-feira',
            time: '17:30h',
        },
        {
            id: 4,
            type: 'LUNCH',
            day: 'Segunda-feira',
            time: '20:30h',
        },
    ]

    return (
        <Wrapper contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-start' }}>
            <TitleArea>
                <Description>
                    Olá
                </Description>
                <TitleSmallBlack>
                    Nicolas Marqui
                </TitleSmallBlack>
                <Description>
                    Aqui vc pode ver todos seus pontos e informações a mais sobre seu perfil
                </Description>
            </TitleArea>

            <WrapperConteudo>
                
                <TitleAreaColumn>
                    <RedDetail></RedDetail>
                    <DescriptionBold>
                        Seus pontos
                    </DescriptionBold>
                </TitleAreaColumn>

                {
                    allPontos.map(p => <PontoInfo key={p.id} ponto={p}/>)
                }

                {/* <LinkToAllWrapper>
                    <LinkToAll>

                    </LinkToAll>
                </LinkToAllWrapper> */}

            </WrapperConteudo>
        </Wrapper>
    );
}

export default Dashboard;