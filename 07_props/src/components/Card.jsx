// props:- props property ki tarah hai props ke jagah kuch vi likh skte hai, like property, abc etc

import React from "react";

const Card = (props) => {
  console.log(props);
  console.log(props.user); // output: console browser
  

  return (
    <div className="bg-white text-black text-center text-2xl rounded p-10">
      <h1>
        UserName:- {props.user} {props.surname}
      </h1>

      <h2>
        City:- {props.address}, Age:- {props.age}
      </h2>

      <button>Add Friend</button>
    </div>
  );
};
export default Card;
