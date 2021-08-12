import {Header, Hero, Scheduling, Working, Footer} from "../";
import "./Home.css"

export const Home = () => {
    return (
        <div className="container">
            <div className="landing-page">
                <Header />
                <Hero />
            </div>
            <Scheduling />
            <Working />
            <Footer />
        </div>
    )
};
