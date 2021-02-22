import React, { useState } from 'react'
import { MenuItems } from './MenuItems'
import { Link } from 'react-router-dom'
import './Dropdown.css';

function Dropdown() {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    return (
    <>
        <ul onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
            {MenuItems.map((porfolio, index) => {
                return (
                    <li key={porfolio}>
                        <Link 
                            className={porfolio.cName} 
                            to={porfolio.path} onClick={() =>
                            setClick(false)}
                        >
                            {porfolio.title}
                        </Link>
                    </li>
                )
            })}
        </ul>
    </>
    );
}

export default Dropdown;