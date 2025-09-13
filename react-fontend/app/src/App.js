import React from 'react';
import EmployeeList from './component/EmployeeList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateEmployee from "./component/CreateEmployee";
function App() {
  return (
      <Router>

          <div className="App">
              <nav className="navbar">
                  <a href="/">Danh Sách Nhân Viên</a>
                  <a href="/add">Thêm Nhân Viên</a>
              </nav>
              <Routes>
                  <Route path="/" element={<EmployeeList/>}/>
                  <Route path="/add" element={<CreateEmployee/>}/>
              </Routes>
          </div>

      </Router>

  );
}

export default App;
