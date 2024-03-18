import "./LineGraph.css";
import useLineGraph from "../../Hooks/useLineGraph";
import { LineGraphProps } from "../../types";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function LineGraph({ metric, url }: LineGraphProps) {
  const { data, options } = useLineGraph(metric, url);
  return (
    <div className="LineGraph">
      <Line data={data} options={options} />
    </div>
  );
}

export default LineGraph;
