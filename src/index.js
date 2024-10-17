import React from "react";
import ReactDOM from "react-dom/client"; // Update this import
import "./index.css";
import App from "./App";

// Create a root to render your app
const root = ReactDOM.createRoot(document.getElementById("root")); // Create a root element

// Render the app within the created root
root.render(<App />);
