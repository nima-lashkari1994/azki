import React from 'react';
import * as Styled from './styles';

type IconButtonProps = {
    icon:React.ReactNode,
    text:string | React.ReactNode,
    onClick:()=>void
}
const IconButton = ({icon,text,onClick,...props}:IconButtonProps &React.ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <Styled.Wrapper onClick={onClick} {...props}>
            <div className={"icon-button__icon"}>{icon}</div>
            <div>{text}</div>
        </Styled.Wrapper>
    );
};

export default IconButton;