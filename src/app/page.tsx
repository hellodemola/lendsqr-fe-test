import { LoginForm } from "@/components/forms";

export default function Login() {
  return (
    <div>
      <h1 className="auth-heading">Welcome!</h1>
      <p className="auth-subHeading">Enter details to login.</p>
      <LoginForm />
    </div>
  );
}
