import axios from 'axios'

export const commonAPI = async(httpRequest,url,reqbody,reqHeaders)=>{
    const reqConfig = {
        method:httpRequest,//get or post
        url,//localhost:3000/register
        data:reqbody,//username .email.password
        headers:reqHeaders? reqHeaders : { "content-Type": "application/json" } //images
    }
    
    
    //create axios instance
    return await axios(reqConfig).then((response)=>{
        return response
    })
    .catch((err)=>{
        return err
    })
}

