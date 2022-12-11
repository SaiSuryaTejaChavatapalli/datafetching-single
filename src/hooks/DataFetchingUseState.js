import React, { useEffect, useState } from "react";
import axios from "axios";
function DataFetchingUseState() {
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        console.log(response.data);
        setLoading(false);
        setPost(response.data);
        setError("");
      })
      .catch((error) => {
        setLoading(false);
        setPost({});
        setError("Not working");
      });
  }, []);

  return (
    <div>
      <h1>{loading ? "Loading" : post.title}</h1>
      <p>{error ? error : null}</p>
    </div>
  );
}

export default DataFetchingUseState;
