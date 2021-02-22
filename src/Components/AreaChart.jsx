import React, { useState, useEffect } from "react";
import {
  AreaChart as RechartAreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  Area,
} from "recharts";

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  // Making area chart wider on smaller screens
  const dimensionsForDevice =
    width < 800
      ? { width: (width / 100) * 70, height }
      : { width: (width / 100) * 40, height };
  return dimensionsForDevice;
};

const AreaChart = ({ selectedAreaData }) => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <RechartAreaChart
      width={windowDimensions.width}
      height={250}
      data={selectedAreaData}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
    >
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#0371c5" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#0371c5" stopOpacity={0} />
        </linearGradient>
      </defs>
      <XAxis dataKey="date" />
      <YAxis dataKey="score" />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="score"
        stroke="#8884d8"
        fillOpacity={1}
        fill="url(#colorUv)"
      />
    </RechartAreaChart>
  );
};

export default AreaChart;
