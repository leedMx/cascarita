import React from "react";
import "./ChartBar.css";

const ChartBar = (_props) => {
  let percentage = "0%";

  if (_props.maxValue > 0) {
    percentage = Math.round((_props.value / _props.maxValue) * 100) + "%";
  }

  const style = { height: percentage };

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={style}></div>
      </div>
      <div className="chart-bar__label">{_props.label}</div>
    </div>
  );
};

export default ChartBar;
