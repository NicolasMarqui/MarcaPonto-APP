import React, {useState, useEffect }from 'react';
import { View, Text} from 'react-native';

const DigitalClock = () => {

    const [ currentTime, setCurrentTime ] = useState(null);
    const [ currentDay, setCurrentDay ] = useState(null);

    const DAYS = ['Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado', 'Domingo'];

    const getCurrentTime = () => {
        let hour = new Date().getHours();
        let minutes = new Date().getMinutes();
        let seconds = new Date().getSeconds();
        let am_pm = 'pm';

        if (minutes < 10) {
            minutes = '0' + minutes;
        }

        if (seconds < 10) {
            seconds = '0' + seconds;
        }

        if (hour > 12) {
            hour = hour - 12;
        }

        if (hour == 0) {
            hour = 12;
        }

        if (new Date().getHours() < 12) {
            am_pm = 'am';
        }

        setCurrentTime(hour + ':' + minutes + ':' + seconds + ' ' + am_pm);

        DAYS.map((item, key) => {
            if (key == new Date().getDay()) {
              setCurrentDay(item.toUpperCase());
            }
          })
    }

    useEffect(() => {
        let timer = setInterval(() => {
            getCurrentTime();
          }, 1000);
    }, []);
    
    return(
        <View>
            <Text>
                {currentDay}
            </Text>
            <Text>
                {currentTime}
            </Text>
        </View>
    )
    
}

export default DigitalClock;