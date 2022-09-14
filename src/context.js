import React, { useContext } from "react";

function context() {
  const userDetails = useContext(UserContext);
  const dispatch = useContext(UserDispatchContext);
}

export default context;
