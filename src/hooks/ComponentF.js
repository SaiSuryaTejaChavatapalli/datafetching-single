import React, { useContext } from "react";
import { ChannelContext, UserContext } from "../App";
function ComponentF() {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);
  return (
    <div>
      {user}-{channel}
    </div>
  );
}

export default ComponentF;

{
  /* <div>
<UserContext.Consumer>
  {(user) => {
    return (
      <ChannelContext.Consumer>
        {(channel) => {
          return (
            <h1>
              Hello {user} This is my channel {channel}{" "}
            </h1>
          );
        }}
      </ChannelContext.Consumer>
    );
  }}
</UserContext.Consumer>
</div> */
}
