import HighCharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = {};

const UpdateChart = () => (
  <div>
    <HighchartsReact highcharts={Highcharts} options={options} />
  </div>
);

export default UpdateChart;
