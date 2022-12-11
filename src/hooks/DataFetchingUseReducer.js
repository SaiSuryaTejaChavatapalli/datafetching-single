import axios from "axios";
import React, { useEffect, useReducer } from "react";
const initalState = {
  post: {},
  error: "",
  loading: true,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        post: action.payload,
        error: "",
        loading: false,
      };
    case "FETCH_FAILURE":
      return {
        post: {},
        error: "Something went wrong",
        loading: false,
      };
    default:
      return state;
  }
};
function DataFetchingUseReducer() {
  const [state, dispatch] = useReducer(reducer, initalState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/2")
      .then((resp) => {
        console.log(resp);
        dispatch({ type: "FETCH_SUCCESS", payload: resp.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: "FETCH_FAILURE" });
      });
  }, []);
  return (
    <div>
      {state.loading ? "Loading" : state.post.title}
      {state.error ? state.error : null}
    </div>
  );
}

export default DataFetchingUseReducer;
