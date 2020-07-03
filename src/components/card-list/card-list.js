import React from "react";
import "./card-list.css";
import { Card } from "../card/card";

// components take in props, which will be the param that we get from our function component
export const CardList = (props) => {
  console.log(props);

  return (
    <div className="card-list">
      {/* map returns us the return of whatever function we pass to it iterated over every element in the array*/}
      {props.monsters.map((monster) => (
        //passing monster into the card component
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};
