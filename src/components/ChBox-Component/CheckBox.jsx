/* eslint-disable react/prop-types */
import React from 'react';
import './CheckBox.css';

export default function Checkbox(props) {

    const [isChecked, setIsChecked] = React.useState(false);

    function handleClick() {
        setIsChecked(prevState => !prevState);
    }

    return (
        <div className="rememberMeBox">
            <input type="checkbox" name="remember-me" value={isChecked ? 'yes' : 'No'} id="remember-me" className="rememberMeBox__input"  onClick={handleClick} />
            <label htmlFor="remember-me" className="rememberMeBox__label">{props.txt}</label>
        </div>
    );
}