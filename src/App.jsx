import React from "react";
import RiteshPatel from "./components/RiteshPatel/RiteshPatel";
import Portfolio from "./components/RiteshPatel/code";
import { Analytics } from "@vercel/analytics/next";
function App() {
  return (
    <>
      <RiteshPatel />
      <Analytics />
    </>
  );
}

export default App;
