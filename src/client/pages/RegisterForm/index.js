import React, { useState } from "react";
import {
  Container,
  Form,
  Input,
  Button,
  Error,
  Link,
  Success,
} from "./RegisterForm.styled";
import { validateEmail, validatePassword } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import { userRegister } from "../../redux/actions";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const dispatch = useDispatch();
  const {
    response: { status, message },
  } = useSelector((state) => state.register);
  let isVaildationFailed = false;

  const handleSubmit = (e) => {
    e.preventDefault();
    isVaildationFailed = false;
    // reset errors
    setEmailError("");
    setUsernameError("");
    setPasswordError("");

    // validate email, username, and password
    if (!validateEmail(email)) {
      isVaildationFailed = true;
      setEmailError("Invalid email address");
    }
    if (username.length < 3) {
      isVaildationFailed = true;
      setUsernameError("Username must be at least 3 characters");
    }
    if (!validatePassword(password)) {
      isVaildationFailed = true;
      setPasswordError(
        "Password must contain at least 8 characters with at least 1 uppercase letter, 1 special character, and 1 number"
      );
    }

    // if no errors, submit form
    if (!isVaildationFailed) {
      const payload = {
        username,
        email,
        password,
      };
      dispatch(userRegister(payload));
    }
  };

  return (
    <Container>
      <h1>Registration Form</h1>
      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && <Error>{emailError}</Error>}
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {usernameError && <Error>{usernameError}</Error>}
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordError && <Error>{passwordError}</Error>}
        {message && status != 200 && <Error>{message}</Error>}
        {message && status == 200 && <Success>{message}</Success>}
        <Button type="submit">Register</Button>
        <Link href="/login">Login</Link>
      </Form>
    </Container>
  );
};

export default RegisterForm;
