import React from 'react';

type ButtonProps = {
    children:React.ReactNode
}
const Button = ({children}:ButtonProps) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default Button;