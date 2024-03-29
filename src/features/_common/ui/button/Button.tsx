import React from 'react';
import * as Styled from './styles';
import {ButtonVariants} from "@common/ui/button/types";
import Typography from "@common/ui/typography";

type ButtonProps = {
    variant? : ButtonVariants
} & React.HTMLProps<HTMLButtonElement>
const Button = ({children,variant="contained",...props}:ButtonProps) => {
    return (
        <Styled.Wrapper className={variant} {...props}>
            {typeof children === 'function' ? children : <Typography variant={"bodyMedium"}>{children}</Typography>}
        </Styled.Wrapper>
    );
};

export default Button;