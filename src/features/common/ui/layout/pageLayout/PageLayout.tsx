import React from 'react';
import * as Styled from './styles';
import Typography from "@common/ui/typography";

type PageProps = {
    title:string,
    children:React.ReactNode,
    className?:string
}
const PageLayout = ({title,children,className}:PageProps) => {
    return (
        <Styled.Wrapper className={className}>
            <Typography variant={"heading1"} className={"page-layout__title"}>{title}</Typography>
            <div className={"page-layout__body"}>
                {children}
            </div>
        </Styled.Wrapper>
    );
};

export default PageLayout;