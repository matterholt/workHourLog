import React, { useState, useEffect } from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import "./App.css";

import FlexTimeScale from "./components/FlexTimeScale";
import WeeklyStatusContainer from "./components/WeeklyStatusContainer";

function App() {
  return (
    <div>
      <header style={{ display: "flex", justifyContent: "space-evenly" }}>
        <h1>Weekly Hour Log</h1>
      </header>
      <main>
        <FlexTimeScale />
        <WeeklyStatusContainer />
      </main>
    </div>
  );
}

export default App;
