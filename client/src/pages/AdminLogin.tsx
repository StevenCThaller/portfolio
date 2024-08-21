import React from "react";
import { useState } from "react";
// import { handleSignin } from "../services/api.services";
import { useProvideAuth } from "../hooks/useAuth";

const initialState = {
  email: "",
  password: "",
};

function AdminLogin() {
  const [state, setState] = useState(initialState);
  const { signin } = useProvideAuth();

  const handleChange = (e: React.FormEvent<HTMLInputElement>) =>
    setState({
      ...state,
      [e.currentTarget.name]: e.currentTarget.value,
    });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await signin(state.email, state.password);
  };

  return (
    <div className="container gap">
      <h1>Welcome, Cody</h1>
      <p>Log in to access... stuff.</p>
      <form className="container gap w-60" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            name="email"
            id="email"
            value={state.email}
            onChange={handleChange}
            autoComplete="off"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password "
            value={state.password}
            onChange={handleChange}
            autoComplete="off"
          />
        </div>
        <div className="form-group">
          <button type="submit">Sign In</button>
        </div>
      </form>
    </div>
  );
}

export default AdminLogin;
