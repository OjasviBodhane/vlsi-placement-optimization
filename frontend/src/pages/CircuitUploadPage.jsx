import { useState } from 'react';
import { FileUp, UploadCloud, X } from 'lucide-react';

const supportedFormats = ['.json', '.bench', '.txt'];

function CircuitUploadPage() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');

  const handleFileSelect = (selectedFile) => {
    if (!selectedFile) return;

    if (selectedFile.size > 10 * 1024 * 1024) {
      setError('File exceeds 10 MB limit. Please upload a smaller benchmark or JSON netlist.');
      return;
    }

    const ext = selectedFile.name.split('.').pop()?.toLowerCase();
    if (!supportedFormats.includes(`.${ext}`) && !selectedFile.name.toLowerCase().endsWith('.json')) {
      setError('Unsupported file type. Current demo support includes JSON circuits and simple benchmark text files.');
      return;
    }

    setFile(selectedFile);
    setError('');
  };

  return (
    <div className="page-stack">
      <div className="demo-banner small-banner">
        <UploadCloud size={16} />
        <span>Upload is validated on the client before backend confirmation.</span>
      </div>

      <div className="card-surface section-panel">
        <div className="card-header">
          <h3>Upload circuit input</h3>
        </div>

        <label className="dropzone" htmlFor="upload-file">
          <input
            id="upload-file"
            type="file"
            onChange={(event) => handleFileSelect(event.target.files?.[0])}
            hidden
          />
          <FileUp size={32} />
          <div>
            <strong>Choose a file or drag and drop</strong>
            <p>Supported types: JSON netlist or simple benchmark text.</p>
          </div>
        </label>

        <div className="file-meta-wrap">
          {file ? (
            <div className="file-meta card-surface inner-card">
              <div>
                <div className="file-name">{file.name}</div>
                <div className="file-details">
                  <span>{(file.size / 1024).toFixed(1)} KB</span>
                  <span>{file.name.split('.').pop()?.toUpperCase() || 'FILE'}</span>
                  <span>{file.type || 'unknown type'}</span>
                </div>
              </div>
              <button className="mini-button danger" onClick={() => setFile(null)}>
                <X size={14} /> Remove
              </button>
            </div>
          ) : (
            <div className="empty-state-card">
              No file selected yet. Use the demo circuit option to continue without an upload.
            </div>
          )}
        </div>

        {error && <div className="alert error">{error}</div>}

        <div className="action-row">
          <button className="primary-button">Use demo circuit</button>
          <button className="secondary-button">Validate upload</button>
        </div>
      </div>

      <div className="card-surface section-panel">
        <div className="card-header">
          <h3>Currently supported formats</h3>
        </div>
        <ul className="bullet-list">
          <li>JSON circuit graph input for the prototype demo pipeline.</li>
          <li>Simple benchmark-style text files when a real parser is connected and validated.</li>
          <li>Verilog and industrial netlist formats are not claimed as supported until a parser is implemented and tested.</li>
        </ul>
      </div>
    </div>
  );
}

export default CircuitUploadPage;
