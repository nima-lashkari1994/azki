import React, {useState} from 'react';
import {PageLayout} from "@common/ui/layout";
import * as Styled from './styles';
import {Form, Formik} from "formik";
import {VehicleForm, VehicleFormValidation} from "@features/thirdParty/vehicleForm";
import {PrevInsuranceForm, PrevInsuranceFormValidation} from "@features/thirdParty/prevInsuranceForm";
import {DiscountForm, discountFormValidation} from "@features/thirdParty/discountForm";

const ThirdParty = () => {

    const [stepIndex, setStepIndex] = useState(0);

    const nextStep = () => setStepIndex(stepIndex + 1);
    const prevStep = () => setStepIndex(stepIndex - 1);

    const steps = [
        {
            form: <VehicleForm/>,
            validationSchema: VehicleFormValidation
        },
        {
            form: <PrevInsuranceForm/>,
            validationSchema: PrevInsuranceFormValidation
        },
        {
            form: <DiscountForm/>,
            validationSchema: discountFormValidation
        }

    ]

    interface FormValues {
        s1: string;
        s2: string;
        s3: string;
    }


    const handleSubmit = (values: FormValues, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
        if (stepIndex < steps.length - 1)
            nextStep();
        else {
            console.log('Submitted Values:', values);
            setSubmitting(false);
        }

    };

    const currentStep = steps[stepIndex];

    return (
        <Styled.Wrapper as={PageLayout} title={"بیمه شخص ثالث"}>
            <Formik
                initialValues={{
                    s1: '',
                    s2: '',
                    s3: '',
                }}
                validationSchema={currentStep.validationSchema}
                onSubmit={handleSubmit}
            >
                {(formik) => (
                    <Form>
                        {currentStep.form}
                        <div>
                            <button type="button" onClick={prevStep}>
                                Back
                            </button>

                            <button type="submit" disabled={!formik.isValid}>
                                Submit
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </Styled.Wrapper>
    );
};


export default ThirdParty;