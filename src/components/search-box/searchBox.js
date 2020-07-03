import React from "react";
import "./search-box.css";

export const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className="search"
    type="search"
    //we want placeholder to be a prop that gets passed in
    placeholder={placeholder}
    //if we want to do something with our state right after we set it, have to do it inside 2nd arg function that will get called after setState
    // onChange={(e) => this.setState({ searchField: e.target.value },()=>console.log(this.state));
    onChange={handleChange}
  />
);
