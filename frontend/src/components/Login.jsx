import React, { useState } from "react";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="auth-form-container">
      <h2>Contact</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="subject">Subject</label>
        <input type="text" placeholder="Subject" id="subject" name="subject" />

        <label htmlFor="email">Your Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="yourmail@gmail.com"
          id="email"
          name="email"
        />

        <label htmlFor="password">Message</label>
        <textarea
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          id="info"
          name="info"
          style={{ height: "200px", marginBottom: "2em",padding:"1em" }}
          placeholder="type in messages"
        ></textarea>
        <button type="submit">Send Mail</button>
      </form>
      {/* <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an Account? Register here.</button> */}
    </div>
  );
};
