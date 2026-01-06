import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TermsAndConditions from "./pages/TermsAndConditions";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms" element={<TermsAndConditions />} />
      </Routes>
    </Router>
  );
}

export default App;
