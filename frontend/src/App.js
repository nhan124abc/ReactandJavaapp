import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmployeeList from "./EmployeeList";
import CreateEmployee from "./CreateEmployee";
import NotFound from "./NotFound";

function App() {
  return (
    <Router>
         <div className="App">
        <nav className="navbar">
          <Link to="/">Danh Sách Nhân Viên</Link>
          <Link to="/add">Thêm Nhân Viên</Link>
        </nav>
      <Routes>
        <Route path="/" element={<EmployeeList />} />
        <Route path="/add" element={<CreateEmployee />} />
        <Route path="*" element={<NotFound />} /> 
      </Routes>
      </div>
    </Router>
  );
}

export default App;
