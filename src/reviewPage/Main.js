import React from 'react';
import Style from 'styled-components';
import Card from '../components/review/Card';
import NewCard from '../components/review/NewCard';


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
    max-height: 180px;
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
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 10%);
}

a:hover {
    text-decoration:none;
}


`;


const Main = ({year, month, history}) => {
    return (
        <MainWrap>
        <div id="main-content" class="file_manager">
            <div class="container">
                <div class="row clearfix">
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
                                        <img src="https://via.placeholder.com/280x280/87CEFA/000000" alt="img" class="img-fluid" />
                                    </div>
                                    <div class="file-name">
                                        <p class="m-b-5 text-muted">img21545ds.jpg</p>
                                        <small>Size: 2MB <span class="date text-muted">Dec 11, 2017</span></small>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div> 
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
                                        <img src="https://via.placeholder.com/280x280/FF69B4/000000" alt="img" class="img-fluid" />
                                    </div>
                                    <div class="file-name">
                                        <p class="m-b-5 text-muted">img21545ds.jpg</p>
                                        <small>Size: 2MB <span class="date text-muted">Dec 11, 2017</span></small>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </MainWrap>
    );
};

export default Main;