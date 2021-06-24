import React from 'react';
import Styled from 'styled-components';
import {connect} from 'react-redux';
import {Table} from 'react-bootstrap';

const OrderWrap = Styled.div`
.purchase__memo{
    text-align: center;
    background-color: #ffe591;
    border-radius: 50px;
    max-width: 800px;
    padding: 20px;
    margin: auto;
}

`;

const Order = (props) => {
    return (
        <OrderWrap>
        <div>
            <Table responsive>
                <thead>
                    <tr>
                    <th>상품번호</th>
                    <th>이미지</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>입금 금액</th>
                    <th>입금 계좌번호</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.state.map((a,index)=>{
                            return(
                                <tr key={index}>
                                <td>{a.id}</td>
                                {a.image ? (
                                        <td><img src={a.image} width="80" height="80"/></td>
                                    ) : (
                                        <td><img src="https://lh3.googleusercontent.com/proxy/dM98t07Za_P2wx_A6z-4tacbGMz0-3203z-J9X4SJCAsVrtXiflzoFdSNrVdUIfQsWP-s0Ge-e6IzHdNsB_W6O9xpnQ" width="100" height="80"/></td>
                                    )}
                                <td>{a.name}</td>
                                <td>{a.quan}</td>
                                <td>{a.price}</td>
                                <td>농협 352-1211-8825-63 예금주 : 김효인</td>
                                </tr>
                            )

                        })

                    }

                </tbody>
            </Table>


            <div className="purchase__memo">
                해당 계좌번호로 입금하시면 3-4일 내에 배송예정입니다.
            </div>
        </div>
        </OrderWrap>
    );
};

function Order2(state){
    return{
        state : state
    }

}

export default connect(Order2)(Order);