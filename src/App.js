
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import './App.css';
import Tasks from "./components/Tasks";
import TaskFour from "./components/TaskFour";
import TaskThree from "./components/TaskThree";
import Tasktwo from "./components/Tasktwo";
import Taskone from "./components/Taskone";


function App() {





  return (
    <div>
      <Tasks/>
        <Routes>
          <Route path="/taskone" element={<Taskone/>}/>
          <Route path="/tasktwo" element={<Tasktwo/>}/>
          <Route path="/taskthree" element={<TaskThree/>}/>
          <Route path="/taskfour" element={<TaskFour/>}/>

         
        </Routes>
      
    </div>
  );
}

export default App;
