import React, {useState, useEffect }from 'react';
import { View, Text} from 'react-native';
import moment from 'moment';
import AsyncStorage from '@react-native-community/async-storage';

import localization from "moment/locale/pt-br";

const withLocale = require('../../Functions/moment-with-locales');

const DigitalClock = () => {

    const [ help, setHelp ] = useState('')

    const currentTime = () => {
        let time = moment(new Date()).format('Do MMMM YYYY, h:mm:ss a');
        setHelp(time);
        return time;
    }

    useEffect(() => {

        moment.updateLocale('pt-br', localization);
        
        let timer = setInterval(() => {
            currentTime();
          }, 1000);
    }, []);
    
    return(
        <View>
            <Text>
                {
                    help
                }
            </Text>
        </View>
    )
    
}

export default DigitalClock;