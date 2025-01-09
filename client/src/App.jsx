import { Route, Routes, Navigate } from "react-router-dom";
import MainPAge from "./Pages/MainPage";

export default function App() {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" replace />} />
      <Route path="/" element={<MainPAge />} />
    </Routes>
  );
}
