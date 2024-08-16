import React from "react";
import contacts from "../contacts.js"
import "../../public/styles.css"
import Card from "./Card.jsx";
import Avatar from "./Avatar.jsx";

function App() {
  return(
  <div>
  <h1 className="heading">My Contacts</h1>
  <Avatar img="https://5.imimg.com/data5/SELLER/Default/2023/9/344928632/OW/RQ/XC/25352890/yellow-mango.jpeg"/>
    {/* for(let i=0;i<contacts.length;i++){
      
          <Card>
            name=contacts[i].name;
            img=contacts[i].imgUrl;
            tel=contacts[i].phone;
            email=contacts[i].email;
          </Card>
        
    } */}
    {/* The error you're encountering occurs because you can't use a for loop like that directly within JSX in React. In React, you should typically use the map() function to iterate over an array and render components. */}
    {/* contacts.map is inside curly braces because it is to be interpreted as javascript code  */}
    {/* we are calling the map() function and inside the parentheses we are passing in another function  */}
    {contacts.map((contact) => (
        <Card
          key={contact.id}
          k={contact.id}
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
