"use client";

import { useActionState } from "react";
import AuthLayout from "../authLayout";

const intialData = {
  firstName: "",
  lastName: "",
  email: "",
};

function handleSignUp(previousState: typeof intialData, formData: FormData) {
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const email = formData.get("email") as string;

  return {
    firstName: firstName ?? previousState.firstName,
    lastName: lastName,
    email: email,
  };
}

export default function SignUp() {
  const [state, formAction] = useActionState(handleSignUp, intialData);
  return (
    <AuthLayout>
      <h1 className="auth-heading">Sign up</h1>
      <p className="auth-subHeading">Enter details to register.</p>
      <form action={formAction}>
        {JSON.stringify(state)}
        <input type="text" placeholder="first name" name="firstName" required />
        <input type="text" placeholder="last name" name="lastName" required />
        <input type="email" placeholder="email" name="email" required />
        <button type="submit">Sign up</button>
      </form>
    </AuthLayout>
  );
}
