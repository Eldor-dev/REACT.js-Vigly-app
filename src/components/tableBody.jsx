import React, { Component } from "react";
import Like from "./common/like";
import _ from "lodash";

class TableBody extends Component {
  render() {
    const { data, columns, onDelete, onLike } = this.props;
    return (
      <tbody>
        {data.map((item) => (
          <tr>
            {columns.map((column) => (
              <td>{_.get(item, column.path)}</td>
            ))}
            <td>
              <Like liked={item.liked} onClick={() => onLike(item)} />
            </td>
            <td>
              <button
                onClick={() => onDelete(item._id)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
