import React from 'react';
import { useHistory, useParams } from 'react-router';
import Styled from 'styled-components';
import './Detail.css';
import { useEffect,useState } from 'react';

let MiddleWrap = Styled.div`
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



`;


function Detail(props){
  useEffect( ()=> {
    let timer = setTimeout( ()=> {setAlert(false) },3000);
    return ()=>{clearTimeout(timer)}
  },[]);

    let [alert,setAlert] = useState(true);
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
            <button className="btn btn-danger" onClick={ ()=> {props.setStock()}}>주문하기</button>
            <button className="btn btn-danger" onClick={ ()=> {history.push('/')}}>뒤로가기</button>
          </div>
        </div>
      </div>
    </MiddleWrap>
      
    )
  }

  function Info(props){
    return (
      <p>재고 : {props.stock}</p>
    )
  }


  export default Detail;