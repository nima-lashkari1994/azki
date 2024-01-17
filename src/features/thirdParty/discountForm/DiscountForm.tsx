import React, {useEffect, useState} from 'react';
import {Discount} from "@features/thirdParty/_common/types";
import thirdPartyAPI from "@features/thirdParty/_common/api/ThirdPartyAPI";
import {SelectField} from "@common/ui/field";

const DiscountForm = () => {
    const [discounts,setDiscounts] = useState<Discount[]>()

    async function getDiscounts(){
        const {data} = await thirdPartyAPI.getThirdDiscounts()
        setDiscounts(data);
    }

    useEffect(() => {
        getDiscounts();
    }, []);

    return (
        <div>
            <SelectField name={"thirdPartyDiscount"} placeholder={"درصد تخفیف ثالث"}>
                {discounts?.map(discount => (
                    <option key={discount.id} value={discount.title}>{discount.title}</option>
                ))}
            </SelectField>
            <SelectField name={"driverDiscount"} placeholder={"درصد تخفیف حوادث راننده"}>
                {discounts?.map(discount => (
                    <option key={discount.id} value={discount.title}>{discount.title}</option>
                ))}
            </SelectField>
        </div>
    )
};

export default DiscountForm;