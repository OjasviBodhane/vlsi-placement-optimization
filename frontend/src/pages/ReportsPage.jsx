function ReportsPage() {
  return (
    <div className="page-stack">
      <div className="card-surface section-panel">
        <div className="card-header">
          <h3>Reports</h3>
        </div>
        <div className="action-row">
          <button className="primary-button">Export CSV</button>
          <button className="secondary-button">Export JSON</button>
          <button className="secondary-button">Export PDF</button>
        </div>
        <div className="report-summary">
          <p>Current view is a demo placeholder. Real report generation becomes available once an optimization run is successfully executed and validated.</p>
        </div>
      </div>
    </div>
  );
}

export default ReportsPage;
