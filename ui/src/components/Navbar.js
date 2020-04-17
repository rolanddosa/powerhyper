import React from "react";

function Navbar() {
    {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
                <a className="navbar-brand" href="#">powerhyper</a>
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
                            <a className="nav-link" href="/energyEconomics">Economics</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/liveTracker">

                                <span style={{color:"red"}}>* </span>
                                <span>Live Tracker</span>
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="renewableSourcesDropdown" role="button"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Renewable Sources</a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="/energyAttributeCertificates">Fusion</a>
                                <a className="dropdown-item" href="/machineLearning">Solar</a>
                                <a className="dropdown-item" href="/machineLearning">Wind</a>
                                <a className="dropdown-item" href="/machineLearning">Wave</a>
                                <a className="dropdown-item" href="/machineLearning">Tidal</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Software</a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="/energyAttributeCertificates">Open Source Projects</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">New Ideas</a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="/energyAttributeCertificates">Energy Attribute
                                    Certificates</a>
                                <a className="dropdown-item" href="/machineLearning">Energy Demand
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