import logo from "./logo.svg";
import "./App.css";
import { ContactPage } from "./components/ContactPage";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { ContactForm } from "./components/ContactForm";
import { ContactList } from "./components/ContactList";

function App() {
  return (
    <Router>
      <div className="container-fluid mt-4">
        <h1 className="text-center display-5">Contact Application</h1>
        <hr></hr>

        <ContactPage />
      </div>
    </Router>
  );
}

export default App;
