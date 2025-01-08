import { LoginForm } from "@/components/forms";
import AuthLayout from "./authLayout";

export default function Login() {
  return (
    <AuthLayout>
      <h1 className="auth-heading">Welcome!</h1>
      <p className="auth-subHeading">Enter details to login.</p>
      <LoginForm />
    </AuthLayout>
  );
}
