import { BaseServices } from "./BaseServices";

export class ManageSeatListService extends BaseServices{
    constructor(){
        super();
    }
    getSeatList = (id)=>{ 
        return this.get(`api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`);
    };
    bookTicket =(seatInfo)=>{
        return this.post(`api/QuanLyDatVe/DatVe`, seatInfo)
    }
   
}
export const manageSeatListService = new ManageSeatListService();
