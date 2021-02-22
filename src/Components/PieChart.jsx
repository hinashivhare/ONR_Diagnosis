import React from "react";
import { RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";
import { Card } from "antd";

const circleSize = 100;

const PieChart = ({ chartData, setSelectedGaugeData, isActive }) => {
  const cardClassName = isActive ? "pie_chart active" : "pie_chart inactive";
  const handleOnClick = (currentData) => {
    setSelectedGaugeData(currentData.name);
  };
  return (
    <Card className={cardClassName} onClick={() => handleOnClick(chartData)}>
      <div style={{ textAlign: "center", color: "#6d90cd" }}>
        {chartData.name}
      </div>
      <RadialBarChart
        width={circleSize}
        height={circleSize}
        cx={circleSize / 2}
        cy={circleSize / 2}
        innerRadius={40}
        outerRadius={40}
        barSize={9}
        data={[
          {
            name: chartData.name,
            value: chartData.score,
          },
        ]}
        startAngle={90}
        endAngle={-270}
      >
        <PolarAngleAxis
          type="number"
          domain={[0, 100]}
          angleAxisId={0}
          tick={false}
        />
        <RadialBar
          background
          dataKey="value"
          cornerRadius={circleSize / 2}
          fill={isActive ? "#08adef" : "#0371c5"}
        />
        <text
          x={circleSize / 2}
          y={circleSize / 2}
          textAnchor="middle"
          dominantBaseline="middle"
          className="progress-label"
        >
          {chartData.score}%
        </text>
      </RadialBarChart>
      <div style={{ textAlign: "center" }}>Sample: {chartData.sample}</div>
    </Card>
  );
};

export default PieChart;
