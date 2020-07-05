import React from 'react';
import { AbsoluteWrapper, DefaultText} from './styles';
import Modal from 'react-native-modal';

const AfterPoint = ({ type }) => {
    return (
        <Modal
            animationIn="slideInUp"
            animationOut="slideOutDown"
            transparent={false}
            isVisible={true}
            coverScreen={true}
            hasBackdrop={false}
        >
            <DefaultText>
                Hello
            </DefaultText>

        </Modal>
    );
}

export default AfterPoint;