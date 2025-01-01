import Link from "next/link";

export default function Login() {
  return (
    <div>
      <h1>Welcome!</h1>
      <p>Enter details to login.</p>
      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <Link href="/">Forget Pasword</Link>
        <button>Login</button>
      </form>
    </div>
  );
}
