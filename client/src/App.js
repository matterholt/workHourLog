import React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import "./App.css";

import FlexTimeScale from "./components/FlexTimeScale";


import { weeklyStatus } from "./helpers/weeklyStatus"


const WeeklyHours = () => {
  return (
    
  )
}

function App() {
  return (
    <div>
      <header>
        <h1>Weekly Hour Log</h1>
      </header>
      <main>
        <FlexTimeScale />
      </main>
    </div>
  );
}

export default App;
