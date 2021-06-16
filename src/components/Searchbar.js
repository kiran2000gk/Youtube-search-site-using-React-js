import React from "react";

class Searchbar extends React.Component {
  handleChange = (event) => {
    this.setState({
      term: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleFormSubmit(this.state.term);
  };

  render() {
    return (
      <>
        <h2 className="text-center">
          <img
            className=" w-25 h-25 m-3 justify-content-center"
            src="https://github.com/kiran2000gk/youtube-api/blob/7d8d33151ff0d0b840269e7fe45c3af543836d45/imgs.jpg?raw=true"
            alt="youtube logo"
          />
        </h2>

        <div className="container border border-light bg-light p-2">
          <form onSubmit={this.handleSubmit} className="form-group">
            <label htmlFor="video-search">Video Search</label>
            <input
              onChange={this.handleChange}
              name="video-search"
              type="text"
              class="form-control"
              placeholder="Search for youtube results"
            />
          </form>
        </div>
      </>
    );
  }
}
export default Searchbar;
