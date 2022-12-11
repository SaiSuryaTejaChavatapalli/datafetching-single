import axios from "axios";
import React, { useEffect } from "react";
//AXIOS GLOBALS
axios.defaults.headers.common["X-Auth-Token"] =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});
function AxiosPr() {
  const configu = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "sometoken",
    },
  };
  useEffect(() => {
    axiosInstance
      .get("/comments", { timeout: 5000 })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);
  return <div>axiosPr</div>;
}

export default AxiosPr;

// axios({
//     method: "get",
//     url: "https://jsonplaceholder.typicode.com/todos",
//     params: { _limit: 5 },
//   })

// axios({
//     method: "post",
//     url: "https://jsonplaceholder.typicode.com/todos",
//     data: {
//       title: "New Post",
//       completed: true,
//     },
//   })
// axios
// .post("https://jsonplaceholder.typicode.com/todos", {
//   title: "New Post2",
//   completed: false,
// })

// axios
// .put("https://jsonplaceholder.typicode.com/todos/1", {
//   title: "Updated Post2",
//   completed: true,
// })
// .then((res) => console.log(res))
// .catch((err) => console.log(err));
//put replaces everything removes userId in this case
// axios
// .patch("https://jsonplaceholder.typicode.com/todos/1", {
//   title: "Updated Post2",
//   completed: true,
// })
// .then((res) => console.log(res))
// .catch((err) => console.log(err));
//Patch just updates not replaces,keeps userid

// axios
//       .delete("https://jsonplaceholder.typicode.com/todos/1")
//       .then((res) => console.log(res))
//       .catch((err) => console.log(err));

// axios
//       .all([
//         axios.get("https://jsonplaceholder.typicode.com/todos"),
//         axios.get("https://jsonplaceholder.typicode.com/posts"),
//       ])
//       .then(
//         axios.spread((t, p) => {
//           console.log(t);
//           console.log(p);
//         })
//       )
//       .catch((err) => console.log(err));
//Error
// axios
//       .get("https://jsonplaceholder.typicode.com/todoss",{validateStatus:function(status){ return status<500 }})
//       .then((res) => console.log(res))
//       .catch((err) => {
//         console.log(err);
//         console.log(err.response.data);
//         console.log(err.response.status);
//         console.log(err.response.headers);
//         if (err.response.status === 404) {
//           alert("Error:Page Not Found");
//         } else if (err.request) {
//           console.log(err.request);
//         } else {
//           console.log(err.message);
//         }
//         // console.log(err.response.headers);
//       });
