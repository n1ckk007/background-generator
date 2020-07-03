import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list";
import "./App.css";
import { SearchBox } from "./components/search-box/searchBox";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      //we need to display a list of monsters
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    //fetching the url
    fetch("https://jsonplaceholder.typicode.com/users")
      //taking the response and converting it to json
      .then(
        (response) =>
          //console.log(response)
          response.json() //method on this response object that gives us back that response in json format
      )
      .then((
        //take the users that we got back and set our monsters to that array of users
        users //console.log(users)
      ) => this.setState({ monsters: users }));
  }

  handleChange(e) {
    this.setState({ searchField: e.target.value });
  }

  render() {
    // filter out the elements in the array based off of the function that we pass it, filter will also give back a new array instead of modifying og array
    const { monsters, searchField } = this.state; //pulling off the searchfield and monsters value off of our state objects and setting them to const objects
    //includes checks whether the string val we pass inside of includes is in the string its being called on
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <SearchBox
          placeholder="Search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
        {/* any param we pass into CardList is sent as props */}
      </div>
    );
  }
}
