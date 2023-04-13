import React, { useEffect, useState } from "react";
import { Container, Form, Input, Button, Error, Link } from "./LoginForm.styled";
import { validateEmail, validatePassword } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../redux/actions";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  let isVaildationFailed = false;
  const dispatch = useDispatch();
  const { isLoggedIn, response } = useSelector((state) => state.login);
  let navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/home");
    }
  }, [isLoggedIn]);
  const handleSubmit = (e) => {
    e.preventDefault();
    isVaildationFailed = false;
    // reset errors
    setEmailError("");
    setPasswordError("");

    // validate email and password
    if (!validateEmail(email)) {
      setEmailError("Invalid email address");
      isVaildationFailed = true;
    }
    if (!validatePassword(password)) {
      setPasswordError(
        "Password must contain at least 8 characters with at least 1 uppercase letter, 1 special character, and 1 number"
      );
      isVaildationFailed = true;
    }

    // if no errors, submit form
    if (!isVaildationFailed) {
      const payload = {
        email,
        password,
      };
      dispatch(userLogin(payload));
      console.log("Form submitted", payload);
    }
  };

  return (
    <Container>
      <h1>Login Form</h1>
      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && <Error>{emailError}</Error>}
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordError && <Error>{passwordError}</Error>}
        {response?.message && <Error>{response.message}</Error>}
        <Button type="submit">Login</Button>
        <Link href="/register">Register</Link>
      </Form>
    </Container>
  );
};

export default LoginForm;
