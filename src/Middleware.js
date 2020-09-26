import React, { useContext, useEffect } from "react";
import { AuthContext } from "./Contexts";
import axios from "axios";

const Middleware = (props) => {
  const [auth, setAuth] = useContext(AuthContext);
  const apiUrl = "http://check.test/isAuth";

  useEffect(() => {
    // main
    // checkAuth();

    // dummy
    setTimeout(() => {
      setAuth(true);
    }, 3000);
  }, [setAuth, auth]);

  async function checkAuth() {
    await axios
      .get(apiUrl)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  if (auth === undefined) {
    return <h1>Checking</h1>;
  } else if (auth === true) {
    return <div>{props.children}</div>;
  } else {
    return <h1>Not Authenticated</h1>;
  }
};

export default Middleware;
