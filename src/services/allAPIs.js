import { commonAPI } from "./commonAPI"
import { baseUrl } from "./baseUrl"

//actuall Api call

//1 register API call - post - body
export const registerAPI = async(user)=>{
    return await commonAPI("post",`${baseUrl}/register`,user,"")

}

//2 login API call - post - body
export const loginAPI = async(user)=>{
    return await commonAPI("post",`${baseUrl}/login`,user,"")

}

//3 Add project Api call - body + header
export const addProjectAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("post",`${baseUrl}/project/add`,reqBody,reqHeader)

}