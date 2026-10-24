import { demoCandidates } from '../data/demoData';

function EdgeAIRankingPage() {
  return (
    <div className="page-stack">
      <div className="card-surface section-panel">
        <div className="card-header">
          <h3>Edge AI candidate ranking</h3>
        </div>
        <table className="data-table">
          <thead>
            <tr>
              <th>Candidate ID</th>
              <th>Ranking score</th>
              <th>Model type</th>
              <th>Inference latency</th>
              <th>Model size</th>
              <th>Source</th>
            </tr>
          </thead>
          <tbody>
            {demoCandidates.map((candidate) => (
              <tr key={candidate.id}>
                <td>{candidate.id}</td>
                <td>{candidate.ranking.toFixed(2)}</td>
                <td>Demo lightweight ranker</td>
                <td>~3.7 ms</td>
                <td>~0.8 MB</td>
                <td>Demo data</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EdgeAIRankingPage;
