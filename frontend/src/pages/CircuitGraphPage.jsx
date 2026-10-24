import { useState } from 'react';
import { ZoomIn, ZoomOut, ScanSearch, RefreshCw } from 'lucide-react';
import { demoGraph } from '../data/demoData';

function CircuitGraphPage() {
  const [selectedNode, setSelectedNode] = useState(demoGraph.nodes[0]);

  return (
    <div className="page-stack">
      <div className="demo-banner small-banner">
        <ScanSearch size={16} />
        <span>Simple graph view only — not a physical chip floorplan.</span>
      </div>

      <div className="card-surface section-panel">
        <div className="card-header inline-header">
          <h3>Circuit graph</h3>
          <div className="toolbar-inline">
            <button className="mini-button"><ZoomOut size={14} /></button>
            <button className="mini-button"><ZoomIn size={14} /></button>
            <button className="mini-button"><RefreshCw size={14} /></button>
          </div>
        </div>

        <div className="graph-panel">
          <svg viewBox="0 0 640 360" className="graph-svg" role="img" aria-label="Circuit graph demo">
            {demoGraph.edges.map((edge, index) => {
              const source = demoGraph.nodes.find((node) => node.id === edge.source);
              const target = demoGraph.nodes.find((node) => node.id === edge.target);

              return (
                <line
                  key={`${edge.source}-${edge.target}-${index}`}
                  x1={source.x}
                  y1={source.y}
                  x2={target.x}
                  y2={target.y}
                  stroke="#7dd3fc"
                  strokeWidth="2"
                  opacity="0.7"
                />
              );
            })}

            {demoGraph.nodes.map((node) => (
              <g
                key={node.id}
                onClick={() => setSelectedNode(node)}
                className={`graph-node ${selectedNode.id === node.id ? 'selected' : ''}`}
                style={{ cursor: 'pointer' }}
              >
                <circle cx={node.x} cy={node.y} r={26} fill="#0ea5e9" opacity={0.9} />
                <text x={node.x} y={node.y + 4} textAnchor="middle" fill="#e2f0ff" fontSize="11">
                  {node.label}
                </text>
              </g>
            ))}
          </svg>
        </div>

        <div className="graph-summary">
          <div><strong>Node count:</strong> {demoGraph.nodes.length}</div>
          <div><strong>Edge count:</strong> {demoGraph.edges.length}</div>
          <div><strong>View mode:</strong> Demo graph</div>
        </div>
      </div>

      <div className="card-surface section-panel">
        <div className="card-header">
          <h3>Selected node properties</h3>
        </div>
        <div className="node-detail">
          <div><strong>ID:</strong> {selectedNode.id}</div>
          <div><strong>Label:</strong> {selectedNode.label}</div>
          <div><strong>Type:</strong> {selectedNode.properties.type}</div>
          <div><strong>Fanout:</strong> {selectedNode.properties.fanout}</div>
        </div>
      </div>
    </div>
  );
}

export default CircuitGraphPage;
