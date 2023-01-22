import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Label,
  Legend,
} from "recharts";
import "./style.css";
const Chart = (props) => {
  return (
    <>
    <div className="chart">
      <LineChart  width={730} height={250} data={props?.data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month">
          {/* <Label className= 'label' value= 'Month' position= 'Bottom' fill='rgb(136, 132, 216)'  fontSize= '25'  fontStyle= 'italic' />  */}
        </XAxis>
        <YAxis
          label={{
            value: "Peformance",
            angle: "-90",
            position: "Left",
            fill: "rgb(136, 132, 216)",
            fontSize: "25",
            fontStyle: "italic",
          }}
        />
        <Tooltip />

        <Line type="monotone" dataKey="perform" stroke="#8884d8" />
      </LineChart>
      </div>
    </>
  );
};
export default Chart;
