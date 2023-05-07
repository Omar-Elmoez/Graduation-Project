import { NavLink } from "react-router-dom";
import './btn.css';

export default function btn(props) {
    return (
        <>
            <div className={props.styleClass}>
                <NavLink to={props.goTo}>{props.content}</NavLink>
            </div>
        </>
    );
}