import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import { Switch,Route,Redirect } from 'react-router-dom';

import SignInPage from './modules/sign_in/sign_in';
import HomePage from './modules/home_page/home_page';
import NewsEditor from './modules/news_editor/news_editor';
import CareerEditor from './modules/career_editor/career_editor';
import NewsChange from './modules/news_change/news_change';
import CareerChange from './modules/career_change/career_change';
import Admin from './modules/admin_page/admin_page';
import CareerResume from './modules/career_resume/career_resume';
import StoreResume from './modules/store_resume/store_resume';

import './App.css';

function App() {
    return (
      <BrowserRouter>
        <div className="App">
            <Switch>
                <Route exact path=/* "/" */"/Fantuan_sign_in" component = {SignInPage} />
                <Route exact path=/* "/Fantuan_home_page" */"/" component = {HomePage} />
                <Route exact path="/Fantuan_news_editor" component = {NewsEditor} />
                <Route exact path="/Fantuan_career_editor" component = {CareerEditor} />
                <Route exact path="/Fantuan_news_change" component = {NewsChange} />
                <Route exact path="/Fantuan_career_change" component = {CareerChange} />
                <Route exact path="/Fantuan_admin_page" component = {Admin} />
                <Route exact path='/Fantuan_career_resume' component = {CareerResume} />
                <Route exact path='/Fantuan_store_resume' component = {StoreResume} />
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
  
  export default App;