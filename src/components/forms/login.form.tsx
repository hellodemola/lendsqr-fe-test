import Link from "next/link";
import { PasswordInput, TextInput } from "../common/input";

export default function LoginForm() {
  return (
    <form>
      <TextInput type="text" placeholder="Email" />
      <PasswordInput placeholder="Password" />
      <Link href="/" className="auth-link">
        Forget Pasword?
      </Link>
      <button>Log in</button>
    </form>
  );
}
