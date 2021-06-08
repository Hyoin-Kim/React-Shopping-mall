import React from 'react';
import { useHistory, useParams } from 'react-router';
import Styled from 'styled-components';

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

`;


function Detail(props){

    let { id } = useParams();
    let findGoods = props.goods.find(function(goods){
        return goods.id == id
    });
    let history = useHistory();
    return(
    <MiddleWrap>
      <div className="container">
          <div className="header__title">상세페이지</div>
        <div className="row">
          <div className="col-md-6">
            <img src={findGoods.image} width="100%" />
          </div>
          <div className="col-md-6 mt-4 middle__title">
            <h4 className="pt-5">{findGoods.title}</h4>
            <p></p>
            <p>{findGoods.price}</p>
            <button className="btn btn-danger">주문하기</button>
            <button className="btn btn-danger" onClick={ ()=> {history.push('/')}}>뒤로가기</button>
          </div>
        </div>
      </div>
    </MiddleWrap>
      
    )
  }


  export default Detail;