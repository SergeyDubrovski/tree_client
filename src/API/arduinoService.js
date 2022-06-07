import axios from "axios";

const instance = axios.create({
    baseURL: 'http://91.215.176.34:7003/tree/' 
})

export const switchRelay = async (relay) => {
    try {
        
        instance.post ('relay', relay)
    } catch (error) {
        alert(error)
    }
    
}