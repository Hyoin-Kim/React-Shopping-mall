import React, { useContext } from 'react';
import { useHistory, useParams } from 'react-router';
import { Nav } from 'react-bootstrap';
import Styled from 'styled-components';
import './Detail.css';
import { useEffect,useState } from 'react';
import {connect} from 'react-redux';
import {stock, stockContext} from './App.js';
import {CSSTransition} from "react-transition-group";

let MiddleWrap = Styled.div`

    text-align: center;
    padding : 10px;

    .header__title{
        padding:20px;
        font-size:25px;
        text-align: center;

    }

    .middle__title{
        align-self: center;
        text-align: center;
        
    }

    .my__alert{
        align-self:center;
        text-align:center;
        background-color: #ffe591;
        padding: 20px;
        border-radius:50x;
        max-width: 500px;
        width: 100%;
        margin: auto;
    }
    
    .button {
      margin:8px;
    }




`;


function Detail(props){
  useEffect( ()=> {
    let timer = setTimeout( ()=> {setAlert(false) },3000);
    return ()=>{clearTimeout(timer)}
  },[]);

    let [alert,setAlert] = useState(true);
    let [tab,setTab] =useState(0);
    let [sw,setSw] = useState(false);
    
    let { id } = useParams();
    let findGoods = props.goods.find(function(goods){
        return goods.id == id
    });
    let findStock 
    let history = useHistory();
    return(
    <MiddleWrap>
      <div className="container">
          <div className="header__title">상세페이지</div>

          {
            alert === true ? (<div className="my__alert">재고가 얼마남지 않았습니다.</div>)
            : null
          }
        <div className="row">
          <div className="col-md-6">
            <img src={findGoods.image} width="100%" />
          </div>
          <div className="col-md-6 mt-4 middle__title">
            <h4 className="pt-5">{findGoods.title}</h4>
            <p></p>
            <p>{findGoods.price}</p>
            <Info stock={props.stock}/>
            <div className="stock">
            </div>
            <button className="btn btn-danger button" onClick={ ()=> {
              props.dispatch({type:'type', data: {id:findGoods.id, name:findGoods.title, quan:1}})
              history.push('/cart')}}>주문하기</button>
            <button className="btn btn-danger button" onClick={ ()=> {history.push('/')}}>뒤로가기</button>
          </div>
        </div>

        <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0" >
          <Nav.Item>
            <Nav.Link eventKey="link-0" onClick={ ()=> { setSw(false);setTab(0)}}>Review</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1"  onClick={ ()=> { setSw(false);setTab(1)}}>Q & A</Nav.Link>
          </Nav.Item>
        </Nav>


        <CSSTransition in={sw} classNames="animation" timeout={5000}>
        <TabContent tab={tab} setSw={setSw}/>
        </CSSTransition>


      </div>
    </MiddleWrap>
      
    )
  }

  function Info(props){
    let stock = useContext(stockContext);
    return (
      <p>재고 : {props.stock[0]}개</p>
    )
  }

  function TabContent(props){
    useEffect( ()=> {
      props.setSw(true);
    })
   
      if(props.tab===0){
        return (
        <div>0번째 내용입니다</div>)
      }else if(props.tab===1){
        return(
        <div>1번째 내용입니다</div>)
      }

  }

  function Detail2(state){
    return{
      state: state.reducer
    }
  }


  export default connect(Detail2)(Detail);