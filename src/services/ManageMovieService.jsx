import { BaseServices } from "./BaseServices";

export class ManageMovieService extends BaseServices{
    constructor(){
        super();
    }
    getBannerList = ()=>{
        return this.get('/api/QuanLyPhim/LayDanhSachBanner')
    };
    getMovieList =(groupId)=>{
        return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${groupId}`)
    };
}
export const manageMovieService = new ManageMovieService();
