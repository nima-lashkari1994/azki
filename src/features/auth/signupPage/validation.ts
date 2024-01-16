import * as Yup from "yup";

export default Yup.object({
    firstName: Yup.string().required('نام الزامی است.'),
    lastName: Yup.string().required('نام خانوادگی الزامی است.'),
    phoneNumber: Yup.string().required('شماره موبایل الزامی است.'),
    password: Yup.string().required('رمز عبور الزامی است.'),
})