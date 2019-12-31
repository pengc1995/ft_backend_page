import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';

import './MySider.component.style.css';

const { Sider } = Layout;

class MySider extends Component {
  render() {
    return (
      <div className='ft_backend_sider'>
        <Sider
          width='357px'
          className='ft_backend_sider'
      >
        <Link to='/'>
          <p className='ft_backend_sider_title'>FANTUAN</p>
        </Link>

        <Link to='/Fantuan_news_change'>
            <p className="ft_backend_sider_menu_item">新闻频道</p>
        </Link>

        <Link to='/Fantuan_career_change'>
          <p className="ft_backend_sider_menu_item">招聘频道</p>
        </Link>

        <Link to='Fantuan_career_resume'>
          <p className="ft_backend_sider_menu_item">招聘简历</p>
        </Link>

        <Link to='/Fantuan_store_resume'>
          <p className="ft_backend_sider_menu_item">商家简历</p>
        </Link>

        <Link to='#'>
          <p className="ft_backend_sider_menu_item">垃圾桶</p>
        </Link>

        <Link to='/Fantuan_admin_page'>
          <p className="ft_backend_sider_menu_item">设置</p>
        </Link>

        <pre className='ft_backend_sider_footer'>2019  Fantuan   |   Terms and Conditions</pre>
      </Sider>
          
      </div>

    );
  }
}

export default MySider;
