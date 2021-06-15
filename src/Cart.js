import React from 'react';
import {Table} from 'react-bootstrap';
import {connect} from 'react-redux'; 
import Styled from 'styled-components';

const CardWrapper = Styled.div`
.my__alert{
    align-self:center;
    text-align:center;
    background-color: #ffe591;
    padding: 20px;
    border-radius:50x;
    max-width: 1000px;
    width: 100%;
    margin: auto;
}

.purchase__button{
    margin:auto;
    text-align:center;
    padding: 30px;
}

.my__purchase{
    margin:auto;
    padding: 10px;
    border-radius:50px;
}
`;

function Cart(props){
    return (
        <CardWrapper>
        <div>
            <Table responsive>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.state.map( (a,i)=> {
                            return(
                                <tr key={i}>
                                <td>{a.id}</td>
                                <td>{a.name}</td>
                                <td>{a.quan}</td>
                                <td><button className="btn btn-warning" onClick={()=>{props.dispatch({type : 'increase'})}}>+</button>{' '}
                                <button className="btn btn-warning" onClick={ ()=>{props.dispatch({type: 'discrease'})}}>-</button>{' '}</td>
                                </tr>                          
                            )
                        })
                    }
                </tbody>
            </Table>

            <div className="my__alert">
                <p>지금 구매하시면 신규할인 20%</p>
            </div>
            <div className="purchase__button">
                <button className="my__purchase">구매하기</button>
            </div>
        </div>
        </CardWrapper>
    )
}

function Cart1(state){
    return{
        state : state
    }

}

export default connect(Cart1)(Cart);