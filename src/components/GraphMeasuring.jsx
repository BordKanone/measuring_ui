import React, { useEffect, useState } from "react";
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
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function GraphMeasuring({ channel }) {
  const [labels, setLabels] = useState([]);
  const [periods, setPeriods] = useState([...channel.period]);
  const [value, setValue] = useState([]);

  console.log("sada", periods);

  useEffect(() => {
    const labelsMap = [];
    const valueMap = [];
    periods.forEach((item) => {
      labelsMap.push(item.start)
      valueMap.push(item.value)
    });

    setLabels(labelsMap)
    setValue(valueMap)
  }, [periods]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: `${channel.desc}`,
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Значение измерений",
        data: value,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <div >
      <Line options={options} data={data} />
    </div>
  );
}
