import React from 'react';
import {PageLayout} from "@common/ui/layout";
import {Form, Formik} from "formik";
import validationSchema from './validation';
import TextField from "@common/ui/textField";
import * as Styled from './styles';
import {persianAlphabetRegex} from "@common/utils/regex";
import Button from "@common/ui/button";

type FormValues = {
    firstName: string,
    lastName: string,
    phoneNumber: string,
    password: string
}

const SignupPage = () => {
    function handleSubmit(values: FormValues, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) {
        console.log(values)
    }

    return (
        <Styled.Wrapper as={PageLayout} title={"ثبت نام"}>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    phoneNumber: '',
                    password: ''
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Form className={"signup-page__form"}>
                    <div className={"signup-page__form__row"}>
                        <TextField regex={persianAlphabetRegex} name={"firstName"} placeholder={"نام"}/>
                        <TextField regex={persianAlphabetRegex} name={"lastName"} placeholder={"نام خانوادگی"}/>
                    </div>
                    <div className={"signup-page__form__row"}>
                        <TextField name={"phoneNumber"} type={"tel"} placeholder={"شماره موبایل"}/>
                    </div>
                    <div className={"signup-page__form__row"}>
                        <TextField name={"password"} type={"password"} placeholder={"رمز عبور"}/>
                    </div>
                    <div className={"signup-page__form__action"}>
                        <Button type={"submit"}>ثبت نام</Button>
                    </div>
                </Form>
            </Formik>
        </Styled.Wrapper>
    );
};

export default SignupPage;