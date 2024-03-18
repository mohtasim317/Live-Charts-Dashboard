import { useEffect, useState } from "react";
import { convertUTCToTimeDate } from "../util";

export default function useLineGraph(metric: string, url: string) {
  const [minGraphData, setMinGraphData] = useState<string[]>([]);
  const [avgGraphData, setAvgGraphData] = useState<string[]>([]);
  const [maxGraphData, setMaxGraphData] = useState<string[]>([]);
  const [labels, setLabels] = useState<string[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetch(
          `https://takehome-frontend.oden.network/?metric=${url}`
        );
        const jsonData = await data.json();

        const tempMinData = [];
        const tempAvgData = [];
        const tempMaxData = [];
        const tempLabelDate = [];

        for (let i = 0; i < jsonData.series.length; i++) {
          tempMinData.push(jsonData.series[i][1][0]);
          tempAvgData.push(jsonData.series[i][1][1]);
          tempMaxData.push(jsonData.series[i][1][2]);
          tempLabelDate.push(convertUTCToTimeDate(jsonData.series[i][0]));
        }

        setMinGraphData(tempMinData);
        setAvgGraphData(tempAvgData);
        setMaxGraphData(tempMaxData);
        setLabels(tempLabelDate);
      } catch (e) {
        console.log(e);
      }
    }

    fetchData();

    const timeoutId = setInterval(() => {
      fetchData();
    }, 1000);

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearInterval(timeoutId);
  }, []);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Minimum",
        data: minGraphData,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Average",
        data: avgGraphData,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "Maximum",
        data: maxGraphData,
        borderColor: "rgb(162, 162, 235)",
        backgroundColor: "rgba(162, 162, 235, 0.5)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: `${metric}`,
      },
    },
    animation: {
      duration: 0,
    },
    responsiveAnimationDuration: 0,
  };

  return { data, options };
}
