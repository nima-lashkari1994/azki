import React, {useEffect, useState} from 'react';
import {SelectField} from "@common/ui/field";
import thirdPartyAPI from "@features/thirdParty/_common/api";
import {Company} from "@features/thirdParty/_common/types";

const PrevInsuranceForm = () => {

    const [companies,setCompanies] = useState<Company[]>()

    async function getCompanies(){
        const {data} = await thirdPartyAPI.getThirdCompanies()
        setCompanies(data);
    }

    useEffect(() => {
        getCompanies();
    }, []);

    return (
        <div>
           <SelectField name={"prevInsuranceCompany"} placeholder={"شرکت بیمه‌گر قبلی"}>
               {companies?.map(company => (
                   <option key={company.id} value={company.title}>{company.title}</option>
               ))}
           </SelectField>
        </div>
    )
};

export default PrevInsuranceForm;