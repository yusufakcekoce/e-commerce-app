import { createContext, useState} from "react";

const UserContext = createContext(undefined);
const UserDispatchContext = createContext(undefined);

function UserProvider({ children }) {
  const [userDetails, setUserDetails] = useState({
    username: "",
    basket: [],
  });

  return (
    <UserContext.Provider value={userDetails}>
      <UserDispatchContext.Provider value={setUserDetails}>
        {children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  );
}
export { UserProvider, UserContext, UserDispatchContext };
