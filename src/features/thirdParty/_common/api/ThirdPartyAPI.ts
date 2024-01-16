import API from "@common/api";
import {AxiosResponse} from "axios";
import {Company, Discount, VehicleType} from "@features/thirdParty/_common/types";

class ThirdPartyAPI extends API{
    getVehicleTypes():Promise<AxiosResponse<VehicleType[]>>{
        return this.fetch({
            url:'/product/vehicle/types'
        })
    }

    getThirdCompanies():Promise<AxiosResponse<Company[]>>{
        return this.fetch({
            url:'/product/third/companies'
        })
    }

    getThirdDiscounts():Promise<AxiosResponse<Discount[]>>{
        return this.fetch({
            url:'/product/third/third-discounts'
        })
    }
}

export default new ThirdPartyAPI();