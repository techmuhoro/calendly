import Vector from "./imgs/vector.svg";
import "./Footer.css";

export function Footer() {
    return(
        <footer className="footer">
            <div className="footer-wrapper">
                <div className="footer-grid">
                    <div className="logo">
                        <div>
                            <p>
                                <span>Easy</span>
                                <span>ahead</span>
                            </p>
                            <img src={Vector} alt="" />
                        </div>
                    </div>
                    <div className="about">
                        <p className="heading">About</p>
                        <ul>
                            <li>
                                <a href="##">About calendly</a>
                            </li>
                            <li>
                                <a href="##">Conatct sales</a>
                            </li>
                            <li>
                                <a href="##">Careers</a>
                            </li>
                            <li>
                                <a href="##">Security</a>
                            </li>
                            <li>
                                <a href="##">Privacy</a>
                            </li>
                            <li>
                                <a href="##">Terms</a>
                            </li>
                        </ul>
                    </div>
                    <div className="support">
                        <p className="heading">Support</p>
                        <ul>
                            <li>
                                <a href="##">Help center</a>
                            </li>
                            <li>
                                <a href="##">Video tutorials</a>
                            </li>
                            <li>
                                <a href="##">Cookie settings</a>
                            </li>
                        </ul>
                    </div>
                    <div className="developers">
                        <p className="heading">Developers</p>
                        <ul>
                            <li>
                                <a href="##">Developer tools</a>
                            </li>
                        </ul>
                    </div>
                    <div className="solutions">
                        <p className="heading">Solutions</p>
                        <ul>
                            <li>
                                <a href="##">Customer sucess</a>
                            </li>
                            <li>
                                <a href="##">Sales</a>
                            </li>
                            <li>
                                <a href="##">Recruiting</a>
                            </li>
                            <li>
                                <a href="##">Education</a>
                            </li>
                            <li>
                                <a href="##">Individuals</a>
                            </li>
                        </ul>
                    </div>
                    <div className="features">
                        <p className="heading">Popular features</p>
                        <ul>
                            <li>
                                <a href="##">Embedded calendly</a>
                            </li>
                            <li>
                                <a href="##">Availabilty</a>
                            </li>
                            <li>
                                <a href="##">Sending Notifications</a>
                            </li>
                            <li>
                                <a href="##">Using calendly mobile</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="social">
                    <div className="social-wrapper">
                        <div className="social-icons">
                            <span>
                                <i className="fab fa-twitter"></i>
                            </span>
                            <span>
                                <i className="fab fa-facebook-f"></i>
                            </span>
                            <span>
                                <i className="fab fa-instagram"></i>
                            </span>
                            <span>
                                <i className="fab fa-linkedin"></i>
                            </span>
                        </div>
                        <div className="language">
                            <select name="" id="">
                                <option value="">English</option>
                                <option value="">Francais</option>
                                <option value="">Espanol</option>
                                <option value="">Deutsche</option>
                                <option value="">Portugues</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="footer-end">
                    <div className="end-text">
                        <p>Copyright Calendly 2021</p>
                        <p>We take the work out of connecting with others so you can accomplish more</p>
                        <p>Privacy / Terms</p>
                    </div>
                    <div className="end-border"></div>
                </div>
            </div>
        </footer>
    );
}