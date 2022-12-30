import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (_props) => {
  return (
    <div className="chart">
      {_props.dataPoints.map((dataPoint) => {
        <ChartBar
          key={dataPoint.label}
          value={dataPoing.value}
          maxValue={null}
          label={dataPoint.label}
        />;
      })}
    </div>
  );
};
