import React from 'react';
import styled from '@emotion/styled';

const Value = (props) => {
    var fontsize = props.fontsize
    var fontweight = props.fontweight

    const Value = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-size: ${fontsize}rem;
    font-weight: ${fontweight};
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