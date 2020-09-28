import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const LoginPhone = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input
          className="form-control"
          type="number"
          name="phone"
          id="phone"
          ref={register}
          placeholder="0821********"
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          className="form-control"
          type="password"
          name="password"
          id="password"
          ref={register}
        />
      </div>
      <button type="submit" className="btn btn-success">
        Login
      </button>
    </form>
  );
};

export default LoginPhone;
