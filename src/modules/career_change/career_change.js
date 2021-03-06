import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../component/Header/Header.component';
import MySider from '../../component/Sider/MySider.component';

import { Layout, Select, Icon, Button } from 'antd';

import './career_change.style.css';

const { Content } = Layout;
const { Option } = Select;

class CareerChange extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <MySider />
                    <Layout className='ft_backend_background'>
                        <Header />
                        <Content className='ft_backend_content' style={{background:'whitesmoke'}}>
                            <p className='ft_backend_title'>招聘频道</p>
 
                            <div className='ft_backend_change_button_row'>
                                
                                <div className=''>
                                    <button type='submit' className='ft_backend_white_button'>编辑</button>
                                    <div style={{padding: '0 4px'}} />
                                    <button type='submit' className='ft_backend_white_button'>删除</button>
                                </div>

                                <div className='' >
                                    <span className='ft_backend_label'>筛选：</span>
                                    <Select className='ft_backend_select' style={{margin:0}} placeholder='地区' size='large'>
                                        <Option value='Vancouver'>Vancouver</Option>
                                        <Option value='Victoria'>Victoria</Option>
                                        <Option value='Toronto'>Toronto</Option>
                                        <Option value='Seattle'>Seattle</Option>
                                    </Select>
                                    <div style={{padding: '0 5px'}} />
                                    <Link to='/Fantuan_career_editor'>
                                        <Button className='ft_backend_change_button'>
                                            <Icon type="edit" className='ft_backend_change_button_icon' /> 
                                            <span className='ft_backend_change_button_name'>发布职位</span>
                                        </Button>
                                    </Link>
                                </div>

                            </div>
                            
                        </Content>
                    </Layout>
                </Layout>
            </div>
        )
    }
}

export default CareerChange;