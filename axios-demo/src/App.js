import "./App.css";
import { Navbar } from "./components/Navbar";
import { TodoList } from "./components/TodoList";
import { BrowserRouter, Route } from "react-router-dom";
import { TodoDetails } from "./components/TodoDetails";

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <div className="container">
        <br></br>
        <h1 className="text-center">Todo App With Axios</h1>

        <Route path="/todos/:id">
          <TodoDetails></TodoDetails>
        </Route>
        <Route path="/" exact={true}>
          <TodoList></TodoList>
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
