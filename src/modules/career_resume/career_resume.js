import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../component/Header/Header.component';
import MySider from '../../component/Sider/MySider.component';

import { Layout, Select, Icon, Button } from 'antd';

const { Content } = Layout;
const { Option } = Select;

class CareerResume extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <MySider />
                    <Layout className='ft_backend_background'>
                        <Header />
                        <Content className='ft_backend_content'>
                            <p className='ft_backend_title'>应聘简历</p>
 
                            <div className='ft_backend_change_button_row'>
                                
                                <div className='ft_backend_change_row_section'>
                                    <button type='submit' className='ft_backend_white_button'>下载</button>
                                    <div style={{padding: '0 4px'}} />
                                    <button type='submit' className='ft_backend_white_button'>删除</button>
                                    <div style={{padding: '0 4px'}} />
                                    <button type='submit' className='ft_backend_white_button'>回复</button>
                                </div>

                                <div className='ft_backend_change_row_section' >
                                    <span className='ft_backend_label'>筛选：</span>
                                    <Select className='ft_backend_select' style={{margin:0}} placeholder='地区' size='large'>
                                        <Option value='Vancouver'>Vancouver</Option>
                                        <Option value='Victoria'>Victoria</Option>
                                        <Option value='Toronto'>Toronto</Option>
                                        <Option value='Seattle'>Seattle</Option>
                                    </Select>
                                </div>
                            </div>
                            
                        </Content>
                    </Layout>
                </Layout>
            </div>
        )
    }
}

export default CareerResume;