import { Routes, Route, NavLink } from 'react-router-dom';
import {
  BarChart3,
  Bot,
  CircuitBoard,
  Cpu,
  FileUp,
  Gauge,
  LayoutDashboard,
  Menu,
  Network,
  Settings,
  ShieldCheck,
  TrendingUp,
  Zap,
} from 'lucide-react';
import DashboardPage from './pages/DashboardPage';
import CircuitUploadPage from './pages/CircuitUploadPage';
import CircuitGraphPage from './pages/CircuitGraphPage';
import PlacementOptimizationPage from './pages/PlacementOptimizationPage';
import CandidateComparisonPage from './pages/CandidateComparisonPage';
import EdgeAIRankingPage from './pages/EdgeAIRankingPage';
import ExplainabilityPage from './pages/ExplainabilityPage';
import ReportsPage from './pages/ReportsPage';
import SettingsPage from './pages/SettingsPage';

const navItems = [
  { label: 'Dashboard', path: '/', icon: LayoutDashboard },
  { label: 'Circuit Upload', path: '/circuit-upload', icon: FileUp },
  { label: 'Circuit Graph', path: '/circuit-graph', icon: Network },
  { label: 'Placement Optimization', path: '/placement-optimization', icon: CircuitBoard },
  { label: 'Candidate Comparison', path: '/candidate-comparison', icon: BarChart3 },
  { label: 'Edge AI Ranking', path: '/edge-ai-ranking', icon: Cpu },
  { label: 'Explainability', path: '/explainability', icon: Bot },
  { label: 'Reports', path: '/reports', icon: TrendingUp },
  { label: 'Settings', path: '/settings', icon: Settings },
];

function App() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand-block">
          <div className="brand-mark">
            <Zap size={18} />
          </div>
          <div>
            <div className="brand-title">VLSI Placement</div>
            <div className="brand-subtitle">Optimization Lab</div>
          </div>
        </div>

        <nav className="sidebar-nav" aria-label="Main navigation">
          {navItems.map(({ label, path, icon: Icon }) => (
            <NavLink
              key={label}
              to={path}
              className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
            >
              <Icon size={16} />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="sidebar-status card-surface">
          <div className="status-topline">
            <ShieldCheck size={14} />
            <span>Application status</span>
          </div>
          <strong>DEMO MODE</strong>
          <p>Simulated data — no real circuit optimization yet.</p>
        </div>
      </aside>

      <main className="main-panel">
        <header className="topbar">
          <div className="topbar-left">
            <button className="mobile-menu" aria-label="Toggle sidebar">
              <Menu size={18} />
            </button>
            <div>
              <div className="eyebrow">Project dashboard</div>
              <h1>Explainable Multi-Objective GNN-Based VLSI Placement Optimization</h1>
            </div>
          </div>
          <div className="topbar-right">
            <div className="topbar-badge badge-demo">DEMO DATA</div>
            <div className="topbar-badge badge-neutral">Status: ready</div>
          </div>
        </header>

        <div className="page-shell">
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/circuit-upload" element={<CircuitUploadPage />} />
            <Route path="/circuit-graph" element={<CircuitGraphPage />} />
            <Route path="/placement-optimization" element={<PlacementOptimizationPage />} />
            <Route path="/candidate-comparison" element={<CandidateComparisonPage />} />
            <Route path="/edge-ai-ranking" element={<EdgeAIRankingPage />} />
            <Route path="/explainability" element={<ExplainabilityPage />} />
            <Route path="/reports" element={<ReportsPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
