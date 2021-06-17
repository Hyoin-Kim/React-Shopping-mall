import React from 'react';
import Styled from 'styled-components';

const HeaderWrap = Styled.div`
    .header{
        display: flex;
        font-size: 30px;
        align-items : center;
        justify-content : space-between;
        height: 91px;
    }

`;



const Header = () => {
    return (
        <HeaderWrap>
        <div className="header">Review</div>
        </HeaderWrap>
    );
};

export default Header;