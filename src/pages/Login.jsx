import React, { useState } from "react";
import LoginEmail from "../components/LoginEmail";
import LoginPhone from "../components/LoginPhone";

const Login = () => {
  const [useEmail, setUseEmail] = useState(true);
  return (
    <div className="container py-3">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card border-0 shadow">
            <div className="card-body">
              {useEmail === true ? <LoginEmail /> : <LoginPhone />}
              <hr />
              <p
                style={{ cursor: "pointer" }}
                className="m-0"
                onClick={() => setUseEmail(!useEmail)}
              >
                {useEmail === true ? "Use phone" : "Use email"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
