import * as Yup from "yup";

export default Yup.object({
    vehicleType: Yup.string().required('نوع خودرو را انتخاب کنید.'),
    vehicleModel: Yup.string().required('مدل خودرو را انتخاب کنید.'),
})