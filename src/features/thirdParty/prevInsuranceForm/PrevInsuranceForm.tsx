import React from 'react';
import {ErrorMessage, Field} from "formik";

const PrevInsuranceForm = () => {
    return (
        <div>
            <h2>s2</h2>
            <div>
                <label htmlFor="s2">s2</label>
                <Field type="text" id="s2" name="s2"/>
                <ErrorMessage name="s2" component="div"/>
            </div>
        </div>
    )
};

export default PrevInsuranceForm;