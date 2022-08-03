import Axios from 'axios';
import { DOMAIN, TOKEN } from '../util/settings/config';

console.log('token',localStorage.getItem(TOKEN))
export class BaseServices{
    get = (url, model)  => {
        return Axios({
            method: 'GET',
            url: `${DOMAIN}/${url}` , 
            data: model,
            headers: {'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)}
        })
    };
    put = (url, model)  => {
        return Axios({
            method: 'PUT',
            url: `${DOMAIN}/${url}` , 
            data: model,
            headers: {'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)}
        })
    }
    post= (url, model)  => {
        return Axios({
            method: 'POST',
            url: `${DOMAIN}/${url}` , 
            data: model,
            headers: {'Authorization': "Bearer " + localStorage.getItem(TOKEN)}
        })
    }
    delete= (url, model)  => {
        return Axios({
            method: 'DELETE',
            url: `${DOMAIN}/${url}` , 
            data: model,
            headers: {'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)}
        })
    }
}