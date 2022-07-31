import { GROUPID } from "../util/settings/config";
import { BaseServices } from "./BaseServices";

export class ManageCinemaService extends BaseServices{
    constructor(){
        super();
    }
    getCinemaList = ()=>{
        return this.get(`/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUPID}`)
    };
    
}
export const manageCinemaService = new ManageCinemaService();
