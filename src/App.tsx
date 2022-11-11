import React from "react";
import { Routes, Route } from 'react-router';

import { Test } from "./components/Test/Test";

export const App: React.FC = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="/test" element={<Test />} />
        <Route path="*" element={<Test />} />
      </Routes>
    </div>
  );
}
