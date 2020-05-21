import React from "react";

import { Paper, TextField } from "@material-ui/core";

class SearchBar extends React.Component {
  state = {
    searchTerm: "",
    value: "",
  };

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value,
      value: event.target.value,
    });
  };

  handleSubmit = (event) => {
    const { searchTerm } = this.state;
    const { onFormSubmit } = this.props;

    onFormSubmit(searchTerm);
    event.preventDefault();
    this.setState({ value: "" });
  };
  render() {
    return (
      <Paper elevation={6} style={{ padding: "25px" }}>
        <form onSubmit={this.handleSubmit}>
          <TextField
            fullWidth
            label="Search..."
            value={this.state.value}
            onChange={this.handleChange}
          />
        </form>
      </Paper>
    );
  }
}
export default SearchBar;
