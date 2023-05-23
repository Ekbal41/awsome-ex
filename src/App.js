import "./App.css";
import { Route, Routes } from "react-router-dom";
import { MemoryRouter as Router } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Error from "./pages/Error";
import Layout from "./components/Layout";
import Repos from "./pages/Repos";

function App() {
  return (
    <div
      style={{
        minWidth: "300px",
        minHeight: "400px",
       
      }}
    >
      <Layout>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/error" element={<Error />} />
            <Route path="/repos" element={<Repos />} />
          </Routes>
        </Router>
      </Layout>
    </div>
  );
}

export default App;
