import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");

  const [isOpen, setIsOpen] = useState(false); // toggle state

  const handleToggle = () => setIsOpen(!isOpen);
  const handleClose = () => setIsOpen(false);

  const handleLogout = () => {
    localStorage.removeItem("userId");
    handleClose();
    navigate("/login");
  };



  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/" onClick={handleClose}>
          <i className="fas fa-wallet me-2"></i>Expense Tracker
        </Link>
        <button className="navbar-toggler" type="button" onClick={handleToggle}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={handleClose}>
                <i className="fas fa-home me-1"></i>
                Home
              </Link>
            </li>
            {userId ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/dashboard" onClick={handleClose}>
                    <i className="fas fa-tachometer-alt me-1"></i>
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/add-expense" onClick={handleClose}>
                    <i className="fas fa-plus me-1"></i>
                    Add Expense
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/manage-expense" onClick={handleClose}>
                    <i className="fas fa-tasks me-1"></i>
                    Manage Expense
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/expense-report" onClick={handleClose}>
                    <i className="fas fa-file-alt me-1"></i>
                    Expense Report
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/change-password" onClick={handleClose}>
                    <i className="fas fa-key me-1"></i>
                    Change Password
                  </Link>
                </li>
                <li className="nav-item ms-2">
                  <button className="btn btn-danger btn-sm" onClick={handleLogout}>
                    <i className="fas fa-sign-out-alt me-1"></i>
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup" onClick={handleClose}>
                    <i className="fas fa-user-plus me-1"></i>
                    Signup
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login" onClick={handleClose}>
                    <i className="fas fa-sign-in-alt me-1"></i>
                    Login
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
