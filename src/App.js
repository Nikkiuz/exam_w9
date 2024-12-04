import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "./components/CustomNavbar";
import CustomFooter from "./components/CustomFooter.jsx";
import HarryPotterArea from "./components/HarryPotterArea.jsx";
import MatrixArea from "./components/MatrixArea.jsx";
import EvangelionArea from "./components/EvangelionArea.jsx";
import EditProfile from "./components/EditProfile.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App" bg="dark" data-bs-theme="dark">
        <header>
          <CustomNavbar />
        </header>
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HarryPotterArea />
                  <MatrixArea />
                  <EvangelionArea />
                </>
              }
            />
            <Route path="/profile" element={<EditProfile />} />
          </Routes>
        </main>
        <footer className="container mt-5">
          <CustomFooter />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
