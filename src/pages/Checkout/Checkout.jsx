import React, { Fragment } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import style from "./Checkout.module.css";
import "./Checkout.css";
import { bookTicketAction, getSeatListAction } from "../../redux/actions/SeatListAction";
import Item from "antd/lib/list/Item";
import _, { divide } from "lodash";
import { BOOKING_SEAT } from "../../redux/types/types";
import { CheckOutlined, CloseOutlined, UserOutlined ,SmileOutlined,HomeOutlined} from '@ant-design/icons'

export default function Checkout(props) {
  const userLogin = useSelector((state) => state.LoginReducer.userInfo);
  const dispatch = useDispatch();
  const { seatList, movieInfo } = useSelector(
    (state) => state.SeatListReducer.auditorium
  );
  const bookingSeatList= useSelector(state => state.SeatListReducer.bookingSeatList)
  useEffect(() => {
    dispatch(getSeatListAction(props.match.params.id));
  }, []);
  console.log(seatList)
  const renderSeats = ()=>{
    return seatList?.map((seat,index)=>{
      let vipSeatClass = (seat.loaiGhe === 'Vip') ? 'vipSeat': '';
      let bookedSeatClass = (seat.daDat ===true) ? 'bookedSeat': '' ;
      let bookingSeatClass= '';
      bookingSeatList.map((item)=> {
        if(item.stt == seat.stt){
          bookingSeatClass= 'bookingSeat';
        }
      })
      return (
        <Fragment key={index}>
          <button onClick={()=>{dispatch({type: BOOKING_SEAT, payload: seat})}}
                  disabled={seat.daDat}  className={`seat ${vipSeatClass} ${bookedSeatClass} ${bookingSeatClass}`}>
            {seat.daDat? 'X': seat.stt}
          </button>
          {((index+1) %16 === 0) ? <br/>: ''}
        </Fragment>
      )
    })
  }
  return (
    <div className=" min-h-screen mt-5">
      <div className="grid grid-cols-12">
        <div className="col-span-9">
          <div className="flex flex-col items-center mt-5">
            <div className="bg-black " style={{ width: "80%", height: 15 }}></div>
            <div className={`${style["trapezoid"]} text-center`}>
              <h3 className="mt-3 text-black">Screen</h3>
            </div>
            <div>{renderSeats()}</div>
          </div>

          <div className="mt-5 flex justify-center">
            <table className=" divide-y divide-gray-200 w-2/3">
              <thead className="bg-gray-50 p-5">
                <tr>
                  <th>Available seat</th>
                  <th>Booking seat</th>
                  <th>VIP</th>
                  <th>Booked seat</th>
                  <th>Ghế mình đặt</th>
                  <th>Ghế khách đang đặt</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 ">
                <tr >
                  <td ><button className="seat text-center"> <CheckOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /> </button> </td>
                  <td ><button className="seat bookingSeat text-center"> <CheckOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /></button> </td>
                  <td ><button className="seat vipSeat text-center"><CheckOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /></button> </td>
                  <td ><button className="seat bookedSeat text-center"> X </button> </td>
                  <td ><button className="seat gheDaDuocDat text-center"> <CheckOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /> </button> </td>
                  <td ><button className="seat gheKhachDat text-center"> <CheckOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /> </button> </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-span-3">
          <h3 className="text-yellow-600 text-center text-4xl">
          {bookingSeatList.reduce((total,item,index)=>{
                  return total += item.giaVe;
                },0).toLocaleString()} Vnd
          </h3>
          <hr />
          <h3 className="text-xl mt-2 text-yellow-600"> {movieInfo?.tenPhim}</h3>
          <p>Address: {movieInfo?.tenCumRap} - {movieInfo?.tenRap}</p>
          <p> Time: {movieInfo?.ngayChieu} - {movieInfo?.gioChieu}</p>
          <hr />
          <div >
            <div className="my-5">
              <span className="text-yellow-600 font-bold text-lg">Seats</span>
              <br/>
              {bookingSeatList.sort((a,b)=>(a.stt-b.stt)).map((item,index) => (
                <span key={index} className="text-green-500 text-xl mr-2"> {item.stt}</span>
              ))}
            </div>
            <hr />
            <div className="my-5">
            <span className="text-yellow-600 font-bold text-lg pr-2">Total price (Vnd): </span>
              <span className="text-yellow-600 text-lg font-bold ">
                {bookingSeatList.reduce((total,item,index)=>{
                  return total += item.giaVe;
                },0).toLocaleString()}
              </span>
            </div>
          </div>
          <hr />
          <div className="my-5">
            <i>Email</i> <br />
            {userLogin.email}
          </div>
          <hr />
          <div className="my-5">
            <i>Phone</i> <br />
            {userLogin.soDT}
          </div>
          <hr />
          <div
            className="mb-0 flex flex-col items-center"
            style={{ marginBottom: 0 }}
          >
            <div
              onClick={() => {
                // const thongTinDatVe = new ThongTinDatVe();
                // thongTinDatVe.maLichChieu = props.match.params.id;
                // thongTinDatVe.danhSachVe = danhSachGheDangDat;
                // console.log(thongTinDatVe);

                const seatInfo = {
                          maLichChieu: props.match.params.id,
                          danhSachVe: bookingSeatList,
                        }
                dispatch(bookTicketAction(seatInfo));
              }}
              className="bg-yellow-500 text-white w-full text-center py-3 font-bold text-2xl cursor-pointer"
            >
              BOOK TICKETS
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
