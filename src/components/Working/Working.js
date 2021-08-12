import {Action, Email, Best, Workflow, Demand, Courteous, Free, Slide} from "../index";
import "./Working.css";

export function Working() {
    return(
        <div className="working">
            <Action />
            <Email />
            <Best />
            <Workflow />
            <Demand />
            <Courteous />
            <Slide />
            <Free />
        </div>
    );
}