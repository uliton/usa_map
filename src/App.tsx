import React from "react";
import { Routes, Route } from 'react-router';
import { Main } from "./components/Main";

export const App: React.FC = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/test" element={<Main />} />
        <Route path="*" element={<Main />} />
      </Routes>
    </div>
  );
}
