import React from "react";

import Input from "../../common/components/input";

import signUpPayloadSchema from "../../../shared/users/payloads/sign-up";
import type { SignUpPayload } from "../../../shared/users/payloads/sign-up";
import { useSignUpMutation } from "../api";

import "./sign-up.css";

function SignUp() {
  const [formData, setFormData] = React.useState({
    username: "",
    password: "",
  });

  const [signUp, signUpResult] = useSignUpMutation();

  const formSchemaShape = signUpPayloadSchema.shape;

  async function handleOnSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    let payload: SignUpPayload;
    try {
      payload = signUpPayloadSchema.parse(formData);
    } catch (error) {
      console.error("error while validating payload;", error);
      return;
    }

    await signUp(payload);
  }

  function onUsernameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormData((previousFormData) => ({
      ...previousFormData,
      username: event.target.value,
    }));
  }

  function onPasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormData((previousFormData) => ({
      ...previousFormData,
      password: event.target.value,
    }));
  }

  return (
    <>
      <h1>Sign up</h1>
      <form onSubmit={handleOnSubmit} className="form">
        <Input
          id="username"
          placeholder="Username"
          label="Username"
          minLength={formSchemaShape.username.minLength ?? undefined}
          autoComplete="username"
          onChange={onUsernameChange}
        />
        <Input
          type="password"
          id="password"
          placeholder="Password"
          label="Password"
          minLength={formSchemaShape.password.minLength ?? undefined}
          autoComplete="current-password"
          onChange={onPasswordChange}
        />
        <input type="submit" disabled={signUpResult.isLoading} />
      </form>
    </>
  );
}

export default SignUp;
