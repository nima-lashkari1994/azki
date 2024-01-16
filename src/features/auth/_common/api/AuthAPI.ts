import API from "@common/api";
import {User} from "@features/auth/_common/types";
import {AxiosResponse} from "axios";

class AuthAPI extends API{

    signup(user:User):Promise<AxiosResponse<User>>{
        return new Promise(resolve => {
            setTimeout(() => {
                resolve({data:user} as AxiosResponse<User>);
            }, 1000);
        })
    }
}

export default new AuthAPI();