import React, { Component } from 'react';
import Header from '../../component/Header/Header.component';
import MySider from '../../component/Sider/MySider.component';
import axios from 'axios';
import { Select, Input, Radio } from 'antd';
import { Layout, Checkbox } from 'antd';

import './career_editor.style.css';

const { Content } = Layout;
const { Option } = Select;
const { TextArea } = Input;

class CareerEditor extends Component {

    constructor() {
        super();
        this.state = {
            user: '',
            area: 'Great Vancouver',
            lan_mark: '',
            hot_label: '',
            title: '',
            introduction: '',
            responsibilities: '',
            requirements: '',
        }
    }

    /* Handle Change Functions */
    handleRadioChange = e => {
        this.setState({
          lan_mark: e.target.value,
        });
    };

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    handleCheckboxChange(event) {
        const target = event.target;
        const value = target.checked;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    handleCheckbox = event => {
        const{ name,value } = event.target;
        if(!this.state[name].includes(value)){
            this.setState({[name]:this.state[name].concat([value])}) }//语法:this.state[name]
        else{
            this.setState({[name]:this.state[name].filter(checkbox => (checkbox != value))})
        }
    };

    handleSubmit = async event =>{
        alert('Hot label was submitted: ' + this.state.hot_label);
        event.preventDefault();
        var data = {
            user: this.state.user,
            area: this.state.area,
            lan_mark: this.state.lan_mark,
            hot_label: this.state.hot_label,
            title: this.state.title,
            introduction: this.state.introduction,
            responsibilities: this.state.responsibilities,
            requirements: this.state.requirements,
        }
        console.log(data);
        axios({
           method: 'post' ,
           url: 'http://localhost:3000/career/add', /* Modified to: career*/
           data: data
        })
        .then(function (response) {
            console.log(response);
          })
        .catch(function (error) {
            console.log(error);
          });
        
    };

    render() {

        const { user, area, lan_mark, hot_label, title, introduction, responsibilities, requirements } = this.state;

        return (
            <div>
                <Layout >
                    <MySider />
                    <Layout className='ft_backend_background'>
                        <Header />
                        <Content className='ft_backend_content'>
                            <form onSubmit={this.handleSubmit}>
                                <p className='ft_backend_title'>招聘频道 > 发布职位</p>

                                <div className='ft_backend_single_row'>
                                    <select 
                                        className='ft_backend_select' 
                                        size='large'
                                    >
                                        <option value="Great Vancouver">Great Vancouver</option>
                                        <option value="Calgary">Calgary</option>
                                        <option value="Edmonton">Edmonton</option> 
                                        <option value="Montreal">Montreal</option>
                                        <option value="Toronto">Toronto</option> 
                                        <option value="Seattle">Seattle</option>
                                        <option value="New York">New York</option>
                                    </select>
                                    
                                    <Radio.Group onChange={this.handleRadioChange} value={lan_mark}>
                                        <Radio value='E'>英文</Radio>
                                        <Radio value='C'>中文</Radio>
                                    </Radio.Group>

                                    <Checkbox name='hot_label' value='hot' onClick={this.handleCheckbox} >
                                        置顶
                                    </Checkbox>
                                </div>
                                
                                <div className='ft_backend_editor_rows'>
                                    <p className='ft_backend_label'>标题：</p>
                                    <Input name='title' value={title} onChange={this.handleInputChange} placeholder='标题' size='large' style={{width:'745px'}}/>
                                </div>

                                <div className='ft_backend_editor_rows'>
                                    <p className='ft_backend_label'>职位简介：</p>
                                    <TextArea name='introuduction' value={introduction} onChange={this.handleInputChange} placeholder='Introduction' style={{width:'745px'}} rows={5}/>
                                </div>

                                <div className='ft_backend_editor_rows'>
                                    <p className='ft_backend_label'>岗位职责：</p>
                                    <TextArea name='responsibilities' value={responsibilities} onChange={this.handleInputChange} placeholder='Responsibilities' style={{width:'745px'}} rows={10}/>
                                </div>

                                <div className='ft_backend_editor_rows'>
                                    <p className='ft_backend_label'>职位要求：</p>
                                    <TextArea name='requirements' value={requirements} onChange={this.handleInputChange} placeholder='Requirements' style={{width:'745px'}} rows={10}/>
                                </div>

                                <button type='submit' className='ft_backend_button'>发布职位</button>

                            </form>
                        </Content>
                    </Layout>
                </Layout>
            </div>
        )
    }
}

export default CareerEditor;