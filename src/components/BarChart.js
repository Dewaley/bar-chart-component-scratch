import Bar from "./Bar";

const BarChart = ({
  title,
  data,
  barWidth,
  containerHeight,
  padding,
  color,
  containerWidth,
}) => {
  const values = data.map((item) => item.value);
  const max = Math.max(...values);
  const maxValue = Math.ceil(max / 10) * 10;
  const eachPlotValue = maxValue / 5;
  const xAxis = [5, 4, 3, 2, 1, 0];
  const plotAgainst = xAxis.map((value) => eachPlotValue * value);
  console.log(plotAgainst);
  console.log(typeof maxValue);
  const bars = data.map((item, index) => {
    return (
      <div className='barcontainer' style={{height:`${containerHeight}`}}>
        <Bar
          item={item}
          barWidth={barWidth}
          containerHeight={containerHeight}
          maxValue={maxValue}
          padding={padding}
          color={color}
        />
      </div>
    );
  });
  return (
    <section>
      <h1>{title}</h1>
      <div className="main"
        style={{
          width: `${containerWidth}`,
          height: `${containerHeight}px`
        }}
      >
        <div className="values">
          {plotAgainst.map((value) => (
            <span>{value}</span>
          ))}
        </div>
        <div className="container">
          <div className="chart">
            {bars}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BarChart;
