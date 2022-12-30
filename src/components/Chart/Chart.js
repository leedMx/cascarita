import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (_props) => {
  const dataPointValues = _props.dataPoints.map((d) => {
    return d.value;
  });
  const maxValue = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {_props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={maxValue}
            label={dataPoint.label}
          />
        );
      })}
    </div>
  );
};

export default Chart;
