export const demoMetrics = {
  totalCircuits: 18,
  placementCandidates: 126,
  paretoCandidates: 9,
  optimizationStatus: 'Demo mode active',
  benchmark: 'ISPD-2005 sample benchmark',
  lastUpdated: '2026-10-24 14:30 UTC',
};

export const wirelengthData = [
  { name: 'C1', value: 82 },
  { name: 'C2', value: 96 },
  { name: 'C3', value: 115 },
  { name: 'C4', value: 132 },
  { name: 'C5', value: 119 },
  { name: 'C6', value: 141 },
];

export const congestionData = [
  { name: 'C1', value: 24 },
  { name: 'C2', value: 28 },
  { name: 'C3', value: 32 },
  { name: 'C4', value: 38 },
  { name: 'C5', value: 35 },
  { name: 'C6', value: 40 },
];

export const timingData = [
  { name: 'C1', value: 11.2 },
  { name: 'C2', value: 10.6 },
  { name: 'C3', value: 14.1 },
  { name: 'C4', value: 16.8 },
  { name: 'C5', value: 15.4 },
  { name: 'C6', value: 18.3 },
];

export const powerData = [
  { name: 'C1', value: 5.2 },
  { name: 'C2', value: 5.7 },
  { name: 'C3', value: 6.8 },
  { name: 'C4', value: 7.1 },
  { name: 'C5', value: 6.5 },
  { name: 'C6', value: 7.8 },
];

export const areaData = [
  { name: 'C1', value: 52 },
  { name: 'C2', value: 57 },
  { name: 'C3', value: 61 },
  { name: 'C4', value: 68 },
  { name: 'C5', value: 64 },
  { name: 'C6', value: 71 },
];

export const recentRuns = [
  { id: 'RUN-1042', circuit: 'sample_core_a', algorithm: 'NSGA-II + GNN', status: 'Completed', date: '2026-10-24' },
  { id: 'RUN-1038', circuit: 'toy_placement_01', algorithm: 'Demo ranking', status: 'Demo', date: '2026-10-23' },
  { id: 'RUN-1030', circuit: 'adder_chain_3', algorithm: 'GNN + Pareto', status: 'Queued', date: '2026-10-22' },
  { id: 'RUN-1019', circuit: 'multiplier_x4', algorithm: 'Heuristic', status: 'Failed', date: '2026-10-20' },
];

export const demoGraph = {
  nodes: [
    { id: 'N1', label: 'Cell A', x: 180, y: 120, type: 'cell', properties: { type: 'buffer', fanout: 3 } },
    { id: 'N2', label: 'Cell B', x: 310, y: 120, type: 'cell', properties: { type: 'logic', fanout: 2 } },
    { id: 'N3', label: 'Cell C', x: 160, y: 250, type: 'cell', properties: { type: 'register', fanout: 4 } },
    { id: 'N4', label: 'Cell D', x: 360, y: 250, type: 'cell', properties: { type: 'memory', fanout: 2 } },
    { id: 'N5', label: 'Cell E', x: 500, y: 180, type: 'cell', properties: { type: 'mux', fanout: 3 } },
  ],
  edges: [
    { source: 'N1', target: 'N2' },
    { source: 'N1', target: 'N3' },
    { source: 'N2', target: 'N4' },
    { source: 'N2', target: 'N5' },
    { source: 'N3', target: 'N4' },
    { source: 'N4', target: 'N5' },
  ],
};

export const demoCandidates = [
  { id: 'CAND-001', wirelength: 84, congestion: 29, power: 5.4, area: 53.2, delay: 11.1, pareto: true, ranking: 0.88 },
  { id: 'CAND-002', wirelength: 89, congestion: 31, power: 5.7, area: 55.1, delay: 11.3, pareto: true, ranking: 0.82 },
  { id: 'CAND-003', wirelength: 98, congestion: 26, power: 6.1, area: 60.0, delay: 10.8, pareto: false, ranking: 0.71 },
  { id: 'CAND-004', wirelength: 104, congestion: 33, power: 5.2, area: 62.3, delay: 12.9, pareto: true, ranking: 0.74 },
];

export const objectiveConfig = [
  { key: 'wirelength', label: 'Wirelength', enabled: true },
  { key: 'congestion', label: 'Routing congestion', enabled: true },
  { key: 'power', label: 'Power', enabled: true },
  { key: 'area', label: 'Area', enabled: true },
  { key: 'delay', label: 'Delay', enabled: true },
];

export const objectivePareto = [
  { objective: 'Wirelength', value: 84, unit: 'µm' },
  { objective: 'Congestion', value: 29, unit: '%' },
  { objective: 'Power', value: 5.4, unit: 'mW' },
  { objective: 'Area', value: 53.2, unit: 'µm²' },
  { objective: 'Delay', value: 11.1, unit: 'ns' },
];

export const explainabilitySummary = {
  model: 'Demo GNN',
  target: 'Candidate CAND-001',
  topFeatures: ['Net connectivity', 'Cell fanout', 'Timing criticality'],
  explanationStatus: 'DEMO ONLY — no real trained model loaded',
};
