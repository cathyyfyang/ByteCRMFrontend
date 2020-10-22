import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import NameTag from '../NameTag';

import './DropDownDisplay.scss';



const DropDownDisplay = ({
    children,
    dropDownDisable,
    onClick,
}) => (
        <button className='dropDownDisplay' disabled = {dropDownDisable} onClick= {(event)=>{
            event.preventDefault();
            onClick();
        }}>
            <div className='dropDownDisplay__text'>
                {children}
            </div>
            <div className='dropDownDisplay__icon'>
                <FontAwesomeIcon icon={faCaretDown}/>
            </div>
        </button>
    )

export default DropDownDisplay;