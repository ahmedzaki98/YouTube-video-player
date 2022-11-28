import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onTermSubmit(this.state.term);
  };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };
  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <input
              type="text"
              placeholder="Search"
              value={this.state.term}
              onChange={this.onInputChange}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
