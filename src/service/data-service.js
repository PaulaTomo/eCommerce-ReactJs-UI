
import axios from "axios"
const baseURL = "http://localhost:8085/dresses_store";

export class DressService {
    findById(dressId) {
        const queryString = {
          params: {
            id: dressId,
          },
        };
    
        return axios.get(`${baseURL}/dresses/`, queryString);
    }
}

export class SizeService{
  findByDresses(dressId){
    return axios.get(`${baseURL}/size/dress/${dressId}`);
  }


}