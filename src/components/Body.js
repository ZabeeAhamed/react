import Resturant from "./Resturant"
import Shimmer from "./Shimmer";
import { useState,useEffect } from "react";
import { RES_API } from "../utils/contants";
import { Link } from "react-router-dom";


const Body=()=>{
    const [listResturant,setlistResturant]=useState([]);
    const [filterResturant,setFilterResturant]=useState([]);

    const [searchbtn,setsearchbtn]=useState("");

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData= async ()=> {
        const data =await fetch(RES_API);
        const json= await data.json();
        console.log(json.data.cards);
        console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setlistResturant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterResturant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    if(listResturant.length===0)
    {
        return <Shimmer />
    }
    return(
        <div className="body">
            <div className="filter">
                <input type="text" className="search" value={searchbtn} onChange={(e) =>{
                    setsearchbtn(e.target.value);
                }} />
                <button className="search" onClick={()=>{
                    const filterlist=listResturant.filter(
                        (res) => res.info.name.toLowerCase().includes(searchbtn.toLowerCase()));
                    setFilterResturant(filterlist);
                }}>Search</button>
                <button className="filter-btn" onClick={()=>{
                const filterlist=listResturant.filter(
                    (res) => res.info.avgRating>4.3
                );
                setFilterResturant(filterlist);
            }}>Top Rated Resturants</button></div>
            <div className="res-container">
                {
                    filterResturant.map((resturant) =>(
                    <Link key={resturant.info.id} to={"/resturant/"+ resturant.info.id}>
                    <Resturant resData={resturant}/>
                    </Link>))

                }
            </div>
        </div>
    )
}

export default Body;