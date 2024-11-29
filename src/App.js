import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "./components/CustomNavbar";
import CustomFooter from "./components/CustomFooter.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CustomNavbar />
      </header>
      <main></main>
      <footer >
        <CustomFooter />
      </footer>
    </div>
    
  );
}

export default App;
