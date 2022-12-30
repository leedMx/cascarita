import React from "react";

const ChartBar = (_props) => {
    const percentage = 0;

    if (_props.maxValue > 0){
        percentage = Math.round((props.value / props.maxValue) * 100);
    }

    const style = {height: percentage + '%'}

    return <div className="chart-bar">
        <div className="chart-bar__inner">
            <div className="chart-bar__fill" style={style}></div>
            <div className="chart-bar__label">{_props.label}</div>
        </div>
    </div>
};

export default ChartBar;
