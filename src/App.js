
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import Dashboard from "./layouts/Dashboard";
import Navbar from "./layouts/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Container className="main">
        <Dashboard />
      </Container>
    </div>
  );
}

export default App;