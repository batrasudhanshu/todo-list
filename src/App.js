import logo from "./logo.svg";
import "./App.css";
import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import TaskDetails from "./components/TaskDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={TodoList} />
          <Route exact path="/taskdetails/:id" component={TaskDetails} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
