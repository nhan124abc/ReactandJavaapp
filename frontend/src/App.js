import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmployeeList from "./component/EmployeeList";
import CreateEmployee from "./component/CreateEmployee";
import NotFound from "./component/NotFound";

function App() {
  return (
      <Router>
          <div className="App">
              <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
                  <a className="navbar-brand fw-bold" href="/">Employee Manager</a>
                  <div className="collapse navbar-collapse">
                      <ul className="navbar-nav ms-auto">
                          <li className="nav-item">
                              <a className="nav-link" href="/">Danh Sách Nhân Viên</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" href="/add">Thêm Nhân Viên</a>
                          </li>
                      </ul>
                  </div>
              </nav>


          <Routes>
              <Route path="/" element={<EmployeeList/>}/>
              <Route path="/add" element={<CreateEmployee/>}/>
              <Route path="*" element={<NotFound/>}/>
          </Routes>
      </div>
</Router>
)
    ;
}

export default App;
