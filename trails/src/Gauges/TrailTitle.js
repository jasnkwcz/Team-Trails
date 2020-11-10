import React from 'react'
import styled from '@emotion/styled';
import Value from './Value.js'
import SmallerValue from './SmallerValue.js'

const TrailTitle = (props) => {

    const red = 50;
    const Card = styled.div`
    background: linear-gradient(to top, rgba(${red},100,100), lightblue);
    width: 20%;
    display: inline-block;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    border-radius: 15px;
    color: white;
    `
    
    const TextContent = styled.p`
    font-family: 'Quicksand', sans-serif;
    font-size: 1rem;
    font-weight: 300;
    `
    return (
        <Card>
            <Value value={props.value}/>
            <SmallerValue value={props.location}/>
            <TextContent>{props.number}</TextContent>
        </Card>
     );
}

export default TrailTitle