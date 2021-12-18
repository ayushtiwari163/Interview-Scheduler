import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/navBar/navbar";
import { createInterview } from "./components/createInterview/createInterview";
import foorm from "./components/createInterview/createInterview";
function App() {
  return (
    <div className="App">
      <Navbar />
      <foorm />
      <createInterview />
    </div>
  );
}

export default App;
