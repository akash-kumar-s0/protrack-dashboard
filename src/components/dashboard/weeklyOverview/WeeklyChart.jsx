import React from "react";
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

const WeeklyChart = ({ weekDays }) => {
  const data = {
    labels: weekDays,
    datasets: [
      {
        label: "Tasks",
        data: [10, 12, 15, 20, 18, 13, 16], 
        borderColor: "#FF71AF",
        backgroundColor: "rgba(255, 113, 175, 0.15)",
        borderWidth: 3,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: "#FF71AF",
        pointBorderColor: "#FF71AF",
        pointBorderWidth: 2,
        pointRadius: 5,
      },
      {
        label: "Goal",
        data: [8, 10, 12, 14, 16, 18, 20], 
        borderColor: "#49CCF9",
        backgroundColor: "rgba(73, 204, 249, 0.15)",
        borderWidth: 3,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: "#49CCF9",
        pointBorderColor: "#49CCF9",
        pointBorderWidth: 2,
        pointRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, 
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        titleColor: "#fff",
        bodyColor: "#fff",
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
        display: false,
      },
      y: {
        beginAtZero: true,
        grid: {
          display : false,
        },
        ticks: {
          display: false, 
        },
        display: false
      },
    },
  };

  return (
    <div className="flex flex-col ml-5 w-[82%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col mt-2 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex overflow-hidden flex-col rounded-xl border border-solid border-slate-200 max-w-[600px] max-h-[200px]">
          <Line data={data} options={options} />
        </div>
        <div className="flex gap-5 justify-between self-center mt-4 max-w-full font-jakarta font-normal text-small tracking-tight leading-loose text-center whitespace-nowrap text-zinc-500 w-[535px]">
          {weekDays.map((day, index) => (
            <span key={index}>{day}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeeklyChart;