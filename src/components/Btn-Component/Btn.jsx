import { NavLink } from "react-router-dom";


export default function btn(props) {
    return (
        <>
            <div className={`text-xl text-awesome text-center bg-white w-42 rounded-full mx-auto ${props.styleClass === 'home__linkBx' ? "mt-0 mb-5" : "mt-12 mb-0 font-bold"}`}>
                <NavLink to={props.goTo} className="block p-2.5">{props.content}</NavLink>
            </div>
        </>
    );
}