import React, {useState} from 'react';
import {PageLayout} from "@common/ui/layout";
import * as Styled from './styles';
import {Form, FormikProvider, FormikTouched, setNestedObjectValues, useFormik} from "formik";
import {VehicleForm, VehicleFormValidation} from "@features/thirdParty/vehicleForm";
import {PrevInsuranceForm, PrevInsuranceFormValidation} from "@features/thirdParty/prevInsuranceForm";
import {DiscountForm, discountFormValidation} from "@features/thirdParty/discountForm";
import Typography from "@common/ui/typography";
import Button from "@common/ui/button";
import {useNavigate} from "react-router";
import Modal from "@common/ui/modal/Modal";

const steps = [
    {
        id: 1,
        form: <VehicleForm/>,
        validationSchema: VehicleFormValidation,
        description: 'نوع و مدل خودروی خود را انتخاب کنید.'
    },
    {
        id: 2,
        form: <PrevInsuranceForm/>,
        validationSchema: PrevInsuranceFormValidation,
        description: 'شرکت بیمه‌گر قبلی خود را در این بخش وارد کنید.'
    },
    {
        id: 3,
        form: <DiscountForm/>,
        validationSchema: discountFormValidation,
        description: 'درصد تخفیف بیمه شخص ثالث و حوادث راننده را وارد کنید.'
    }

]

const ThirdParty = () => {

    const [isOpen, setOpen] = useState(false);
    const navigate = useNavigate();
    const [stepIndex, setStepIndex] = useState(0);

    const isLastStep = stepIndex === steps.length - 1;
    const isFirstStep = stepIndex === 0;

    const handleNextStep = () => setStepIndex(stepIndex + 1);
    const handlePrevStep = () => {
        if (isFirstStep)
            navigate("/");
        else
            setStepIndex(stepIndex - 1)
    };

    const handleSubmit = (values: {
        vehicleType: string;
        vehicleModel: string;
        prevInsuranceCompany: string;
        thirdPartyDiscount: string,
        driverDiscount: string
    }) => {
        if (!isLastStep){
            formik.setTouched(setNestedObjectValues<FormikTouched<typeof values>>(values, false))
            handleNextStep()
        }
        else {
            setOpen(true);
        }

    };

    const currentStep = steps[stepIndex];

    const formik = useFormik({
        initialValues: {
            vehicleType: '',
            vehicleModel: '',
            prevInsuranceCompany: '',
            thirdPartyDiscount: '',
            driverDiscount: ''
        },
        validationSchema: currentStep.validationSchema,
        onSubmit: handleSubmit,
    })

    return (
        <Styled.Wrapper as={PageLayout} title={"بیمه شخص ثالث"}>
            <FormikProvider value={formik}>
                <Form>
                    <Typography className={"description"}
                                variant={"bodyLarge"}>{currentStep.description}</Typography>
                    <div key={currentStep.id}>
                        {currentStep.form}
                    </div>
                    <div className={"actions"}>
                        <Button variant={"outlined"} type="button" onClick={handlePrevStep}>
                            {isFirstStep ? 'بازگشت' : "مرحله قبل"}
                        </Button>

                        <Button variant={isLastStep ? "contained" : "outlined"} type="submit"
                                disabled={!formik.isValid}>
                            {isLastStep ? "استعلام قیمت" : "مرحله بعد"}
                        </Button>
                    </div>
                </Form>
            </FormikProvider>
            <Modal isOpen={isOpen} handleClose={() => setOpen(false)}>
                <div>
                    <div>نوع خودرو : {formik.values.vehicleType}</div>
                    <div>مدل خودرو : {formik.values.vehicleModel}</div>
                    <div>شرکت بیمه‌گر قبلی : {formik.values.prevInsuranceCompany}</div>
                    <div>درصد تخفیف ثالث : {formik.values.thirdPartyDiscount}</div>
                    <div>درصد تخفیف حوادث راننده : {formik.values.driverDiscount}</div>
                </div>
            </Modal>
        </Styled.Wrapper>
    );
};


export default ThirdParty;