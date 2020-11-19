import React, {Component} from 'react'
import Gauge from './Gauge.js'
import './GaugeHolder.css'
import TrailTitle from './TrailTitle.js'

class GaugeHolder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
            id: 7001635
        }
    }
    componentDidMount() {

        fetch('https://www.hikingproject.com/data/get-trails-by-id?ids='+ this.state.id + '&key=200962200-a3f1d16081e9f29cfec2bd00a7bd1948')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json.trails,
                })
            }).catch((err) => {
                console.log(err);
            });
    }

    render() {

        var { isLoaded, items } = this.state;

        if(!isLoaded) {
            return <div>Loading...</div>;
        }
        else {
        return (
            <div className="Gaugeholder">
                {items.map(item => (
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
}
export default GaugeHolder
