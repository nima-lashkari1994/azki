import React from 'react';
import {ErrorMessage, Field} from "formik";

const DiscountForm = () => {
    return (
        <div>
            <h2>s3</h2>
            <div>
                <label htmlFor="s3">s3:</label>
                <Field type="text" id="s3" name="s3"/>
                <ErrorMessage name="s3" component="div"/>
            </div>
        </div>

    )
};

export default DiscountForm;