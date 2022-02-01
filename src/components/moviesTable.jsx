import React, { Component } from "react";
import TableHeader from "./common/tableHeader";
import TableBody from "./tableBody";
import Like from "./common/like";

class MoviesTable extends Component {
  columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: (movie) => (
        <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />
      ),
    },
    {
      key: "delete",
      content: (movie) => (
        <button
          onClick={() => this.props.onDelete(movie._id)}
          className="btn btn-danger"
        >
          Delete
        </button>
      ),
    },
  ];

  render() {
    const { movies, onDelete, onLike, sortColumn, onSort } = this.props;

    return (
      <table className="table">
        <TableHeader
          sortColumn={sortColumn}
          onSort={onSort}
          columns={this.columns}
        />
        <TableBody
          data={movies}
          onDelete={onDelete}
          onLike={onLike}
          columns={this.columns}
        />
      </table>
    );
  }
}

export default MoviesTable;
