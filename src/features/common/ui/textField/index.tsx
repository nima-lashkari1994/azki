import React from 'react';
import * as Styled from './styles';
import {ErrorMessage, useField} from "formik";
import Typography from "@common/ui/typography";

type TextFieldProps = {
    name: string,
    placeholder: string,
    regex?: RegExp
} & React.HTMLProps<HTMLInputElement>;
const TextField = ({
                       name,
                       placeholder,
                       type = "text",
                       regex,
                       ...props
                   }: TextFieldProps) => {

    const [{onChange, ...inputProps}, meta] = useField(name);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (regex && e.target.value && !regex.test(e.target.value))
            e.preventDefault()
        else
            onChange(e)
    }

    return (
        <Styled.Wrapper $isError={!!meta.error && meta.touched}>
            <input onChange={handleChange} className={"text-field__input"} {...props} type={type} {...inputProps}
                   placeholder={placeholder}/>
            <ErrorMessage name={name} component="div"
                          render={errorMessage => <Typography className={"text-field__error"}
                                                              variant={"bodySmall"}>{errorMessage}</Typography>}/>
        </Styled.Wrapper>

    );
};

export default TextField;