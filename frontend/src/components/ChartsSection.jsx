import React from "react";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  ArcElement,
  BarElement,
  Legend,
  Tooltip,
} from "chart.js";
import { Line, Doughnut, Bar } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  ArcElement,
  BarElement,
  Legend,
  Tooltip
);

export default function ChartsSection() {
  const lineData = {
    labels: ["10:00", "10:05", "10:10", "10:15", "10:20"],
    datasets: [
      {
        label: "Total Logs",
        data: [10, 20, 15, 30, 25],
        borderColor: "#3498db",
        backgroundColor: "rgba(52,152,219,0.1)",
        fill: true,
        tension: 0.3,
      },
    ],
  };

  const doughnutData = {
    labels: ["Error", "Warning", "Info", "Other"],
    datasets: [
      {
        data: [12, 7, 25, 5],
        backgroundColor: ["#e74c3c", "#f39c12", "#3498db", "#9b59b6"],
        borderWidth: 2,
        borderColor: "#fff",
      },
    ],
  };

  const barData = {
    labels: ["Server A", "Server B", "Server C", "Server D"],
    datasets: [
      {
        label: "Logs per Source",
        data: [12, 19, 8, 15],
        backgroundColor: "#3498db",
        borderColor: "#2980b9",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { labels: { color: "#333" } } },
    scales: {
      x: { ticks: { color: "#333" } },
      y: { beginAtZero: true, ticks: { color: "#333" } },
    },
  };

  return (
    <section className="charts">
      <div className="chart-card">
        <h2>Logs Trend</h2>
        <div style={{ height: "300px" }}>
          <Line data={lineData} options={options} />
        </div>
      </div>

      <div className="chart-card">
        <h2>Log Classification</h2>
        <div style={{ height: "300px" }}>
          <Doughnut data={doughnutData} options={options} />
        </div>
      </div>

      <div className="chart-card">
        <h2>Logs per Source</h2>
        <div style={{ height: "300px" }}>
          <Bar data={barData} options={options} />
        </div>
      </div>
    </section>
  );
}
