import React from "react";
import RiteshPatel from "./components/RiteshPatel/RiteshPatel";
import { Analytics } from "@vercel/analytics/react";
function App() {
  return (
    <>
      <RiteshPatel />
      <Analytics />
    </>
  );
}

export default App;
