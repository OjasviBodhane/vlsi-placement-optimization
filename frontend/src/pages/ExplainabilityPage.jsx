import { explainabilitySummary } from '../data/demoData';

function ExplainabilityPage() {
  return (
    <div className="page-stack">
      <div className="card-surface section-panel">
        <div className="card-header">
          <h3>Explainability</h3>
        </div>
        <div className="info-grid">
          <div><strong>Model:</strong> {explainabilitySummary.model}</div>
          <div><strong>Target:</strong> {explainabilitySummary.target}</div>
          <div><strong>Status:</strong> {explainabilitySummary.explanationStatus}</div>
        </div>
        <div className="feature-list">
          <h4>Top explanatory features</h4>
          <ul>
            {explainabilitySummary.topFeatures.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>
        <p className="muted-text">
          GNNExplainer is implemented only when a compatible trained GNN and PyTorch Geometric setup are available. Feature importance shown here is demo-only and should not be treated as experimental evidence.
        </p>
      </div>
    </div>
  );
}

export default ExplainabilityPage;
