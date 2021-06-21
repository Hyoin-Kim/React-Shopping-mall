import React from 'react';
import Style from 'styled-components';
import Card from '../components/review/Card';
import NewCard from '../components/review/NewCard';


const MainWrap = Style.div`


`;


const Main = ({year, month, history}) => {
    return (
        <MainWrap>
        <div className="main__header">메인페이지입니다</div>
        </MainWrap>
    );
};

export default Main;