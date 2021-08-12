import "./Signup.css";

export function Signup() {
    return (
        <div className="sign-up">
            <div className="sign-up-input">
                <input type="email" placeholder="Enter your email"/>
                <button>Sign up</button>
            </div>
            <p>
                Create your free account. No credit card required.    
            </p> 
        </div>
    );
}