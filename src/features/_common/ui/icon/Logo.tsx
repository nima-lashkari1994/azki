import React from 'react';
import {SVGIcon} from "./types";

const Logo:SVGIcon = (props) => {
    return (
        <svg {...props} width="17px" height="17px" viewBox="0 0 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <title>logo</title>
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Group-6" transform="translate(-1009.000000, -29.000000)" stroke="#25B79B" strokeWidth="2">
                    <g id="logo" transform="translate(1009.000000, 29.000000)">
                        <rect id="Rectangle" x="1" y="1" width="15" height="15" rx="2"></rect>
                        <line x1="5" y1="6" x2="5" y2="10.4147299" id="Path-2" strokeLinecap="round"></line>
                    </g>
                </g>
            </g>
        </svg>
    );
};

export default Logo;