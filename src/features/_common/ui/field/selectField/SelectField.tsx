import React from 'react';
import * as Styled from './styles';
import {useField} from "formik";
import FieldWrapper from "@features/_common/ui/field/fieldWrapper";
import ArrowIcon from "@features/_common/ui/icon/ArrowIcon";
import cn from 'classnames';

type SelectFieldProps = {
    name:string,
    placeholder:string,
} & React.HTMLProps<HTMLSelectElement>;

const SelectField = ({name,placeholder,...props}:SelectFieldProps) => {

    const [inputProps, meta] = useField(name);

    return (
        <Styled.Wrapper className={cn({empty:!inputProps.value})}>
            <FieldWrapper name={name} {...meta}>
                <ArrowIcon className={"select-field__arrow"}/>
                <select {...inputProps} {...props} className={"field__input"}>
                    <option value="" selected disabled hidden>{placeholder}</option>
                    {props.children}
                </select>
            </FieldWrapper>
        </Styled.Wrapper>
    );
};

export default SelectField;