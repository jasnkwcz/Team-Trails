import React from 'react';
import styled from '@emotion/styled';
import './WeatherCard.css'
import Condition from './Condition.js'
import Icon from './Icon.js'
import Time from './Time.js'

const WeatherCard = (props) => {

    const red = 200;
    const Card = styled.div`
    background: linear-gradient(to bottom, rgba(${red},200,200), lightblue);
    width: 150px;
    height: 200px;
    display: inline-block;
    justify-content: space-between;
    align-items: center;
    margin: 10px;
    border-radius: 15px;
    color: white;
    line-height: 10px;
    align-items: center;
    `

    return ( 
        <Card>
            <Time time={props.time}/>
            <Icon condition={props.condition}/>
            <Condition  temp={props.temp} condition={props.condition} wind={props.wind} winddir={props.winddir}/>
        </Card>
     );
}
 
export default WeatherCard;