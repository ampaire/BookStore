import React from 'react';
import { createStore } from 'redux';

export default function BooksList() {
  return (
    <div>
      <table>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </table>
    </div>
  );
}
