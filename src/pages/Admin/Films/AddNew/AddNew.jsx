import {
    DatePicker,
    Form,
    Input,
    InputNumber,
    Radio,
    Switch,
  } from 'antd';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { addMovieUploadImgAction } from '../../../../redux/actions/MovieListAction';
import { GROUPID } from '../../../../util/settings/config';

export default function AddNew() {
    const [componentSize, setComponentSize] = useState('default');
    const [imgSrc, setImgSrc] = useState('');
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
          tenPhim: '',
          trailer: '',
          moTa: '',
          ngayKhoiChieu: '',
          dangChieu: false,
          sapChieu: false,
          hot: false,
          danhGia: 0,
          hinhAnh: {},
          maNhom: GROUPID,
        },
        onSubmit: values => {
          console.log(values);
          //values.maNhom = GROUPID;
          //create obj formData, send data from formik to formData
          let formData = new FormData();
          formData.append('tenPhim', values.tenPhim)
          for(let key in values) {
            if(key !== 'hinhAnh'){
                formData.append(key, values[key])
            }else{
                formData.append('File', values.hinhAnh, values.hinhAnh.name) 
            }
          }
          //call API, send data to backend
          dispatch(addMovieUploadImgAction(formData))
        },
      });
    const handleChangeDate = (value) => {
        //console.log(value);
        const premiereDate = moment(value).format('DD/MM/YYYY')
        formik.setFieldValue('ngayKhoiChieu', premiereDate)
    }
    const handleChangeClosureFunc =(name)=>{
        return (value)=>{
            formik.setFieldValue(name, value)
        }
    }
    const handeChangeFile= (e) => {
        //get the file from event
        const file = e.target.files[0];
       if(file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/jpg' || file.type === 'image/gif'){
         //create ab object to read the file
         const reader = new FileReader();
         reader.readAsDataURL(file)
         reader.onload=(e)=> {
             //console.log(e.target.result)
             setImgSrc(e.target.result)
         };
         formik.setFieldValue('hinhAnh', file)
       }
        //console.log(file)
    }
       
    const onFormLayoutChange = ({ size }) => {
      setComponentSize(size);
    };
    
    return (
      <Form
        onFinish={formik.handleSubmit}
        labelCol={{span: 4, }}
        wrapperCol={{ span: 14,}}
        layout="horizontal"
        initialValues={{size: componentSize,}}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        <Form.Item label="Form Size" name="size">
          <Radio.Group>
            <Radio.Button value="small">Small</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="large">Large</Radio.Button>
          </Radio.Group>
        </Form.Item>

        <Form.Item label="Movie name">
          <Input name='tenPhim'  onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item label="Trailer">
          <Input name='trailer'  onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item label="Description">
          <Input name='moTa'  onChange={formik.handleChange} />
        </Form.Item>
        
        <Form.Item label="Premiere Date">
          <DatePicker format={'DD/MM/YYYY'} onChange={handleChangeDate} />
        </Form.Item>
       
        <Form.Item label="Now in the cinema" valuePropName="checked">
          <Switch  onChange={handleChangeClosureFunc('dangChieu')} />
        </Form.Item>
        <Form.Item label="Coming soon" valuePropName="checked">
          <Switch  onChange={()=>handleChangeClosureFunc('sapChieu')} />
        </Form.Item>
        <Form.Item label="Hot" valuePropName="checked">
          <Switch onChange={handleChangeClosureFunc('hot')} />
        </Form.Item>
        <Form.Item label="Valuation">
          <InputNumber min={1} max={10} onChange={handleChangeClosureFunc('danhGia')} />
        </Form.Item>

        <Form.Item label="Image">
          <input type='file' onChange= {handeChangeFile} accept=".jpg, .jpeg, .png, .gif"  />
          <br />
          <img src={imgSrc} width={150} height={150} alt="uploaded img" />
        </Form.Item>

        <Form.Item label="Button">
            <button type='submit' 
                    style={{backgroundColor:'rgb(56 189 248)', color: 'white'}} className='px-5 py-2 rounded'
            > Add new movie
            </button>
        </Form.Item>
      </Form>
    );
}
