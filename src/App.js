import BarChart from "./components/BarChart";
import "./App.css";

function App() {
  const data = [
    { name: "Mon", value: 20 },
    { name: "Tue", value: 40 },
    { name: "Wed", value: 35 },
    { name: "Thu", value: 50 },
    { name: "Fri", value: 55 },
    { name: "Sat", value: 40 },
    { name: "Sun", value: 30 },
  ];
  return (
    <>
      {/* title, data, barWidth, containerHeight,padding,color */}
      <BarChart
        title={"My bar chart"}
        data={data}
        barWidth={100}
        containerWidth={"90vw"}
        containerHeight={600}
        padding={4}
        color={"red"}
      />
    </>
  );
}

export default App;
