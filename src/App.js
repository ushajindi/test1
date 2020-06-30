import React from 'react';
import './App.css';
import {NavLink, Route} from "react-router-dom";
import Auth from "./Components/Auth/Auth";
import HOCContacts from "./Components/Contacts/HOCContacts";
import HOCSearch from "./Components/Search/HOCSearch";
import {Layout} from "antd";
import {connect} from "react-redux";
import {setSingOutAC} from "./Redux/AuthReducer";
const {Header,Sider,Footer,Content}=Layout


function App(props) {
    console.log(props.Auth)
  return (
    <div>
        <Layout>
            <div className="header">
                <div>WebAPP</div>
                <div className="header_login_inner">
                    {props.Auth.authIs ?<>
                        {props.Auth.email}
                        <a onClick={()=>{
                        props.out()}
                        }>Выйти</a>
                    </>:<><NavLink to="/login">Войти</NavLink></>

                    }
                </div>
            </div>
            <Layout>
                <Sider theme='light'>
                    <div className='nav'>
                        <div><NavLink to="/contacts">Контакты</NavLink></div>
                        <div><NavLink to='/search'>Поиск</NavLink></div>
                    </div>
                </Sider>
                <Content>
                    <div className='content_inner'>
                        <Route path="/login" component={Auth}/>
                        <Route path='/contacts' component={HOCContacts}/>
                        <Route path='/search' component={()=>{
                           return <div className='sider_search'>
                               <HOCSearch/>
                           </div>
                        }}/>
                    </div>
                </Content>
            </Layout>
            <Footer className='footer'>WebAPP by RadzhabovSS</Footer>
        </Layout>
    </div>
  )
}
const mapStateToProps =(state)=>{
    return{
        Auth:state.Auth
    }
}
export default connect(mapStateToProps,{out:setSingOutAC})(App)
