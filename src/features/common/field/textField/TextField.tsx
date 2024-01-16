import React from 'react';
import * as Styled from './styles';
import {ErrorMessage, useField} from "formik";
import Typography from "@common/ui/typography";
import FieldWrapper from "@common/field/fieldWrapper";

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
        <Styled.Wrapper>
            <FieldWrapper {...meta} name={name}>
                <input onChange={handleChange} className={"field__input"} {...props} type={type} {...inputProps}
                       placeholder={placeholder}/>
            </FieldWrapper>
        </Styled.Wrapper>
    );
};

export default TextField;