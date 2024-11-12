import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
