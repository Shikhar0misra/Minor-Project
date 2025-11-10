import React, { useEffect, useState } from "react";

export default function LogsTable() {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState("");

  const API_URL = "http://127.0.0.1:8000/logs/";

  const fetchLogs = async () => {
    try {
      setLoading(true);

      const response = await fetch(API_URL);
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

      const data = await response.json();

      // assuming your backend returns { logs: [...] }
      if (data.logs && data.logs.length > 0) {
        setLogs(data.logs);
      } else {
        setLogs([]);
      }

      setLastUpdated(new Date().toLocaleString());
    } catch (error) {
      console.error("Error fetching logs:", error);
    } finally {
      setLoading(false);
    }
  };

  // Auto refresh every 5s
  useEffect(() => {
    fetchLogs();
    const interval = setInterval(fetchLogs, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="logs-section">
      <div className="logs-header">
        <h2>Recent Logs</h2>
        <button className="refresh-btn" onClick={fetchLogs}>
          Refresh
        </button>
      </div>

      {loading ? (
        <div className="loading">Loading logs...</div>
      ) : logs.length === 0 ? (
        <div className="loading">No logs found.</div>
      ) : (
        <table className="log-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Timestamp</th>
              <th>Message</th>
              <th>Source</th>
              <th>Classification</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log) => (
              <tr key={log.id}>
                <td>#{log.id}</td>
                <td>{new Date(log.timestamp).toLocaleString()}</td>
                <td>{log.message}</td>
                <td>{log.source}</td>
                <td>
                  <span
                    className={`classification-badge badge-${
                      log.classification || "other"
                    }`}
                  >
                    {log.classification?.toUpperCase() || "OTHER"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div className="last-updated">
        {lastUpdated && `Last updated: ${lastUpdated}`}
      </div>
    </section>
  );
}
