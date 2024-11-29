import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "./components/CustomNavbar";
import CustomFooter from "./components/CustomFooter.jsx";
import HarryPotterArea from "./components/HarryPotterArea.jsx";
import MatrixArea from "./components/MatrixArea.jsx";
import EvangelionArea from "./components/EvangelionArea.jsx";
import EditProfile from "./components/EditProfile.jsx";

function App() {
  return (
    <div className="App" bg="dark" data-bs-theme="dark">
      <header>
        <CustomNavbar />
      </header>
      <main>
        <HarryPotterArea />
        <MatrixArea />
        <EvangelionArea />
        <EditProfile />
      </main>
      <footer className="container mt-5">
        <CustomFooter />
      </footer>
    </div>
  );
}

export default App;
