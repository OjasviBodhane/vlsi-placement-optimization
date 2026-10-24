function SettingsPage() {
  return (
    <div className="page-stack">
      <div className="card-surface section-panel">
        <div className="card-header">
          <h3>Project settings</h3>
        </div>
        <div className="settings-list">
          <div className="setting-item">
            <span>Mode</span>
            <strong>Demo</strong>
          </div>
          <div className="setting-item">
            <span>Window</span>
            <strong>Local development</strong>
          </div>
          <div className="setting-item">
            <span>OpenROAD integration</span>
            <strong>Not enabled</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsPage;
