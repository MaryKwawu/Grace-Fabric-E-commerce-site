import { createContext, useState } from "react";
import * as React from "react";

export const UserContext = createContext([
  { token: "", user: {} },
  function (value) {},
]);

const UserContextProvider = (props) => {
  const { value } = props;
  const [user, setUser] = useState(value);

  return (
    <UserContext.Provider value={[user, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;
