import React from 'react';
import {ErrorMessage, Field, useFormikContext} from "formik";

const VehicleForm = () => {

    const formik = useFormikContext();

    return (
        <div>
            <h2>نوع و مدل خودروی خود را انتخاب کنید.</h2>
            <div>
                <label htmlFor="s1">s1:</label>
                <Field type="text" id="s1" name="s1"/>
                <ErrorMessage name="s1" component="div"/>
            </div>
        </div>
    );
};

export default VehicleForm;