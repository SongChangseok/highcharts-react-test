import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useRef } from "react";

const options = {
  chart: {
    // type: "column",
  },
  title: {
    text: "test Title",
  },
  xAxis: {
    title: {
      text: "x축",
    },
    tickInterval: 1,
    categories: ["A", "B", "C"],
    gridLineWidth: 1,
  },
  yAxis: {
    title: {
      text: "y축",
    },
    tickInterval: 1,
  },
  series: [
    {
      data: [
        {
          name: "Point 1",
          color: "#00FF00",
          x: 1,
          y: 4,
        },
        {
          name: "Point 2",
          color: "#FF00FF",
          x: 1,
          y: 1,
        },
      ],
    },
    {
      data: [
        {
          name: "Point 11",
          color: "#00FF00",
          x: 0,
          y: 4,
        },
        {
          name: "Point 22",
          color: "#FF00FF",
          x: 1,
          y: 2,
        },
      ],
    },
  ],
  plotOptions: {
    series: {
      allowPointSelect: true,
    },
  },
  tooltip: {
    backgroundColor: "#FCFFC5",
    borderColor: "black",
    borderRadius: 10,
    borderWidth: 3,
  },
};

const LinearChart = () => {
  const chartRef = useRef();
  return (
    <div>
      <HighchartsReact
        ref={chartRef}
        highcharts={Highcharts}
        options={options}
      />
    </div>
  );
};

export default LinearChart;
