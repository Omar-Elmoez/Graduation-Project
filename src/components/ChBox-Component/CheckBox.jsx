/* eslint-disable react/prop-types */
import React from 'react';



export default function Checkbox(props) {

    const [isChecked, setIsChecked] = React.useState(false);

    function handleClick() {
        setIsChecked(prevState => !prevState);
    }
    return (
        <div className="flex items-center gap-4">
            <input type="checkbox" name="remember-me" value={isChecked ? 'yes' : 'No'} id="remember-me" className={`appearance-none w-6 h-6 shadow-C3 rounded-md relative cursor-pointer ${isChecked && "before:content-['\\2714'] before:rounded-md before:absolute before:w-full before:h-full before:bg-orangePeel before:text-white before:text-lg before:flex before:justify-center before:items-center"}`}  onClick={handleClick} />
            <label htmlFor="remember-me" className="text-lg font-semibold font-Urbanist text-Zeus cursor-pointer">{props.txt}</label>
        </div>
    );
}