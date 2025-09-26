import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmployeeList from "./component/EmployeeList";
import CreateEmployee from "./component/CreateEmployee";
import NotFound from "./component/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EmployeeList />} />
        <Route path="/add" element={<CreateEmployee />} />
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </Router>
  );
}

export default App;
