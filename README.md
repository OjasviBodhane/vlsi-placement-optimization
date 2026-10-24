# Explainable Multi-Objective GNN-Based VLSI Placement Optimization

This project is a final-year B.Tech research prototype for exploring explainable graph learning, multi-objective optimization, and candidate assessment in VLSI placement workflows. The current milestone focuses on the frontend foundation and demo-mode dashboard.

## Current status

Completed in this workspace:
- React + Vite frontend scaffold
- Responsive dark engineering dashboard
- Sidebar navigation for all required pages
- Demo data for circuit metrics, graph view, candidate comparison, explainability, and reports
- Production build verification with Vite

Important:
- All values shown in the current UI are demo/simulated data.
- The interface explicitly labels them as demo-only and does not claim real placement optimization results.
- Real backend, GNN training, and optimization workflows are not yet connected.

## Project structure

- frontend/
- backend/
- docs/

## Run the frontend

PowerShell commands:

```powershell
cd "C:\Users\bodha\OneDrive\Pictures\Ojasvi Bodhane\vlsi-placement-optimization\frontend"
npm install
npm run dev -- --host 0.0.0.0
```

Then open:

- http://localhost:5173/

## Verify the build

```powershell
cd "C:\Users\bodha\OneDrive\Pictures\Ojasvi Bodhane\vlsi-placement-optimization\frontend"
npm run build
```

## Next milestone

The next phase is the backend foundation: FastAPI health checks, file validation, demo graph construction endpoints, and API integration with the frontend. The project is intentionally staged so the UI is working before advanced AI modules are added.
