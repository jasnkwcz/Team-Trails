import React from 'react'
import styled from '@emotion/styled';
import Value from './Value.js'
import GaugeChart from 'react-gauge-chart';

const Gauge = (props) => {

    const red = 50;
    const Card = styled.div`
    background: linear-gradient(to top, rgba(${red},100,100), lightblue);
    width: 20%;
    height: 200px;
    display: inline-block;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 10px;
    border-radius: 15px;
    color: white;
    line-height: 0px
    `
    var percent = ''
    switch (props.percent) {
        case "black":
            percent = 0.8;
            break;
        case "blueBlack":
            percent = 0.5;
            break;
        case "green":
            percent = 0.1;
            break;
        default:
            percent = props.percent;
            break;
    }
    var number = ''
    switch (props.number) {
        case "blue":
            number = "Blue";
            break;
        case "black":
            number = "Black Diamond";
            break;
        case "blueBlack":
            number = "Blue Black";
            break;
        case "greenBlue":
            number = "Green Blue";
            break;
        default:
            number = props.number;
            break;
    }

    return (
        <Card>
            <GaugeChart id={props.id} nrOfLevels={30} arcPadding={0.01} colors={['lightgreen','orange', 'red']} percent={percent} hideText={true} />
            <Value  value={props.value} number={number} unit={props.unit} fontsize={1.5}/>
        </Card>
     );
}

export default Gauge;