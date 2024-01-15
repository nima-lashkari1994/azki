import * as Yup from "yup";

export default Yup.object({
    s1: Yup.string().required('s1 is required'),
})