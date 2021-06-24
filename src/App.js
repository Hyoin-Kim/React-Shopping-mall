import React, {useContext, useState,useRef, history} from 'react';
import { Navbar,Nav,NavDropdown,Form,Button,FormControl,Jumbotron } from 'react-bootstrap';
import Styled from 'styled-components';
import Chihiro from './assets/chihiro014.jpg';
import Ghibli from './assets/totoro.png';
import Data from './data.js';
import { Link, Route, Switch, useHistory} from 'react-router-dom';
import Detail from './Detail.js';
import Cart from './Cart.js';
import ReviewHeader from './reviewPage/Header';
import ReviewMain from './reviewPage/Main';
import ReviewFooter from './reviewPage/Footer';
import Movie from './movie/Movie';
import MovieData from './movie/movieData';
import Order from './Order';


const HeaderWrap = Styled.div`
  .Header_title{
    height: 70px;
    weight: 0px;

  }

  .Header_background{
    background-image: url(${Chihiro});
    background-size: cover;
    color:white;
  }

  .button__more{
    margin:auto;
  }
  .dropdown{
    position: relative;
    display: inline-block;
  }

  .menu{
    display:inline-block;
    padding: 30px;
    font-size : 23px;
    margin-left : 100px;
    border:none;
    &:hover{
      cursor : pointer;
    }
  }


  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
  }

  .dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }
  
  .dropdown-content a:hover {background-color: #ddd;}
  
  .dropdown:hover .dropdown-content {display: block;}
  
  .dropdown:hover .dropbtn {background-color: #3e8e41;}


  .form-control{
    width: 250px;
  }

  .row{
    padding:40px;
  }

`;

const MiddleWrap =Styled.div`
  .card__title{

  }

  .card__price{

  }
  .main__card{
    padding-right:60px;
    width:300px;
    text-align:center;
  }
  .card__img{
    height:250px;
    width:250px;
  }

`;


export let stockContext=  React.createContext(); //같은 변수값을 공유할 범위 생성
//props의 사용없이 state에 공유가능

const getCurrDate = () => {
  const now = new Date();
  const currYear = now.getFullYear();
  const currMonth = now.getMonth();
  return { year: currYear,month:currMonth};

}


function App(){
  const[search,setSearch]=useState(''); 
  const inputEl =useRef("");

  const [year,setYear] = useState(getCurrDate().year);
  const [month,setMonth] = useState(getCurrDate().month);

  let [goods,setGoods] = useState(Data);
  let [moviedata,setMovieData] = useState(MovieData);
  let [stock,setStock] = useState([10,11,12,9,6,4,2,15,9,3,15,17]);

  let history=useHistory();

  return (
    <div className="App">
      <HeaderWrap>
        <Navbar bg="light" expand="lg" className="">
        <img className="Header_title" src={Ghibli}></img>
          <Navbar.Brand href="/">STUDIO GHIBLI SHOP</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link><Link to="/">Home</Link></Nav.Link>
              <Nav.Link><Link to="/cart">Cart</Link></Nav.Link>
              <NavDropdown title="Mypage" id="basic-nav-dropdown">
                <NavDropdown.Item><Link to="/review">Review</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="/order">Order</Link></NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Q & A</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
        
          <Route exact path="/">
            <Jumbotron className="Header_background">
              <h1>Welcome to STUDIO GHIBLI SHOP</h1>
              <p>Meet various Studio Ghibli Goods</p>
              <p>
                <Button variant="btn btn-light">Show more</Button>
              </p>
            </Jumbotron>

            

            <div className="container">
              <div class="input-group">
                      <input placeholder="Search for..." type="text" class="form-control"
                       onChange={event=>{setSearch(event.target.value)}}/>
                      <div class="input-group-append">
                          <button class="btn btn-secondary">search</button>
                      </div>
              </div>
              <ul className="dropdown">
                <li className="menu" data-toggle="dropdown" onClick={ ()=>history.push('/movie')}>Movie</li>
                  {
                    moviedata.map( (a,index)=>{
                      return <Menu moviedata={moviedata[index]} index={index} key={index} />
                    })
                  }

                <li className="menu">Goods</li>
                <li className="menu" onClick={()=>{history.push('./review')}}>Review</li>
                <li className="menu">Best 10</li>
              </ul>
    

              <stockContext.Provider value={stock}> 
                <div className="row">
                  {
                  goods.filter((val)=>{
                  if(search ===""){
                    return val;
                  }else if(val.title.includes(search)){
                    return search;
                  }
                  }).map( (a,index) => {
                    return <Card goods={goods[index]} index={index} key={index}
                    />
                  })
                }
                </div>
              </stockContext.Provider>
              
            </div>
          </Route>

          <Route path="/detail/:id"> 
            <stockContext.Provider value={stock}>
            <Detail goods={goods} stock={stock} setStock={setStock}/>
            </stockContext.Provider>
          </Route>    


          <Route path="/cart">
            <Cart />
          </Route>

          <Route path="/movie">
            <Movie />
          </Route>

          <Route path ="/review">
            <ReviewHeader />
            <ReviewMain currYear={year} setCurrYear={setYear} currMonth={month} setCurrMonth={setMonth}/>
            <ReviewFooter />
          </Route>

          <Route>
            <Order />
          </Route>

        </Switch>
      </HeaderWrap>
    </div>
  )
}

function Menu(props){
  return(
    <div className="dropdown-content">
    <a href="#">이웃집 토토로</a>
    <a href="#">마녀배달부 키키</a>
    <a href="#">센과 치히로의 행방불명</a>
    <a href="#">하울의 움직이는 성</a>
    <a href="#">천공의 성 라퓨타</a>
    <a href="#">원령공주</a>
    <a href="#">귀를 기울이면</a>
    <a href="#">벼랑 위의 포뇨</a>
    <a href="#">바람계곡의 나우시카</a>
    
  </div>

  )
}



function Card(props){
  let stock = useContext(stockContext); 
  let history=useHistory();

  return(

      <div className="col-md-3 goods__card" onClick={()=>history.push('/detail/' + props.goods.id )}>
        <MiddleWrap>
          <div className="main__card">
            <img className="card__img" src={props.goods.image}></img>
            <h5 className="card__title" >{props.goods.title}</h5>
            <p className="card__price">{props.goods.price}</p>
            <p>재고 : {stock[props.index]}개 남음</p>
          </div>
        </MiddleWrap>

      </div>

  )
}



export default App;
