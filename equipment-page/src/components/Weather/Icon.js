import React from 'react'
import styled from '@emotion/styled'

const Icon = (props) => {
    
    const Icon = styled.img`
        width: 40%;
    `
    var icon = ''
    switch (props.condition) {
        case "Clear Sky":
            icon = 'https://i.ibb.co/G0Fj2PQ/clear.png';
            break;
        case "Cloudy":
            icon ='https://i.ibb.co/wCkqCdY/cloudy.png';
            break;
        case "Rain":
            icon ='https://i.ibb.co/0M8n31z/rain03.png'
            break;
        case "Scattered clouds":
            icon ='https://i.ibb.co/0hG9nqs/scatteredclouds.png'
            break;
        case "Broken clouds":
            icon ='https://i.ibb.co/0hG9nqs/scatteredclouds.png'
            break;
        case "Overcast clouds":
            icon='https://i.ibb.co/G5W8sDq/flurries.png'
            break;
        case "Few clouds":
            icon='https://i.ibb.co/sHv0krh/partlysunny.png'
            break;
        default:
            icon ='https://i.ibb.co/G0Fj2PQ/clear.png'
            break;
    }
    return (
        <Icon className='icon' src={icon} alt="Weather Icon" border="0"></Icon>
    );
}

export default Icon;