import React from "react";
import StatsGrid from "./components/StatsGrid";
import ChartsSection from "./components/ChartsSection";
import LogsTable from "./components/LogsTable";
import "./styles.css";

export default function App() {
  const stats = { error: 12, warning: 7, info: 25 };
  const total = 44;

  return (
    <div className="container">
      <header className="header">
        <h1>LOG Monitoring Dashboard</h1>
        <p>Real-time log monitoring and analysis</p>
      </header>

      <StatsGrid stats={stats} total={total} />
      <ChartsSection />
      <LogsTable />
    </div>
  );
}
