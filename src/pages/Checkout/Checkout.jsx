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
import { Tabs } from 'antd';
import { getAccountInfoAction } from "../../redux/actions/UserInfoAction";
import moment from "moment";
const { TabPane } = Tabs;

function Checkout(props) {
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
      let bookedSeatByUserClass = '';
      if(userLogin.taiKhoan === seat.taiKhoanNguoiDat){
        bookedSeatByUserClass = 'bookingSeatByUser';
      }
      return (
        <Fragment key={index}>
          <button onClick={()=>{dispatch({type: BOOKING_SEAT, payload: seat})}}
                  disabled={seat.daDat}  className={`seat ${vipSeatClass} ${bookedSeatClass} ${bookingSeatClass} ${bookedSeatByUserClass}`}>
            {seat.daDat? bookedSeatByUserClass !==''? <UserOutlined/> : 'X': seat.stt}
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
              <h3 className="mt-3 text-white">Screen</h3>
            </div>
            <div>{renderSeats()}</div>
          </div>

          <div className="mt-5 flex justify-center">
            <table className=" divide-y divide-gray-200 w-2/3 ">
              <thead className="bg-neutral-800 text-white p-5">
                <tr >
                  <th>Available seat</th>
                  <th>Booking seat</th>
                  <th>VIP</th>
                  <th>Booked seat</th>
                  <th>Booked seart by user</th>
                  <th>Ghế khách đang đặt</th>
                </tr>
              </thead>
              <tbody className="bg-neutral-800 divide-y divide-gray-200 ">
                <tr >
                  <td style={{textAlign: 'center'}}><button className="seat "> <CheckOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /> </button> </td>
                  <td style={{textAlign: 'center'}}><button className="seat bookingSeat"> <CheckOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /></button> </td>
                  <td style={{textAlign: 'center'}}><button className="seat vipSeat "><CheckOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /></button> </td>
                  <td style={{textAlign: 'center'}}><button className="seat bookedSeat "> X </button> </td>
                  <td style={{textAlign: 'center'}}><button className="seat bookingSeatByUser "> <UserOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /> </button> </td>
                  <td style={{textAlign: 'center'}}><button className="seat gheKhachDat "> <CheckOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /> </button> </td>
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
          <p className="text-white">Address: {movieInfo?.tenCumRap} - {movieInfo?.tenRap}</p>
          <p className="text-white"> Time: {movieInfo?.ngayChieu} - {movieInfo?.gioChieu}</p>
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
          <div className="my-5 text-white">
            <i>Email</i> <br />
            {userLogin.email}
          </div>
          <hr />
          <div className="my-5  text-white">
            <i>Phone</i> <br />
            {userLogin.soDT}
          </div>
          <hr />
          <div className="mb-0 flex flex-col items-center" style={{ marginBottom: 0 }}>
            <div onClick={() => {
                const seatInfo = {
                          maLichChieu: props.match.params.id,
                          danhSachVe: bookingSeatList,
                        }
                console.log('seatInfo',seatInfo)
                dispatch(bookTicketAction(seatInfo));
              }}
              className="bg-yellow-500 text-white w-full text-center py-3 font-bold text-2xl cursor-pointer"
            >
              BOOK SEATS
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BookedTicketHistory(){
  const dispatch = useDispatch();
  const accountInfo = useSelector(state=> state.LoginReducer)
  const bookedTicketList = useSelector(state=> state.LoginReducer.accountInfo.thongTinDatVe)
  console.log(accountInfo)
  
  useEffect(()=>{
    dispatch(getAccountInfoAction())
  },[])

  const renderbookedTicketList =()=>{
    return bookedTicketList?.map((item,index)=>{
      return (
        <div key={index} className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={item.hinhAnh} />
              <div className="flex-grow">
                <h2 className="text-white title-font font-medium"> {item.tenPhim} </h2>
                <p className="text-white">Length: {item.thoiLuongPhim} minutes</p>
                <p className="text-white">Ticket Id: {item.maVe} </p>
                <p className="text-white"> Time: {moment(item.ngayDat).format('hh:mm A')}  /  Date: {moment(item.ngayDat).format('DD.MM.YYYY')} </p>
              </div>
            </div>
        </div>
    )
    })
  }
  return (
    <section className="text-white body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Booked Movie Ticket History</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Here are the information on your movie tickets</p>
        </div>
        <div className="flex flex-wrap -m-2">
          {renderbookedTicketList()}
        </div>
      </div>
</section>

  )
}
const onChange = (key) => {
  console.log(key);
};

export default function Demo(props){ 
  return (
<div className='bg-neutral-900 py-5 px-10' style={{minHeight: '100vh'}}>
  <Tabs defaultActiveKey="1" onChange={onChange}>
    <TabPane tab="1/ BOOK SEATS" key="1">
      <Checkout {...props}/>
    </TabPane>
    <TabPane tab="2/ BOOKED TICKET HISTORY" key="2">
      <BookedTicketHistory {...props}/>
    </TabPane>
  </Tabs>
</div>
  )
}
