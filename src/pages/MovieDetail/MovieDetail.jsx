import React, { useEffect ,useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { CustomCard } from "@tsamantanis/react-glassmorphism";
import "@tsamantanis/react-glassmorphism/dist/index.css";
import "./circle.css";
import { getDetailMovieAction } from "../../redux/actions/DetailMovieAction";
import { Radio, Space, Tabs } from 'antd';
import moment from "moment";
import { NavLink } from "react-router-dom";

const { TabPane } = Tabs;

export default function MovieDetail(props) {
    const dispatch = useDispatch();
    const detailMovie = useSelector(state => state.MovieListReducer.detailMovie)
    console.log(detailMovie);
    //console.log(props.match.params.id)
    const movieId = props.match.params.id;
    useEffect(()=>{
        dispatch(getDetailMovieAction(movieId))
    },[])
    const renderCinemaGroup=(list)=>{
    return list.slice(0,6).map((item,index)=> (
                <div key={index} className='hover:text-yellow-400 flex items-center' style={{marginBottom: '40px'}}>
                    <img src={item.hinhAnh} alt={item.maCumRap} className="w-20 rounded-lg" />
                    <div style={{marginLeft: '20px'}}>
                        <p className="mb-0 text-white font-semibold">{item.tenCumRap}</p>
                        <p className="mb-0 text-white" style={{marginBottom: '15px', marginTop: '5px'}}>{item.diaChi}</p>
                        <p className="mb-0 text-white"> {item.lichChieuPhim.map((item,index)=> (
                            <NavLink to={`/checkout/${item.maLichChieu}`} key={index} >
                                <span className='bg-yellow-600  px-3 py-1.5 mr-2 rounded-sm text-white hover:bg-yellow-500'>
                                    {moment(item.ngayChieuGioChieu).format('hh:mm A')}
                                </span>
                            </NavLink>
                        ))} </p>
                    </div>
                </div>
    ))
  }
    const renderCinemaSystem =() => {
        return detailMovie?.heThongRapChieu?.map((item,index)=>(
            <TabPane key={index}
                    tab={<div className='hover:text-yellow-400'>
                    <img src={item.logo} alt={item.maHeThongRap} className="rounded-full w-20 bg-white" />
                    <p>{item.maHeThongRap}</p>
                    </div>} 
            >
                    {renderCinemaGroup(item.cumRapChieu)}
            </TabPane>
        ))
    }
  return (
<>
    <div style={{ backgroundImage: `url(${detailMovie.hinhAnh})`, backgroundSize: 'cover', backgroundPosition:'center'}}>
      <CustomCard
        style={{ minHeight: "90vh" , paddingTop: '20%', paddingLeft: '10%', backgroundColor: 'rgba(0,0,0,0.6)' }}
        effectColor="#262626" 
        color="#262626" 
        blur={5} 
        borderRadius={1} 
      >
        <div className="container mx-auto">
          <div className="flex items-center">
            <img src={detailMovie.hinhAnh} alt={detailMovie.tenPhim} style={{width:300, height:400}}/>
            <div style={{marginLeft: '30px'}} className='flex flex-col'>
                <div className={`c100 p${detailMovie.danhGia*10} small orange`}>
                <span style={{color: 'rgb(202 138 4)'}}> {detailMovie.danhGia}/10</span>
                <div className="slice">
                    <div className="bar" />
                    <div className="fill" />
                </div>
                </div>
                <div className='text-white' >
                    <p className='uppercase font-semibold text-2xl mb-1 '> {detailMovie.tenPhim} </p>
                    <p className="text-base" style={{paddingRight: '35%'}}> {detailMovie.moTa} </p>
                    <div>
                        <button className="rounded bg-yellow-600 mr-2" style={{padding: '10px 20px'}}>Play Trailer</button>
                        <button className="rounded bg-yellow-600" style={{padding: '10px 20px'}}>Tickets</button>
                    </div>
                </div>
            </div>
          </div>
            
        </div>
      </CustomCard>
    </div>
    <div className='text-white bg-neutral-900 py-10'>
        <div className="container mx-auto">
            <p className="py-10  text-center text-3xl font-semibold">Schedule</p>
            <div style={{paddingLeft: '10%'}}>
                <Tabs tabPosition='left'>
                    {renderCinemaSystem()}
                </Tabs>
            </div>
        </div>
    </div>
</>
    
  );
}
