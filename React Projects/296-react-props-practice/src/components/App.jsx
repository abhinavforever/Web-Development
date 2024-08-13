import React from "react";
import contacts from "../contacts.js"
import "../../public/styles.css"

function Card(props){
  return (
  <div>
    
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <img className="circle-img"
          src={props.img}
          alt="avatar_img"
        />
      </div>
      <div className="bottom ">
        <p className="info">{props.tel}</p>
        <p className="info">{props.email}</p>
      </div>
    </div>
  </div>
  )
}

function App() {
  return(
  <div>
  <h1 className="heading">My Contacts</h1>
    {/* for(let i=0;i<contacts.length;i++){
      
          <Card>
            name=contacts[i].name;
            img=contacts[i].imgUrl;
            tel=contacts[i].phone;
            email=contacts[i].email;
          </Card>
        
    } */}
    {/* The error you're encountering occurs because you can't use a for loop like that directly within JSX in React. In React, you should typically use the map() function to iterate over an array and render components. */}
    
    {contacts.map((contact, index) => (
        <Card
          key={index}
          name={contact.name}
          img={contact.imgURL}
          tel={contact.phone}
          email={contact.email}
        />
      ))}
  </div>
  );
    
}


export default App;
