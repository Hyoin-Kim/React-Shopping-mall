import React, {useState} from 'react';
import { Navbar,Nav,NavDropdown,Form,Button,FormControl,Jumbotron } from 'react-bootstrap';
import Styled from 'styled-components';
import Chihiro from './assets/chihiro014.jpg';
import Ghibli from './assets/totoro.png';
import Data from './data.js';
import { Link, Route, Switch} from 'react-router-dom';
import Detail from './Detail.js';


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

`;

const MiddleWrap =Styled.div`
  .card__title{

  }

  .card__price{

  }

`;






function App(){
  let [goods,setGoods] = useState(Data);
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
              <Nav.Link>Cart</Nav.Link>
              <NavDropdown title="Mypage" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Order</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Board</NavDropdown.Item>
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
              <div className="row">
                {
                goods.map( (a,i) => {
                  return <Card goods={goods[i]} i={i}/>
                })
              }
              </div>
            </div>
          </Route>

          <Route path="/detail/:id"> 
            <Detail goods={goods}/>
          </Route>    
          <Route path="/:id">
          </Route>  

        </Switch>
      </HeaderWrap>
    </div>
  )
}



function Card(props){
  return(
      <div className="col-md-3">
        <img src={props.goods.image}></img>
        <h5 className="card__title">{props.goods.title}</h5>
        <p className="card__price">{props.goods.price}</p>
      </div>
      

  )
}

export default App;
