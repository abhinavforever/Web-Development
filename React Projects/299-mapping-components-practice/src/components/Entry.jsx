/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types"
function Entry(props){
    return(
        <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label=''>
              {props.emoji}
            </span>
            <span>{props.name}</span>
          </dt>
          <dd>
            {props.meaning}
          </dd>
        </div>
    )
}
export default Entry