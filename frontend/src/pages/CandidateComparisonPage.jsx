import { demoCandidates } from '../data/demoData';

function CandidateComparisonPage() {
  return (
    <div className="page-stack">
      <div className="card-surface section-panel">
        <div className="card-header">
          <h3>Candidate comparison</h3>
        </div>
        <table className="data-table">
          <thead>
            <tr>
              <th>Candidate ID</th>
              <th>Wirelength</th>
              <th>Congestion</th>
              <th>Power</th>
              <th>Area</th>
              <th>Delay</th>
              <th>Pareto</th>
              <th>AI rank</th>
            </tr>
          </thead>
          <tbody>
            {demoCandidates.map((candidate) => (
              <tr key={candidate.id}>
                <td>{candidate.id}</td>
                <td>{candidate.wirelength}</td>
                <td>{candidate.congestion}</td>
                <td>{candidate.power}</td>
                <td>{candidate.area}</td>
                <td>{candidate.delay}</td>
                <td>{candidate.pareto ? 'Yes' : 'No'}</td>
                <td>{candidate.ranking}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CandidateComparisonPage;
