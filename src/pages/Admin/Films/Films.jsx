import React, { Fragment, useEffect } from 'react'
import { Button, Table } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieListAction } from '../../../redux/actions/MovieListAction';
import { GROUPID } from '../../../util/settings/config';
import { object } from 'yup';
import { NavLink } from 'react-router-dom';
import {EditOutlined, DeleteOutlined} from '@ant-design/icons'
import { history } from '../../../App';




const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

const { Search } = Input;
const onSearch = (value) => console.log(value);
export default function Films() {
  const filmArr = useSelector(state=> state.MovieListReducer.movieListDefault)
  console.log(filmArr);
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getMovieListAction(GROUPID))
  },[])

  const columns = [
    {
      title: 'Movie ID',
      dataIndex: 'maPhim',
      width: '10%',
      sorter: (a, b) => a.maPhim - b.maPhim,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Image',
      dataIndex: 'hinhAnh',
      width: '10%',
      render: (text,film,index)=>{return (
        <Fragment>
          <img src={film.hinhAnh} alt={film.tenPhim} width={50} height={50} onError={(e)=> {e.target.onError = null; e.target.src=`https://picsum.photos/id/${index}/50/50`}} />
        </Fragment>
      )},
    },
    {
      title: 'Movie Name',
      dataIndex: 'tenPhim',
      width: '15%',
      sorter: (a, b) => {
        let movieNameA = a.tenPhim.toLowerCase().trim();
        let movieNameB = b.tenPhim.toLowerCase().trim();
        if(movieNameA > movieNameB){
          return 1;
        }
        return -1;
      },
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Movie Description',
      dataIndex: 'moTa',
      with:300,
      render: (text, film)=>{return (
        <Fragment>
          {film.moTa.length > 300 ? (film.moTa.substr(0,300) + '...') : film.moTa}
        </Fragment>
      )},
      sorter: (a, b) => {
        let movieDesA = a.moTa.toLowerCase().trim();
        let movieDesB = b.moTa.toLowerCase().trim();
        if(movieDesA > movieDesB){
          return 1;
        }
        return -1;
      },
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Action',
      dataIndex: 'hanhDong',
      with:300,
      width: '10%',
      render: (text, film)=>{return (
        <Fragment>
            <NavLink to='/'> <EditOutlined />  </NavLink>
            <NavLink to='/' style={{color: 'red'}}> <DeleteOutlined/> </NavLink>
        </Fragment>
      )},
    },


  ];
  
  const data = filmArr;

  return (
    <div>
      <p className="text-3xl">Manage Movies</p>
      <Button onClick={()=> history.push('/admin/films/addnew')} size='large' className='mb-5' > Add new movie</Button>
      <Search className='mb-5'
              size="large"
              placeholder="input search text" 
              onSearch={onSearch} 
              enterButton 
      />
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>
  )
}
