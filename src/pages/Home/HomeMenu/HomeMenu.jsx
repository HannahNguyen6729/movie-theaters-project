import React from "react";
import { Tabs } from "antd";
import { useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import "antd/dist/antd.css";
import { getCinemaListAction } from "../../../redux/actions/CinemaListAction";
import './HomeMenu.css';
import { NavLink } from "react-router-dom";
import moment from "moment";

const { TabPane } = Tabs;

export default function HomeMenu() {
  const [tabPosition, setTabPosition] = useState("left");
  const dispatch = useDispatch();
  const {cinemaList} = useSelector(state=> state.CinemaListReducer);
  //console.log(cinemaList)

  useEffect(()=>{
    dispatch(getCinemaListAction())
  },[])

  const changeTabPosition = (e) => {
    setTabPosition(e.target.value);
  };

  const renderCinemaGroup=(list)=>{
    return list.slice(0,6).map((item,index)=> (
          <TabPane  tab={<div className='hover:text-yellow-400 flex items-center '>
                            <img src={item.hinhAnh} alt={item.maCumRap} className="w-20 rounded-lg" />
                            <p className="mb-0 ml-1">{item.tenCumRap}</p>
                        </div>} 
                    key={index}
          > 
            <div>
              {item.danhSachPhim?.slice(0,5).map((item,index)=> (
                <div className='flex items-center mb-16' key={index}>
                  <img  src={item.hinhAnh} alt={item.tenPhim} className="w-20 mr-3 rounded-md"
                                    style={{width: 100, height: 100}} 
                                    onError={e=> {e.target.src = 'https://picsum.photos/75/75'; e.target.onError = null}}
                  />
                  <div>
                      <p className='text-white text-2xl font-semibold mb-2 uppercase'>{item.tenPhim}</p>
                      <div className='grid grid-cols-6 gap-10'>
                              {item.lstLichChieuTheoPhim?.slice(0,6).map((item,index)=>(
                                <button key={index} className='bg-yellow-700 px-3 py-1.5 rounded-sm hover:bg-yellow-500'>
                                  <NavLink to={`/checkout/${item.maLichChieu}`} key={index} className='text-white hover:text-white'>
                                  {moment(item.ngayChieuGioChieu).format('hh:mm A')}
                                </NavLink>
                                </button>
                              ))}
                      </div>
                  </div>    
                </div>
                ))
              }
            </div>
          </TabPane>
    ))
  }
  const renderCinemaSystem = ()=>{
    return cinemaList?.map((item,index)=>(
              <TabPane  tab={<div className='hover:text-yellow-400'>
                              <img src={item.logo} alt={item.maHeThongRap} className="rounded-full w-20 bg-white" />
                            </div>} 
                        key={index}> 
                  <Tabs tabPosition={tabPosition}>
                    {renderCinemaGroup(item.lstCumRap)}
                  </Tabs>
              </TabPane>
    ))
  }
  return (
    <div className="container mx-auto px-20 pb-20 text-white">
      <p className="text-white text-3xl text-center font-semibold mb-14">Cinema System</p>
      <Tabs tabPosition={tabPosition}>
        {renderCinemaSystem()}
      </Tabs>
    </div>
  );
}
