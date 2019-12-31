import React, { Component } from 'react';
import Header from '../../component/Header/Header.component';
import MySider from '../../component/Sider/MySider.component';

import { Layout } from 'antd';

const { Content } = Layout;

class HomePage extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <MySider />
                    <Layout className='ft_backend_background'>
                        <Header />
                        <Content className='ft_backend_content'>
                            <div>
                                <p className='ft_backend_title'>设置</p>

                            
                            </div>
                        </Content>
                    </Layout>
                </Layout>
            </div>
        )
    }
}

export default HomePage;