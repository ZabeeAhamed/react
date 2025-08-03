import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/contants";

const ResturantMenu=()=>{
    const {resid}=useParams();
    console.log(resid);
    const [resMenu,setResMenu]=useState(null);
    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu=async ()=>{
        const data=await fetch(MENU_API+resid);
        const json=await data.json();

        console.log(json);
        setResMenu(json?.data);
    };
    if(resMenu===null) return <Shimmer/>;
    const {name,cuisines,costForTwoMessage}=resMenu?.cards[2]?.card?.card?.info;

    const  {itemCards} =resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    
    console.log(resMenu);
    console.log(itemCards);
    return (
        
        <div>
            <h1>{name}</h1>
            <h3>{cuisines.join(", ")}-{costForTwoMessage}</h3>
            <h3>Menu</h3>
            <ul>
            {itemCards.map((item) =>( 
                <li key={item.card.info.id}>{item.card.info.name} -{item.card.info.price/100}</li>
            ))}
            </ul>
        </div>
    )
};
export default ResturantMenu;