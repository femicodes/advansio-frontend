import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchComments } from './redux/actions/comment';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const { comments } = useSelector(state => state.comments);
  const commentData = !comments ? [] : comments;

  useEffect(() => {
    dispatch(fetchComments());
  }, []);

  return (
    <div className="App">
      <h3>Commenter</h3>
      {commentData.map((item) => {
        return (
          <ul key={item.id}>
            <li>{item.body}</li>
          </ul>
        )
      })}
    </div>
  );
}

export default App;
