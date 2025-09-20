import "./App.css";
import React from "react";
import { RPConfig } from "@pdf-viewer/react";
import AppPdfViewer from "./components/AppPdfViewer";

function App() {
  return (
    <>
      <React.Suspense fallback={<div />}>
        <RPConfig>
          <div className="container">
            <h1>RP Starter Toolkit: React vite + TypeScript | Electron</h1>
            <br />
            <h2>Default Toolbar</h2>
            <AppPdfViewer />
            <h2>Without Toolbar</h2>
            <AppPdfViewer
              showToolbar={false}
              defaultLayoutProps={{
                style: { width: "100%", height: "550px" },
              }}
            />
            <h2>Mobile</h2>
            <AppPdfViewer
              defaultLayoutProps={{
                style: { width: "500px" },
              }}
            />
          </div>
        </RPConfig>
      </React.Suspense>
    </>
  );
}

export default App;
