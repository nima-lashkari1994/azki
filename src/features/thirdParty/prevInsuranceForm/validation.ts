import * as Yup from "yup";

export default Yup.object({
    prevInsuranceCompany: Yup.string().required('الزامی است.'),
})