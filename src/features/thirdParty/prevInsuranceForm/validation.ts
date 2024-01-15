import * as Yup from "yup";

export default Yup.object({
    s2: Yup.string().required('s2 is required'),
})