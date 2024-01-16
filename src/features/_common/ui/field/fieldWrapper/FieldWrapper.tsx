import React from 'react';
import * as Styled from './styles';
import Typography from "@common/ui/typography";
import {ErrorMessage} from "formik";

type FieldWrapperProps = {
    name:string,
    children:React.ReactNode,
    error?:string,
    touched?:boolean
}

const FieldWrapper = ({children,name,touched,error}:FieldWrapperProps) => {
    return (
        <Styled.Wrapper $isError={!!touched && !!error}>
            {children}
            <ErrorMessage name={name} component="div"
                          render={errorMessage => <Typography className={"field__error"}
                                                              variant={"bodySmall"}>{errorMessage}</Typography>}/>
        </Styled.Wrapper>
    );
};

export default FieldWrapper;