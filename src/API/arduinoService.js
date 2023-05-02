import axios from "axios";

const instance = axios.create({
    baseURL: 'http://10.70.70.242:7003/tree/' 
})

export const switchRelay = async (relay) => {
    try {
        
        instance.post ('relay', relay)
    } catch (error) {
        alert(error)
    }
    
}