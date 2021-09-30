import logo from "./logo.svg";
import "./App.css";
import { ContactPage } from "./components/ContactPage";

function App() {
  return (
    <div className="container-fluid mt-4">
      <h1 className="text-center display-5">Contact Application</h1>
      <hr></hr>
      <ContactPage />
    </div>
  );
}

export default App;
