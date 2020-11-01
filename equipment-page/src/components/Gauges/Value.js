import React from 'react';
import styled from '@emotion/styled';

const Value = (props) => {
    const Value = styled.h1`
    font-family: 'Quicksand', sans-serif;
    font-size: 1.7rem;
    font-weight: 300;
    `
    var value = props.value
    var number = props.number
    var unit = props.unit
    return (
        <>
            <Value>{value} {number} {unit}</Value>
        </>
    )
}

export default Value;