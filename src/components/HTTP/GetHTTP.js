import React, { Component } from "react";
import axios from "axios";
class GetHTTP extends Component {
  constructor(props) {
    super(props);

    this.state = { data: [], error: "" };
  }
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        this.setState({
          data: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          error: error,
        });
      });
  }
  render() {
    const { data, error } = this.state;
    return (
      <>
        <div>List of posts</div>
        {data.length
          ? data.map((post) => <div key={post.id}>{post.title}</div>)
          : null}

        {error ? "No data Found" : null}
      </>
    );
  }
}

export default GetHTTP;
