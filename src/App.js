import React from "react";
import "./App.css";

function App() {
  return (
    <div className="single-spa-cra">
      <h2>Single SPA test with CRA</h2>
      This is active across all routes. Imagine it as the Header and MenuBar of
      Business Aviation
      <br />
      <a href="http://localhost:3000/business-aviation">
        Activate "business-aviation"
      </a>
      <hr />
    </div>
  );
}

export default App;
