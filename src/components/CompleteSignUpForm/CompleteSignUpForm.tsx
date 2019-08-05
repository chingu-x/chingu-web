import React from "react";
import gql from "graphql-tag";
import { UserInfo } from "../../fragments";
import styles from "./CompleteSignUpForm.module.scss";

export const COMPLETE_SIGN_UP = gql`
  ${UserInfo}

  mutation completeSignUp($signUpInput: SignUpInput!) {
    completeSignUp(signUpInput: $signUpInput) {
      ...UserInfo
    }
  }
`;

export default function CompleteSignUpForm() {
  return (
    <div className={styles.container}>
    </div>
  );
}