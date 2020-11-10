import React from "react";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Header() {
  return (
    <>
      <nav className="navbar navbar-dark bg-warning bg-gradient">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <LibraryBooksIcon />
            &nbsp; Nancy's Notes
          </a>
        </div>
      </nav>
    </>
  );
}

export default Header;
