import React from 'react'
import { Table } from 'antd';
import "antd/dist/antd.css";
import { DownloadOutlined ,CheckOutlined,SnippetsOutlined,FilterOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import './style.css';
import { Select } from 'antd';
import { Checkbox } from 'antd';
const { Option } = Select;
export default function Home() {
    const dataSource = [
        {
            key: '1',
            STT: 'Mike',
            Usename: 32,
            Password: '10 Downing Street',
            Nickname: '10 Downing Street',
            VipPoint: '10 Downing Street',
            GoldBalance: '10 Downing Street',
            CoinBalance: '10 Downing Street',
            StockBalance: '10 Downing Street',
            Mobile: '10 Downing Street',
            Telesafe: '10 Downing Street',
        }
    ];
    const columns = [
        {
            title: 'STT',
            dataIndex: 'STT',
            key: 'STT',
        },
        {
            title: 'Usename',
            dataIndex: 'Usename',
            key: 'Usename',
        },
        {
            title: 'Password',
            dataIndex: 'Password',
            key: 'Password',
        },
        {
            title: 'Nickname',
            dataIndex: 'Nickname',
            key: 'Nickname',
        },
        {
            title: 'Vip Point',
            dataIndex: 'VipPoint',
            key: 'VipPoint',
        },
        {
            title: 'Gold Balance',
            dataIndex: 'GoldBalance',
            key: 'GoldBalance',
        },
        {
            title: 'Coin Balance',
            dataIndex: 'CoinBalance',
            key: 'CoinBalance',
        },
        {
            title: 'Stock Balance',
            dataIndex: 'StockBalance',
            key: 'StockBalance',
        },
        {
            title: 'Mobile',
            dataIndex: 'Mobile',
            key: 'Mobile',
        },
        {
            title: 'Telesafe',
            dataIndex: 'Telesafe',
            key: 'Telesafe',
        },
    ];
    return (
        <>
            <div className="nav">
                <div>
                    <div>
                        <input size={30} className="w3-input" type="text" placeholder="Nhập" />
                        <Button type="primary" className="styleDown" shape="circle" icon={<DownloadOutlined />} size="large" />
                    </div>
                    <div>
                        <span className="name">Cổng game</span>
                        <Select
                            showSearch
                            style={{ width: 200 }}
                            placeholder="Select"
                            optionFilterProp="children"
                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="tom">Tom</Option>
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
                <Table dataSource={dataSource} columns={columns} />;
            </div>
        </>
    )
}
