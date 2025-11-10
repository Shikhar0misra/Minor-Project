import React from "react";

export default function StatsGrid({ stats, total }) {
  return (
    <section className="stats">
      <div className="stat-card">
        <div className="stat-number error">{stats.error}</div>
        <div className="stat-label">Errors</div>
      </div>
      <div className="stat-card">
        <div className="stat-number warning">{stats.warning}</div>
        <div className="stat-label">Warnings</div>
      </div>
      <div className="stat-card">
        <div className="stat-number info">{stats.info}</div>
        <div className="stat-label">Info</div>
      </div>
      <div className="stat-card">
        <div className="stat-number other">{total}</div>
        <div className="stat-label">Total Logs</div>
      </div>
    </section>
  );
}
