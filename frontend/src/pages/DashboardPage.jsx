import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { Activity, CalendarClock, Gauge, Layers3, Sparkles } from 'lucide-react';
import {
  demoMetrics,
  wirelengthData,
  congestionData,
  timingData,
  powerData,
  areaData,
  recentRuns,
} from '../data/demoData';

function StatCard({ label, value, icon: Icon, accent = 'cyan' }) {
  return (
    <div className="stat-card card-surface">
      <div className="stat-icon" data-accent={accent}>
        <Icon size={18} />
      </div>
      <div>
        <div className="stat-label">{label}</div>
        <div className="stat-value">{value}</div>
      </div>
    </div>
  );
}

function DashboardPage() {
  return (
    <div className="page-stack">
      <div className="demo-banner">
        <Sparkles size={16} />
        <span>DEMO DATA — NOT REAL PLACEMENT RESULTS</span>
      </div>

      <div className="stats-grid">
        <StatCard label="Total circuits processed" value={demoMetrics.totalCircuits} icon={Layers3} accent="cyan" />
        <StatCard label="Placement candidates" value={demoMetrics.placementCandidates} icon={Gauge} accent="blue" />
        <StatCard label="Pareto-optimal candidates" value={demoMetrics.paretoCandidates} icon={Activity} accent="teal" />
        <StatCard label="Latest optimization status" value={demoMetrics.optimizationStatus} icon={CalendarClock} accent="purple" />
      </div>

      <div className="metrics-row two-columns">
        <div className="card-surface chart-card">
          <div className="card-header">
            <h3>Wirelength</h3>
          </div>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={wirelengthData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#213a4d" />
              <XAxis dataKey="name" stroke="#9fb7c9" />
              <YAxis stroke="#9fb7c9" />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#67e8f9" strokeWidth={2} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="card-surface chart-card">
          <div className="card-header">
            <h3>Routing congestion</h3>
          </div>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={congestionData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#213a4d" />
              <XAxis dataKey="name" stroke="#9fb7c9" />
              <YAxis stroke="#9fb7c9" />
              <Tooltip />
              <Bar dataKey="value" fill="#60a5fa" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="metrics-row three-columns">
        <div className="card-surface chart-card">
          <div className="card-header">
            <h3>Timing / delay</h3>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={timingData}>
              <defs>
                <linearGradient id="delayGradient" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#60a5fa" stopOpacity={0.9} />
                  <stop offset="100%" stopColor="#60a5fa" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#213a4d" />
              <XAxis dataKey="name" stroke="#9fb7c9" />
              <YAxis stroke="#9fb7c9" />
              <Tooltip />
              <Area type="monotone" dataKey="value" stroke="#60a5fa" fill="url(#delayGradient)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="card-surface chart-card">
          <div className="card-header">
            <h3>Power</h3>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={powerData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#213a4d" />
              <XAxis dataKey="name" stroke="#9fb7c9" />
              <YAxis stroke="#9fb7c9" />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#a78bfa" strokeWidth={2} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="card-surface chart-card">
          <div className="card-header">
            <h3>Area</h3>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={areaData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#213a4d" />
              <XAxis dataKey="name" stroke="#9fb7c9" />
              <YAxis stroke="#9fb7c9" />
              <Tooltip />
              <Bar dataKey="value" fill="#2dd4bf" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="section-panel card-surface">
        <div className="card-header inline-header">
          <h3>Recent runs</h3>
          <span className="muted-label">Selected benchmark: {demoMetrics.benchmark}</span>
        </div>
        <table className="data-table">
          <thead>
            <tr>
              <th>Run ID</th>
              <th>Circuit name</th>
              <th>Algorithm</th>
              <th>Status</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {recentRuns.map((run) => (
              <tr key={run.id}>
                <td>{run.id}</td>
                <td>{run.circuit}</td>
                <td>{run.algorithm}</td>
                <td>
                  <span className={`status-badge ${run.status.toLowerCase()}`}>{run.status}</span>
                </td>
                <td>{run.date}</td>
                <td><button className="mini-button">View results</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DashboardPage;
