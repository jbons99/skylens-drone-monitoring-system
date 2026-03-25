import { useState } from "react";
import PageLayout from "../components/layout/PageLayout.jsx";
import Button from "../components/common/Button.jsx";

function Upload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [location, setLocation] = useState("");
  const [notes, setNotes] = useState("");

  function handleFileChange(event) {
    setSelectedFile(event.target.files[0] || null);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!selectedFile) {
      alert("Please select an image");
      return;
    }

    console.log({
      file: selectedFile.name,
      location,
      notes,
    });

    alert("Submitted for detection");
  }

  return (
    <PageLayout>
      <div className="page-header">
        <div>
          <h1 className="page-title">New Detection Upload</h1>
          <div className="page-meta">
            Submit a drone image for YOLO object detection
          </div>
        </div>
      </div>

      <div className="upload-grid">
        <div>
          <label className="drop-zone" htmlFor="upload-image">
            <div className="drop-icon">🖼️</div>
            <div className="drop-title">Drop image here</div>
            <div className="drop-sub">
              or click to browse your device
              <br />
              Supports aerial and drone imagery
            </div>

            <div className="drop-formats">
              <span className="format-tag">JPG</span>
              <span className="format-tag">PNG</span>
              <span className="format-tag">WEBP</span>
              <span className="format-tag">TIFF</span>
            </div>
          </label>

          <input
            id="upload-image"
            className="hidden-file-input"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />

          {selectedFile && (
            <div className="upload-meta">
              📎 <span>{selectedFile.name}</span>
            </div>
          )}
        </div>

        <form className="upload-form" onSubmit={handleSubmit}>
          <div>
            <label className="field-label" htmlFor="location">
              Location / Site
            </label>
            <input
              id="location"
              className="field-input"
              type="text"
              placeholder="e.g. Collaroy Beach, NSW"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
            />
          </div>

          <div>
            <label className="field-label" htmlFor="notes">
              Notes
            </label>
            <textarea
              id="notes"
              className="textarea-input"
              placeholder="Add context about this capture — weather, time of day, purpose..."
              value={notes}
              onChange={(event) => setNotes(event.target.value)}
            />
          </div>

          <Button text="SUBMIT FOR DETECTION →" type="submit" />
        </form>
      </div>
    </PageLayout>
  );
}

export default Upload;