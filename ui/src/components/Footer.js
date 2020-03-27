import React from "react";
import './Footer.css';
import InstagramIcon from '../images/instagram_icon.png';

function Footer() {
    return (
        <footer id={"footerMain"} >
            <div className="container text-center text-md-left">
                <div className="row text-center text-md-left mt-3 pb-3">
                    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                        <p>
                            <a className="mb-4 font-weight-bold WhiteFont"> About us </a>
                        </p>
                        <p className={'WhiteFont'}> PowerHyper covers initiatives aiding the transition to
                            renewable energy. It is a platform that evaluates all applicable topics and
                            facilitates relevant actions.
                        </p>
                    </div>
                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h6 className="mb-4 font-weight-bold WhiteFont">Useful links</h6>
                        <p>
                            <a href="" className="customHref WhiteFont">Your Account</a>
                        </p>
                        <p>
                            <a href="" className="customHref WhiteFont">Help</a>
                        </p>
                    </div>
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h6 className="mb-4 font-weight-bold WhiteFont">Contact</h6>
                        <p className={'WhiteFont'}>
                            <i className="fas fa-envelope mr-3"></i>✉ info@powerhyper.com</p>
                        <p/>
                    </div>
                </div>
                <div className="text-center">
                    <a href="https://www.instagram.com/_powerhyper_/" target="_blank"><img
                        src={InstagramIcon} height={32} width={32}/></a>
                </div>
                <hr className={'WhiteBorder'}/>
                <div className="row d-flex align-items-center">
                    <div className="col-md-7 col-lg-8">
                        <p className="text-center text-md-left WhiteFont">© {(new Date().getFullYear())}:
                            <strong> Power Hyper</strong>
                        </p>
                    </div>
                    <div className="col-md-5 col-lg-4 ml-lg-0">
                        <div className="text-center text-md-right">
                            <ul className="list-unstyled list-inline">
                                <li className="list-inline-item">
                                    <a className="btn-floating btn-sm rgba-white-slight mx-1">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="btn-floating btn-sm rgba-white-slight mx-1">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="btn-floating btn-sm rgba-white-slight mx-1">
                                        <i className="fab fa-google-plus-g"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="btn-floating btn-sm rgba-white-slight mx-1">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div align="center">
                <a href="#" className="customHref WhiteFont"><span className="label label-info">Privacy</span>
                </a>
                <a className={'WhiteFont ThinFont'}> | </a>
                <a className="customHref WhiteFont">Disclaimer</a>
            </div>
        </footer>

    )
}

export default Footer;
