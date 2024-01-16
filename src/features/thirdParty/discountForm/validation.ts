import * as Yup from "yup";

export default Yup.object({
    thirdPartyDiscount: Yup.string().required('درصد تخفیف ثالث را انتخاب کنید.'),
    driverDiscount: Yup.string().required('درصد تخفیف حوادث راننده را انتخاب کنید.'),
});