import React from 'react';
import styled from '@emotion/styled';

const Condition = (props) => {
    const Temp = styled.h1`
    font-family: 'Fira Sans', sans-serif;
    font-size: 2rem;
    font-weight: 200;
    `
    const State = styled.h3`
    font-family: 'Merriweather', sans-serif;
    font-size 1.0rem;
    `
    const Wind = styled.h1`
    font-family: 'Quicksand', sans-serif;
    font-size: 1.4rem;
    font-weight: 200;
    `
    var temp = props.temp
    var condition = props.condition
    var wind = props.wind
    var winddir = props.winddir

    return (
        <>
            <Temp>{temp}°F</Temp>
            <State>{condition}</State>
            <Wind>{wind}mph {winddir}</Wind>
        </>
    )
}

export default Condition;