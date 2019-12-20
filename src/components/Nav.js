import React, { Component } from "react";

class Nav extends Component {
  render() {
    const { toggleNote, showNote } = this.props;

    return (
      <div className="nav-container">
        <div className="nav-logo">Notes</div>
        <div className="nav-logo">
          <a href="https://ny-article-search.herokuapp.com/" style={{textDecoration:"none"}} >
            .    .NYT Article Search
          </a>
        </div>
        <div className="nav-button" onClick={() => toggleNote()}>
          {showNote ? "Cancel" : "+ Note"}
        </div>
      </div>
    );
  }
}

export default Nav;
