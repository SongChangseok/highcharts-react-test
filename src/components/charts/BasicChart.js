import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = {
  title: {
    text: "Test chart",
  },
  series: [
    {
      data: [1, 2, 3, 6, 8],
    },
    {
      data: [4, 3, 6, 7, 2],
    },
    {
      data: [5, 2, 1, 4, 7],
    },
  ],
  xAxis: {
    plotBands: [
      {
        color: "orange",
        from: 1,
        to: 2,
      },
    ],
    plotLines: [
      {
        color: "red",
        dashStyle: "longdashdot",
        value: 3,
        width: 2,
      },
    ],
  },
  yAxis: {
    plotBands: [
      {
        color: "blue",
        from: 4,
        to: 6,
      },
    ],
    plotLines: [
      {
        color: "green",
        dashStyle: "shortdashdot",
        value: 3,
        width: 6,
      },
    ],
  },
};

const BasicChart = () => (
  <div>
    <HighchartsReact highcharts={Highcharts} options={options} />
  </div>
);

export default BasicChart;
