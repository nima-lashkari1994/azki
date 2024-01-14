import React from 'react';
import {Variant} from "@common/ui/typography/types";
import * as Styled from './styles';

type TypographyProps = {
    children:React.ReactNode,
    variant?:Variant,
    as?: keyof HTMLElementTagNameMap
}

const variantMapping = {
    heading1:'h1',
    heading2:'h2',
} as Record<string,string>

const Typography = ({children,variant="bodyMedium",as}:TypographyProps) => {

    const element = as || variantMapping[variant] || "p"
    return (
        <Styled.Typography as={element} $variant={variant}>
            {children}
        </Styled.Typography>
    );
};

export default Typography;