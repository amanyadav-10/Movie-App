
import React,{useEffect,useState} from "react";
import Skeleton,{SkeletonTheme} from "react-loading-skeleton"  // togive of loadingwhile the api is being called

import "./cards.css" // here we have written the css for the cards 

import { Link } from "react-router-dom"; //to use as anchor 



// this is the most used somponent of the project and most important one too


const  Card = ({movie}) =>{

    const [isLoading ,setIsloading] = useState(true);
    useEffect(()=>{
        setTimeout(() =>{
            setIsloading(false)
        },1600)
    },[])

    return <>
        {
            isLoading 
            
            ?

            <div className="cards">
                <SkeletonTheme color="#202020" highlightColor="#444">
                    <Skeleton height ={300} duration = {2}/>
                </SkeletonTheme>
            </div>
            :

            <Link to={`/movie/${movie.id}`} style={{textDecoration:"none",color:"white"}}>
                <div className="cards">
                        <img className="cards_img" src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`}></img>

                        <div className="cards_overlay">
                            <div className="card_title">{movie?movie.original_title:""}</div>

                            <div className="card_runtime">
                                {movie?movie.release_date:""}
                                <span className="card_rating">{movie?movie.vote_average:""}<i classname="fas fa-star"/> </span>
                            </div>

                            <div className="card_description">{movie ? movie.overview.slice(0,100)+"...": ""}</div>
                        </div>

                </div>
            </Link>


        }
    </>
}

export default Card

