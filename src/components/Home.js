import React ,{useRef} from 'react';
import axios from 'axios';
import { Table } from 'antd';
import "antd/dist/antd.css";
import { DownloadOutlined ,CheckOutlined,SnippetsOutlined,FilterOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import './style.css';
import { Select } from 'antd';
import { Checkbox } from 'antd';
import { useSelector ,useDispatch } from 'react-redux';
import {changeWeb} from './../actions/account';
import {  toast } from 'react-toastify';
import {getDataURL} from './../api/account';
import {SET_LIST_ACCOUNT} from './../actions/account';
const { Option } = Select;

export default function Home() {
    let {list}= useSelector(state=>state.account);
    let dispatch = useDispatch();
    let inputRef = useRef();
    const columns = [
        {
            title: 'Username',
            dataIndex: 'username',
            key: 'username',
        },
        {
            title: 'Password',
            dataIndex: 'password',
            key: 'password',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'Nickname',
            dataIndex: 'nickname',
            key: 'nickname',
        },
        {
            title: 'Vip Point',
            dataIndex: 'vippoint',
            key: 'vippoint',
        },
        {
            title: 'Gold Balance',
            dataIndex: 'goldbalance',
            key: 'goldbalance',
            sorter: (a, b) => a - b
        },
        {
            title: 'Coin Balance',
            dataIndex: 'coinbalance',
            key: 'coinbalance',
        },
        {
            title: 'Stock Balance',
            dataIndex: 'stockbalance',
            key: 'stockbalance',
        },
        {
            title: 'Mobile',
            dataIndex: 'mobile',
            key: 'mobile',
        },
        {
            title: 'Telesafe',
            dataIndex: 'telesafe',
            key: 'telesafe',
        },
    ];
    const getData =async ()=>{
        if(!inputRef.current.value){
            return toast.error("Nhập URL")
        }
        let data = await getDataURL(inputRef.current.value);
        console.log(data);
        if(data.data.status==="success"){
            dispatch(SET_LIST_ACCOUNT(data.data.data))
        }
        // let data = JSON.stringify({"Md5Password":"811137414f6975fd9b48dd36b73f2fb1","Verify":null,"Password":"tin123","OTP":null,"Captcha":"","Username":"Phuongne111"});
        // let options = {
        //     method:"post",
        //     url:"http://khanhdang.xyz/AppG88/login.php",
        //     headers:{
        //         'Content-Type': 'application/json'
        //     },
        //     data :data
        // }
        // axios(options)
        // .then(function (response) {
        // console.log(JSON.stringify(response.data));
        // })
        // .catch(function (error) {
        // console.log(error);
        // });

    }
    const onChangeSelectWeb= (value)=>{
        dispatch(changeWeb(value))
    }
    return (
        <>
            <div className="nav">
                <div>
                    <div>
                        <input size={30} className="w3-input" type="text" placeholder="Nhập" ref={inputRef}/>
                        <Button type="primary" className="styleDown" shape="circle" icon={<DownloadOutlined />} size="large" onClick={getData} />
                    </div>
                    <div>
                        <span className="name">Cổng game</span>
                        <Select
                            showSearch
                            style={{ width: 200 }}
                            placeholder="1g88.vin"
                            optionFilterProp="children"
                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                            defaultValue={"1g88.vin"}
                            onChange={onChangeSelectWeb}
                        >
                            <Option value="1" >1g88.vin</Option>
                            <Option value="2">1w88.vin</Option>
                            <Option value="3">1r88.vin</Option>
                            <Option value="4">1m88.vin</Option>
                            <Option value="5">m365.vin</Option>
                            <Option value="6">w365.vin</Option>
                        </Select>,
                    </div>
                </div>
                <div>
                    <div>
                        <Checkbox >Checkbox</Checkbox>
                    </div>
                    <div>
                        <Button type="primary" className="styleDown" shape="circle" icon={<CheckOutlined />} size="large" />
                    </div>
                    <div>
                        <Button type="primary" className="styleCop" shape="circle" icon={<SnippetsOutlined />} size="large" />
                    </div>
                    <div>
                        <Button type="primary" className="styleFilter" shape="circle" icon={<FilterOutlined />}  size="large" />
                    </div>
                </div>
            </div>
            <div>
                <Table dataSource={list} columns={columns} />;
            </div>
        </>
    )
}
