import React from 'react'
import styled from '@emotion/styled';
import Value from './Value.js'

const TrailTitle = (props) => {

    const red = 50;
    const Card = styled.div`
    background: linear-gradient(to top, rgba(${red},100,100), lightblue);
    width: 20%;
    display: inline-block;
    margin: 10px;
    color: white;
    display: table-cell;
    align-items: center;
    `
    
    const TextContent = styled.p`
    font-family: 'Quicksand', sans-serif;
    font-size: 1rem;
    font-weight: 300;
    `
    return (
        <Card>
            <Value value={props.value} fontsize={2}/>
            <Value value={props.location} fontweight={600} fontsize={1.3}/>
            <TextContent>{props.number}</TextContent>
        </Card>
     );
}

export default TrailTitle