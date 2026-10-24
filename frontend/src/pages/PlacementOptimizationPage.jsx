import { useState } from 'react';
import { objectiveConfig } from '../data/demoData';

function PlacementOptimizationPage() {
  const [config, setConfig] = useState({
    benchmark: 'toy-graph-circuit',
    population: 30,
    generations: 40,
  });

  const toggleObjective = (key) => {
    // Placeholder for later real config wiring.
    console.log('toggle objective', key);
  };

  return (
    <div className="page-stack">
      <div className="card-surface section-panel">
        <div className="card-header">
          <h3>Optimization run configuration</h3>
        </div>

        <div className="form-grid">
          <label>
            Circuit / benchmark
            <select value={config.benchmark} onChange={(e) => setConfig({ ...config, benchmark: e.target.value })}>
              <option value="toy-graph-circuit">toy-graph-circuit</option>
              <option value="sample_core_a">sample_core_a</option>
              <option value="adder_chain_3">adder_chain_3</option>
            </select>
          </label>

          <label>
            Population size
            <input type="number" value={config.population} min="10" max="200" onChange={(e) => setConfig({ ...config, population: Number(e.target.value) })} />
          </label>

          <label>
            Maximum generations
            <input type="number" value={config.generations} min="10" max="200" onChange={(e) => setConfig({ ...config, generations: Number(e.target.value) })} />
          </label>
        </div>

        <div className="objective-box">
          <h4>Optimization objectives</h4>
          <div className="objective-list">
            {objectiveConfig.map((objective) => (
              <label key={objective.key} className="objective-toggle">
                <input type="checkbox" defaultChecked={objective.enabled} onChange={() => toggleObjective(objective.key)} />
                <span>{objective.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="workflow-block">
          <h4>Workflow</h4>
          <div className="workflow-flow">
            <span>Circuit Input</span>
            <span>→</span>
            <span>Graph Construction</span>
            <span>→</span>
            <span>GNN Inference</span>
            <span>→</span>
            <span>Candidate Generation</span>
            <span>→</span>
            <span>NSGA-II</span>
            <span>→</span>
            <span>Edge AI Ranking</span>
            <span>→</span>
            <span>XAI Analysis</span>
            <span>→</span>
            <span>Results</span>
          </div>
        </div>

        <div className="action-row">
          <button className="primary-button">Start optimization</button>
          <button className="secondary-button">Cancel</button>
          <button className="secondary-button">View results</button>
        </div>
      </div>
    </div>
  );
}

export default PlacementOptimizationPage;
