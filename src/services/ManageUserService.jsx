import { BaseServices } from "./BaseServices";

export class ManageUserService extends BaseServices{
    constructor(){
        super();
    }
    login = (userInfo)=>{ //{password,email}
        return this.post('/api/QuanLyNguoiDung/DangNhap', userInfo)
    };
    getAccountInfo=()=>{
        return this.post('api/QuanLyNguoiDung/ThongTinTaiKhoan')
    };
   
}
export const manageUserService = new ManageUserService();
