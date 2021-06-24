import React from 'react';
import Style from 'styled-components';
import {connect} from 'react-redux';


const MainWrap = Style.div`
body{
    background-color: #f4f7f6;
    margin-top:20px;
}
.file_manager .file a:hover .hover,
.file_manager .file .file-name small{
    display: block
}
.file_manager .file {
    padding: 0 !important
}

.file_manager .file .icon{
    text-align: center
}


.file_manager .file {
    position: relative;
    border-radius: .55rem;
    overflow: hidden
}

.file_manager .file .image,
.file_manager .file .icon {
    height: 150px;
    overflow: hidden;
    background-size: cover;
    background-position: top
}

.file_manager .file .hover {
    position: absolute;
    right: 10px;
    top: 10px;
    display: none;
    transition: all 0.2s ease-in-out
}

.file_manager .file a:hover .hover {
    transition: all 0.2s ease-in-out
}

.file_manager .file .icon {
    padding: 15px 10px;
    display: table;
    width: 100%
}

.file_manager .file .icon i {
    display: table-cell;
    font-size: 30px;
    vertical-align: middle;
    color: #777;
    line-height: 100px
}

.file_manager .file .file-name {
    padding: 10px;
    border-top: 1px solid #f7f7f7
}

.file_manager .file .file-name small .date {
    float: right
}

.folder {
    padding: 20px;
    display: block;
    color: #777
}

@media only screen and (max-width: 992px) {
    .file_manager .nav-tabs {
        padding-left: 0;
        padding-right: 0
    }
    .file_manager .nav-tabs .nav-item {
        display: inline-block
    }
}

.card {
    background: #fff;
    transition: .5s;
    border: 0;
    margin-bottom: 30px;
    border-radius: .55rem;
    position: relative;
    width: 100%;
    height:250px;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 10%);
}



a:hover {
    text-decoration:none;
}


`;


const Main = (props) => {
    return (
        <MainWrap>
        <div id="main-content" class="file_manager">
            <div class="container">
                <div class="row clearfix">
                    {
                        props.state.map((a,index)=>{
                            return(
                            <div class="col-lg-3 col-md-4 col-sm-12">
                                <div class="card">
                                    <div class="file">
                                        <a href="javascript:void(0);">
                                            <div class="hover">
                                                <button type="button" class="btn btn-icon btn-danger">
                                                    Trash
                                                </button>
                                            </div>
                                            <div class="image">
                                            {a.image ? (
                                                    <img src={a.image} width="100%" height="100%"/>
                                                ) : (
                                                    <img src="https://blog.kakaocdn.net/dn/vNJ7h/btqEQtcG2gb/jV6hqgbGATSEYuKi0vJkAK/img.png" alt="img" class="img-fluid" />
                                                )}

                                            </div>
                                            <div class="file-name">
                                                {a.review ? (
                                                    <p class="m-b-5 text-muted">{a.review}</p>
                                                ):(
                                                    <p class="m-b-5 text-muted">리뷰를 남겨보세요!</p>
                                                )

                                                }
                                                
                                                <small>상품명 : {a.name}<div class="date text-muted">6월 25일, 2021</div></small>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                                   
                            )
                        })
                    }
                    
                </div>
            </div>
        </div>
        </MainWrap>
    );
};

function Card(props){

}

function Review(state){
    return{
        state:state
    }
}

export default connect(Review)(Main);