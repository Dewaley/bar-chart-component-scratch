import React from "react";

const Bar = ({ padding, color, item, maxValue, containerHeight, barWidth }) => {
  const heightProportion = (item) => (item.value / maxValue) * containerHeight;
  const height = heightProportion(item);
  console.log(height);
  return (
    <div className="bar" style={{height:`${containerHeight}`}}>
      <div className="rect"
        style={{width:`${barWidth - padding}px`,height: `${height}px`,backgroundColor: `${color}`}}
      ></div>
      <span className="name-label">
        {item.name}
      </span>
    </div>
  );
};

export default Bar;
