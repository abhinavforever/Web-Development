import React from "react";
import "../../public/styles.css"
import Avatar from "./Avatar";
import Info from "./Info"
function Card(props){
    return (
    <div>
      
      <div className="card">
        <div className="top">
          <Info detailinfo={props.k}/>
          <h2 className="name">{props.name}</h2>
          < Avatar img={props.img}/>
        </div>
        <div className="bottom ">
        <Info detailinfo={props.tel}/>
        <Info detailinfo={props.email}/>
        </div>
      </div>

    </div>
    )
  }
  
  export default Card