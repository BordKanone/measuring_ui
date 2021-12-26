import React, { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function GraphMeasuring({channel}){

  const [labels, setLabels] = useState()
  const [periods, setPeriods] = useState([])

  
  useState(()=>{
    if(channel){
      
    }
      setLabels(channel)
      setPeriods(...channel.period)
  },[channel])

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: `${labels.desc}`,
      },
    },
  };

  const data = {
    periods,
    datasets: [
      {
        label: 'Значение измерений',
        data: periods.map((period) => period.value),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return(
    <div>
      <Line options={options} data={data} />
    </div>
  )
}