import React from "react";
import { Button, Nav, NavItem, ListGroup, ListGroupItemText } from "reactstrap";
import logo from '../assets/logo.png'
const Header = () => {
  return (
    <React.Fragment>
      <>
        {/* Hello world */}
        <nav className="nav mt-2 p-20 navbar navbar-expand-lg navbar-light bg-light">
          <label
            style={{
              fontSize: 22,
              fontWeight: "bold",
              marginRight: 15,
              marginTop: "-5px",
            }}
          >
            Anaha
          </label>
          <nav
            style={{
              bsBreadcrumbDivider:
                'url("data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="15" height="10" %3E%3Cpath d="M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z" fill="currentColor"/%3E%3C/svg%3E")',
              marginLeft: 20,
              fontSize: 26,
            }}
            aria-label="breadcrumb"
          >
            <ol className="breadcrumb" style={{ fontSize: 16 }}>
              <li className="breadcrumb-item">
                <a href="#">Patient Profile</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Analytics
              </li>
            </ol>
          </nav>
          <div
            style={{
              marginLeft: 80,
              
              paddingTop: 1,
              marginTop: "-2px",
            }}
          >
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>
          <li className="nav-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              fill="currentColor"
              className="bi bi-exclamation-circle-fill"
              viewBox="0 0 16 16"
              style={{ color: "red", marginLeft: 30 }}
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
            </svg>
          </li>
          <li className="nav-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              fill="currentColor"
              className="bi bi-grid-3x3-gap-fill"
              viewBox="0 0 16 16"
              style={{ marginLeft: 40 }}
            >
              <path d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2z" />
            </svg>
          </li>
          <li className="nav-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              fill="currentColor"
              className="bi bi-bell-fill"
              viewBox="0 0 16 16"
              style={{ marginLeft: 10 }}
            >
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
            </svg>
            <span
              className="badge bg-danger"
              style={{
                height: "auto",
                borderRadius: 8,
                textAlign: "center",
                fontSize: 10,
                position: "absolute",
                marginLeft: "-7px",
              }}
            >
              9
            </span>
          </li>
          <li className="nav-item">
            <img
              className="avatar"
              style={{ marginLeft: 400,height:20,width:20}}
              src={logo}
            />
          </li>
          <li className="nav-item">
            <select
              className="form-control"
              style={{ border: "none", marginLeft: 1 }}
            >
              <option defaultValue>Dr. Raquel</option>
              <option value={1}>One</option>
              <option value={2}>Two</option>
              <option value={3}>Three</option>
            </select>
          </li>
        </nav>
      </>
    </React.Fragment>
  );
};

export default Header;
