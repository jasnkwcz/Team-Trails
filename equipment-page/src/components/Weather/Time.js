import React from 'react';
import styled from '@emotion/styled';

const Time = (props) => {
    const Time = styled.h1`
    font-family: 'Quicksand', sans-serif;
    font-size: 1.4rem;
    font-weight: 200;
    `
    var time = props.time
    return (
        <>
            <Time>{time}</Time>
        </>
    )
}

export default Time;