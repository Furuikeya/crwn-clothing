import React from "react";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

import { SigninAndSignupContainer } from "./sign-in-and-sign-up.styles";
// import './sign-in-and-sign-up.styles.scss'

const SignInAndSignUpPage = () => (
  <SigninAndSignupContainer>
    <SignIn></SignIn>
    <SignUp></SignUp>
  </SigninAndSignupContainer>
);

export default SignInAndSignUpPage;
