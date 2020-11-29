import React, {Component} from 'react'
import Gauge from './Gauge.js'
import './GaugeHolder.css'
import TrailTitle from './TrailTitle.js'

class GaugeHolder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: this.props.items,
            isLoaded: false,
            id: props.trailid
        }
    }
    render() {

        return (
            <div className="Gaugeholder">
                {this.state.items.map(item => (
                <div>
                <TrailTitle value={item.name} number={item.summary} unit={"Miles"} id={"gauge-chart3"} percent={item.length*0.03} location ={item.location}/>
                <Gauge value={"Length:"} number={item.length} unit={"Miles"} id={"gauge-chart3"} percent={item.length*0.03}/>
                <Gauge value={"Difficulty:"} number={item.difficulty} id={"gauge-chart1"} percent={item.difficulty}/>
                <Gauge value={"Alt. Change: "} id={"gauge-chart2"} percent={(item.high-item.low)*0.0002} number={item.high-item.low} unit={"Feet"}/>
                </div>
                ))}
            
            
            </div>
        )
    }
}
export default GaugeHolder
