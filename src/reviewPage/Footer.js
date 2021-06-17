import React from 'react';
import Style from 'styled-components';

const FootWrap = Style.div`
    .footer{
        height: 91px;
        display: flex;
        color : #585858;
        align-items:center;
        justify-content : center;

    }    
`;

const Footer = () => {
    return (
        <FootWrap>
        <div className="footer">Copyright&copy; 2021. Studio Ghibli Shop</div>
        </FootWrap>
    );
};

export default Footer;