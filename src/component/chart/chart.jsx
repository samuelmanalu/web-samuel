import React, { PureComponent } from 'react';
import {Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,} from 'recharts';
import './chart.sass';

class SkillChart extends PureComponent{
    constructor(props){
        super();
        this.data = props.data;
    }

    render(){
        return(
            <RadarChart 
                cx={250} 
                cy={300} 
                outerRadius={150} 
                width={500} 
                height={500} 
                data={this.data}
            >
                <PolarGrid />
                <PolarAngleAxis dataKey="skill" />
                <PolarRadiusAxis/>
                <Radar name="Samuel" dataKey="A" stroke="black" fill="black" fillOpacity={0.6}/>
            </RadarChart>

        )
    }
}

export default SkillChart;
