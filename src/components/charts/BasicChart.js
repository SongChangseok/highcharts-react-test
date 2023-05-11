import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = {
  title: {
    text: "Test chart",
  },
  series: [
    {
      data: [1, 2, 3],
    },
    {
      data: [4, 3, 2],
    },
  ],
};

const BasicChart = () => (
  <div>
    <HighchartsReact highcharts={Highcharts} options={options} />
  </div>
);

export default BasicChart;
