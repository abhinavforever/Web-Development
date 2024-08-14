/* eslint-disable no-unused-vars */
import React from "react";
import emojipedia from "../emojipedia.js"
import Entry from "./Entry.jsx"

function App() {
  return (
    <div>
      
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
      {emojipedia.map((contact)=>(
        <Entry 
        key={contact.id}
        name={contact.name}
        emoji={contact.emoji}
        meaning = {contact.meaning}
        />
      ))}
      </dl>

    </div>
  );
}

export default App;
