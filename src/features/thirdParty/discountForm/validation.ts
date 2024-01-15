import * as Yup from "yup";

export default Yup.object({
    s3: Yup.string().required('s3 is required'),
});