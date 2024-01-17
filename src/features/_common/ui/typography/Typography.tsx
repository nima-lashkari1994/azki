import React from 'react';
import {Variant} from "@common/ui/typography/types";
import * as Styled from './styles';

type TypographyProps = {
    children:React.ReactNode,
    variant?:Variant,
    as?: keyof HTMLElementTagNameMap,
    bold?:boolean,
    className?:string
}

const variantMapping = {
    heading1:'h1',
    heading2:'h2',
} as Record<string,string>

const Typography = ({children,variant="bodyMedium",as,className,bold=false}:TypographyProps) => {

    const element = as || variantMapping[variant] || "p"
    return (
        <Styled.Wrapper as={element} $variant={variant} $bold={bold} className={className}>
            {children}
        </Styled.Wrapper>
    );
};

export default Typography;