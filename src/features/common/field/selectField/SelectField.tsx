import React from 'react';
import * as Styled from './styles';
import {useField} from "formik";
import FieldWrapper from "@common/field/fieldWrapper";
import ArrowIcon from "@common/ui/icon/ArrowIcon";
import cn from 'classnames';

type SelectFieldProps = {
    name:string,
} & React.HTMLProps<HTMLSelectElement>;

const SelectField = ({name,placeholder,...props}:SelectFieldProps) => {

    const [inputProps, meta] = useField(name);

    return (
        <Styled.Wrapper className={cn({empty:!inputProps.value})}>
            <FieldWrapper name={name} {...meta}>
                <ArrowIcon className={"select-field__arrow"}/>
                <select {...inputProps} {...props} className={"field__input"}>
                    <option value="" disabled hidden>{placeholder}</option>
                    {props.children}
                </select>
            </FieldWrapper>
        </Styled.Wrapper>
    );
};

export default SelectField;