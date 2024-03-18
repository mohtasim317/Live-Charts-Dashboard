import LineGraph from "./Components/LineGraph/LineGraph";
import "./App.css";
import { metrics } from "./constants";
import { MetricsType } from "./types";

function App() {
  return (
    <>
      <h1 className="Title">Key Metrics Dashboard</h1>
      {Object.keys(metrics).map((key, i) => {
        return (
          <LineGraph
            metric={key}
            key={i}
            url={metrics[key as keyof MetricsType]}
          />
        );
      })}
    </>
  );
}

export default App;
