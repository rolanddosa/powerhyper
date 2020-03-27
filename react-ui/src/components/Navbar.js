import React from "react";
import Dropdown from "../node_modules/react-bootstrap/Dropdown";

function Navbar() {
    {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
                <a className="navbar-brand" href="#">FWE</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/ambition">Ambition</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/timeline">Timeline</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/energy-economics">Energy Economics</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Live Production</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">New Ideas</a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="/energy-attribute-certificates">Energy Attribute
                                    Certificates</a>
                                <a className="dropdown-item" href="/">Energy Demand
                                    Prediction - Machine Learning</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;