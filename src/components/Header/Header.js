import "./Header.css";
import Logo from './logo.svg';
import { useState, useEffect } from "react"

export const Header = () => {
    const mobileWidth = 1200;
    const[showProduct, setShowProduct] = useState(false);
    const[showResources, setShowResources] = useState(false);
    const [isMobile, setIsMobile] = useState(determineIsMobile());
    const [isBarsIcon, setIsBarsIcon] = useState(true)
    const [showMobileMenu, setShowMobileMenu] = useState(false)

    function determineIsMobile() {
        return window.innerWidth <= mobileWidth ? true : false
    }

    useEffect(() => {
        window.addEventListener("resize", function() {
            if(window.innerWidth <= mobileWidth) {
                !isMobile && setIsMobile(true)
            }else {
                isMobile && setIsMobile(false)
            }
        }, [isMobile])

    })

    return (
        <div className="header">
            <div className="header-wrapper">
                <div className={isMobile && showMobileMenu ? "logo mobile" : "logo"}>
                    <div>
                        <img width="40" src={Logo} alt="logo" />
                        <p>Calendly</p>
                    </div>
                </div>
                <div className={showMobileMenu ?  "navigation show-mobile" : "navigation"}>
                    <ul>
                        <li>
                            <span className="item">Individuals</span>
                        </li>
                        <li>
                            <span className="item">Teams</span>
                        </li>
                        <li>                            
                            <span className="item">Enterprise</span>
                        </li>
                        <li 
                            className="to-drop"
                            onMouseOver={()=> {
                                setShowProduct(true);
                            }}
                            onMouseOut={()=> {
                                setShowProduct(false);
                            }}                            
                        >
                            <div>
                                <span className="item">Product</span>
                                <span>
                                    <i className={showProduct ? "fas fa-chevron-down up" : "fas fa-chevron-down"}></i>
                                </span>
                            </div>
                            <div className={showProduct ? "drop-down show" : "drop-down"}>
                                <div className="product">
                                    <div className="row-one">
                                        <h1>Product</h1>
                                        <p>
                                            Get to know the leader in automated scheduling and see why millions connect using Calendly.
                                        </p>
                                    </div>
                                    <div className="row-two">
                                        <div className="features">
                                            <h3>Features</h3>
                                            <p>
                                                Flexible, intuitive features to match every scheduling need.
                                            </p>
                                        </div>
                                        <div className="integrations">
                                            <h3>Integrations</h3>
                                            <p>
                                                Seamless connections to your favorite calendars, tools, and apps.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row-three">
                                        <h3>Solutions</h3>
                                        <p>
                                            Explore how thought leaders in your industry use Calendly.
                                        </p>
                                        <div>
                                            <span>Sales</span>
                                            <span>Recruiting</span>
                                            <span>Customer success</span>
                                            <span>Education</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>                            
                            <span className="item">Pricing</span>
                        </li>
                        <li 
                            className="to-drop" 
                            onMouseOver={()=> {
                                setShowResources(true);
                            }}
                            onMouseOut={()=> {
                                setShowResources(false);
                            }}
                        >
                            <div>
                                <span className="item">Resources</span>
                                <span>
                                    <i className={showResources ? "fas fa-chevron-down up" : "fas fa-chevron-down"}></i>
                                </span> 
                            </div>
                            <div className={showResources ? "drop-down show" : "drop-down"}>
                                <div className="resources">
                                    <div className="row-one">
                                        <h1>Resources</h1>
                                        <p>
                                            More in-depth information about every corner of the Calendly scheduling ecosystem.
                                        </p>
                                    </div>
                                    <div className="row-two">
                                        <div>
                                            <h3>About</h3>
                                            <p>
                                                Learn about who we are.
                                            </p>
                                        </div>
                                        <div>
                                            <h3>Blog</h3>
                                            <p>
                                               Thoughts, news, and best practices.
                                            </p>
                                        </div>  
                                        <div>
                                            <h3>Help center</h3>
                                            <p>
                                                Explore how to use Calendly.
                                            </p>
                                        </div>                                       
                                    </div>
                                    <div className="row-three">
                                        <div>
                                            <h3>Developers</h3>
                                            <p>
                                                Explore how to use Calendly.
                                            </p>
                                        </div>
                                        <div>
                                            <h3>Work with us</h3>
                                        </div>                                       
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="right">
                    <div>
                        <a className="login" href="##">Log in</a>
                        <a className="sign-up" href="##">Sign up</a>
                        <a className={isMobile && showMobileMenu ? "menu-btn mobile" : "menu-btn"} href="##"
                            onClick={() => {
                                setIsBarsIcon(!isBarsIcon)
                                setShowMobileMenu(!showMobileMenu)
                            }}
                        >
                            <i className={isBarsIcon ? "fas fa-bars" : "fas fa-times"}></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
