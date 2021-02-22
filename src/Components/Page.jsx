import React, { useState } from "react";
import {
  GlobalOutlined,
  ShoppingFilled,
  InfoCircleFilled,
} from "@ant-design/icons";
import { Row, Col } from "antd";
import AreaChart from "./AreaChart";
import PieChart from "./PieChart";

const data = {
  gaugeData: [
    {
      name: "Quality Score",
      score: 72,
      vsly: null,
      sample: 133,
    },
    {
      name: "Basics",
      score: 71,
      vsly: null,
      sample: 133,
    },
    {
      name: "Interaction",
      score: 68,
      vsly: null,
      sample: 133,
    },
    {
      name: "Expertise",
      score: 70,
      vsly: null,
      sample: 133,
    },
    {
      name: "Process",
      score: 75,
      vsly: null,
      sample: 133,
    },
    {
      name: "Knowledge",
      score: 76,
      vsly: null,
      sample: 133,
    },
  ],
  areaData: {
    "Quality Score": [
      {
        date: "Apr",
        sample: 21,
        score: 75,
        vsly: 0,
      },
      {
        date: "May",
        sample: 110,
        score: 71,
        vsly: 0,
      },
      {
        date: "Jun",
        sample: 2,
        score: 62,
        vsly: 0,
      },
      {
        date: "Jul",
        sample: 0,
        score: 0,
        vsly: 0,
      },
    ],
    Basics: [
      {
        date: "Apr",
        sample: 29,
        score: 78,
        vsly: 0,
      },
      {
        date: "May",
        sample: 66,
        score: 62,
        vsly: 0,
      },
      {
        date: "Jun",
        sample: 2,
        score: 42,
        vsly: 0,
      },
      {
        date: "Jul",
        sample: 51,
        score: 63,
        vsly: 0,
      },
    ],
    Interaction: [
      {
        date: "Apr",
        sample: 54,
        score: 92,
        vsly: 0,
      },
      {
        date: "May",
        sample: 110,
        score: 43,
        vsly: 0,
      },
      {
        date: "Jun",
        sample: 2,
        score: 34,
        vsly: 0,
      },
      {
        date: "Jul",
        sample: 0,
        score: 0,
        vsly: 0,
      },
    ],
    Expertise: [
      {
        date: "Apr",
        sample: 29,
        score: 88,
        vsly: 0,
      },
      {
        date: "May",
        sample: 55,
        score: 61,
        vsly: 0,
      },
      {
        date: "Jun",
        sample: 26,
        score: 35,
        vsly: 0,
      },
      {
        date: "Jul",
        sample: 121,
        score: 46,
        vsly: 0,
      },
    ],
    Process: [
      {
        date: "Apr",
        sample: 31,
        score: 85,
        vsly: 0,
      },
      {
        date: "May",
        sample: 66,
        score: 77,
        vsly: 0,
      },
      {
        date: "Jun",
        sample: 23,
        score: 57,
        vsly: 0,
      },
      {
        date: "Jul",
        sample: 0,
        score: 0,
        vsly: 0,
      },
    ],
    Knowledge: [
      {
        date: "Apr",
        sample: 31,
        score: 74,
        vsly: 0,
      },
      {
        date: "May",
        sample: 100,
        score: 76,
        vsly: 0,
      },
      {
        date: "Jun",
        sample: 45,
        score: 33,
        vsly: 0,
      },
      {
        date: "Jul",
        sample: 110,
        score: 89,
        vsly: 0,
      },
    ],
  },
};

const Page = () => {
  const [dataSet] = useState(data);
  const [selectedGaugeData, setSelectedGaugeData] = useState(
    dataSet.gaugeData[0].name
  );

  const renderPieCharts = () => {
    return dataSet.gaugeData.map((item, index) => {
      const isActive = selectedGaugeData === item.name;
      return (
        <PieChart
          key={index}
          chartData={item}
          setSelectedGaugeData={setSelectedGaugeData}
          isActive={isActive}
        />
      );
    });
  };

  return (
    <div className="page_content">
      <div>
        <h2 className="page_header_performance" style={{ color: "#938e8d" }}>
          PERFORMANCE MANAGEMENT
        </h2>
        <h1 className="page_header">
          <GlobalOutlined /> Diagnostic Tool
        </h1>
      </div>
      <Row>
        <Col s={5} md={11} className="filers">
          <h4>Filters</h4>
          <div className="page_filters">
            <div className="item">
              <p style={{ color: "#0670c5" }}>
                <ShoppingFilled />
              </p>
              <p>All CQA Results</p>
              <p>
                <InfoCircleFilled />
              </p>
            </div>
            <div className="item">
              <p style={{ color: "#eeeeee" }}>
                <ShoppingFilled />
              </p>
              <p>CQAS with Closed Loop</p>
              <p>
                <InfoCircleFilled />
              </p>
            </div>
          </div>
        </Col>
        <Col s={7} md={13}>
          <div className="page_quality_score">
            <div>
              <h1 style={{ color: "#9e9c9e" }}>QUALITY SCORE TREND</h1>
            </div>
            <div className="labels">
              <p className="label day_label">Day</p>
              <p className="label inactive_label">Week</p>
              <p className="label active_label">Month</p>
              <p className="label inactive_label">Quarter</p>
              <p className="label inactive_label">Half</p>
              <p className="label inactive_label">Year</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm={24} md={11}>
          <Row>{renderPieCharts()}</Row>
        </Col>
        <Col sm={24} md={13}>
          <AreaChart selectedAreaData={dataSet.areaData[selectedGaugeData]} />
        </Col>
      </Row>
    </div>
  );
};

export default Page;
