import React from 'react';
import {AreaChart as RechartAreaChart, CartesianGrid, Tooltip, XAxis, YAxis, Area} from "recharts";

const AreaChart = ({selectedAreaData}) => {
    return (
        <RechartAreaChart width={600}
                   height={250}
                   data={selectedAreaData}
                   margin={{top: 10, right: 30, left: 0, bottom: 0}}>
            <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0371c5" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#0371c5" stopOpacity={0}/>
                </linearGradient>
            </defs>
            <XAxis dataKey="date"/>
            <YAxis dataKey="score"/>
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip/>
            <Area type="monotone" dataKey="score" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)"/>
        </RechartAreaChart>

    );
}

export default AreaChart;