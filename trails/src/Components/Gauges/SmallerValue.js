import React from 'react';
import styled from '@emotion/styled';

const Value = (props) => {
    const Value = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-size: 1.0rem;
    `
    var value = props.value
    return (
        <>
            <Value>{value}</Value>
        </>
    )
}

export default Value;