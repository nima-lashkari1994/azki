import React from 'react';
import {PageLayout} from "@common/ui/layout";
import {Form, Formik} from "formik";
import validationSchema from './validation';
import * as Styled from './styles';
import {englishCharactersRegex, persianAlphabetRegex} from "@common/utils/regex";
import Button from "@common/ui/button";
import {TextField} from "@common/ui/field";
import authAPI from "@features/auth/_common/api";
import {User} from "@features/auth/_common/types";
import {useAuth} from "@features/auth";
import {useNavigate} from "react-router";

const SignupPage = () => {

    const navigate = useNavigate()
    const {onLogin} = useAuth();
    async function handleSubmit(values: User, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) {
        setSubmitting(true);
        const {data: user} = await authAPI.signup(values);
        onLogin(user);
        navigate("/")
    }

    return (
        <Styled.Wrapper as={PageLayout} title={"ثبت نام"}>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    phoneNumber: '',
                    password: '',
                    test: '',
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {(formik) => (
                    <Form className={"signup-page__form"}>
                        <div className={"signup-page__form__row"}>
                            <TextField regex={persianAlphabetRegex} name={"firstName"} placeholder={"نام"}/>
                            <TextField regex={persianAlphabetRegex} name={"lastName"} placeholder={"نام خانوادگی"}/>
                        </div>
                        <div className={"signup-page__form__row"}>
                            <TextField name={"phoneNumber"} type={"tel"} inputMode="numeric" placeholder={"شماره موبایل"}/>
                        </div>
                        <div className={"signup-page__form__row"}>
                            <TextField name={"password"} regex={englishCharactersRegex} type={"password"} placeholder={"رمز عبور"}/>
                        </div>
                        <div className={"signup-page__form__action"}>
                            <Button type={"submit"} disabled={formik.isSubmitting}>ثبت نام</Button>
                        </div>
                    </Form>
                )}
            </Formik>
        </Styled.Wrapper>
    );
};

export default SignupPage;