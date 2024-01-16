import * as Yup from "yup";
import {phoneNumberRegex} from "@common/utils/regex";
import {toEnglish} from "@common/utils/faToEn";

export default Yup.object({
    firstName: Yup.string().required('نام الزامی است.'),
    lastName: Yup.string().required('نام خانوادگی الزامی است.'),
    phoneNumber: Yup.string().required('شماره موبایل الزامی است.').transform(value => toEnglish(value)).matches(phoneNumberRegex, "شماره وارد شده صحیح نمیباشد."),
    password: Yup.string().required('رمز عبور الزامی است.').test("length", 'رمز عبور حداقل ۴ حرف و حداکثر ۱۰ حرف', value => value.length <= 10 && value?.length >= 4).test("format","حداقل یک حرف بزرگ و یک حرف کوچک",value => value?.search(/[a-z]/) !=-1 && value?.search(/[A-Z]/) !=-1),
})