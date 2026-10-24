# Architecture overview

## Phase 1: Frontend foundation

The current implementation provides a responsive engineering dashboard and page structure for the research workflow. It includes demo data and navigation pages that match the project specification.

## Planned architecture

- Frontend: React + Vite + React Router + Recharts
- Backend: FastAPI + Pydantic + Uvicorn
- AI: PyTorch, PyTorch Geometric (when compatible), NSGA-II via pymoo
- Explainability: GNNExplainer if supported by the selected model stack
- Data: circuit inputs, graph representations, candidate records, optimization outputs

## Constraints

- Demo mode intentionally uses sample values and clear labels.
- Real optimization is only reported after the pipeline runs successfully.
- Real VLSI tools such as OpenROAD are optional integration targets, not required for the initial prototype.
