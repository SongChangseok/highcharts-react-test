import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useState } from "react";

const UpdateChart = () => {
  const [chartOptions, setChartOptions] = useState({
    title: { text: "test chart" },
    subtitle: { text: "subtitle chart" },
    xAxis: { categories: ["A", "B", "C"], gridLineWidth: 1 },
    yAxis: [
      {
        title: { text: "y 축" },
        labels: {
          formatter: ({ value }) => value + "%",
        },
        gridLineWidth: 1,
      },
      { title: { text: "y 축2" }, opposite: true },
    ],
    series: [
      { yAxis: 0, data: [1, 2, 3] },
      { yAxis: 1, data: [4, 5, 2] },
    ],
    plotOptions: {
      series: {
        point: {
          events: {
            mouseOver: ({ target: { category } }) => {
              setHoverData(category);
            },
          },
        },
      },
    },
  });
  const [hoverData, setHoverData] = useState();

  const updateSeriesHandler = () => {
    setChartOptions((prev) => ({
      ...prev,
      series: [{ data: [Math.random() * 5, 2, 1] }],
    }));
  };
  const callback = (chart) => {
    console.log("chart", chart);
  };

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={chartOptions}
        // immutable
        containerProps={{ style: { width: "50%" } }}
        callback={callback}
      />
      <h3>{hoverData}</h3>
      <button type="button" onClick={updateSeriesHandler}>
        Update Series
      </button>
    </div>
  );
};

export default UpdateChart;
