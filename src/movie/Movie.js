import React,{useState} from 'react';
import Style from 'styled-components';
import MovieData from './movieData';



const MovieWrap = Style.div`
    .movie__card{
        margin:auto;
        align-self: center;
        text-align: center;

    }
    .movie__title{
        text-align:center;
        padding-top:80px;
        font-size: 27px;
        font-weight: bold;
        font-style: italic;
        color: #0B3B24;

    }


`;

const Movie = () => {

    const [data,setData] =useState(MovieData);

    return (
        <MovieWrap>
        <div className="menu__bar">
        {
            data.map((a,index)=>{
                return <Menu data={data[index]} index={index} key={index}/>
                
            })
        }
        </div>
        </MovieWrap>
    );
};

function Menu(props){
    return (
        <div className="movie__card">
        <div className="movie__title">[ {props.data.title} ]</div>
        <img src={props.data.image}></img>
        </div>
    )
}
function Card(props){
    return(
        <div className="movie__detail">{props.data.image}</div>
    )

}

export default Movie;