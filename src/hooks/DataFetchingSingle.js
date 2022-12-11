import axios from "axios";
import React, { useEffect, useState } from "react";

function DataFetchingSingle() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromButton, setIdFromButton] = useState(1);
  const handleButton = () => {
    setIdFromButton(id);
  };
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButton}`)
      .then((res) => {
        console.log(res.data.title);
        setPost(res.data);
      })
      .catch((err) => console.log(err));
  }, [idFromButton]);
  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={handleButton}>Fetch Post </button>
      <div>{post.title}</div>
    </div>
  );
}

export default DataFetchingSingle;
