import React, {useEffect, useMemo, useState} from 'react';
import * as Styled from './styles';
import {SelectField} from "@common/ui/field";
import thirdPartyAPI from "@features/thirdParty/_common/api";
import {VehicleType} from "@features/thirdParty/_common/types";
import {useField} from "formik";

const VehicleForm = () => {

    const [{value:selectedVehicleType}] = useField("vehicleType");

    const [vehicleTypes, setVehicleTypes] = useState<VehicleType[]>();

    async function getVehicleTypes() {
        const {data} = await thirdPartyAPI.getVehicleTypes();
        setVehicleTypes(data);
    }

    useEffect(() => {
        getVehicleTypes();
    }, []);

    const vehicleModels = vehicleTypes?.filter(vehicleType => vehicleType.title == selectedVehicleType)?.[0]?.usages;
    return (
        <Styled.Wrapper>
            <SelectField name={"vehicleType"} placeholder={"نوع خودرو"}>
                {vehicleTypes?.map(vehicleType => (
                    <option key={vehicleType.id} value={vehicleType.title}>{vehicleType.title}</option>
                ))}
            </SelectField>
            <SelectField name={"vehicleModel"} placeholder={"مدل خودرو"}>
                {vehicleModels?.map(vehicleModel => (
                    <option key={vehicleModel.id} value={vehicleModel.title}>{vehicleModel.title}</option>
                ))}
            </SelectField>
        </Styled.Wrapper>
    );
};

export default VehicleForm;