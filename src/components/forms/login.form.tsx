"use client";
import Link from "next/link";
import { PasswordInput, TextInput } from "../common/input";
import { FieldValue, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "@/utils/schemaValidations/login.schema";
import { ErrorMessage } from "@hookform/error-message";
import { useRouter } from "next/navigation";

interface handleLoginProps {
  email: string;
  password: string;
}

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isValid, errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(LoginSchema),
    delayError: 1000,
  });

  const router = useRouter();

  const handleLogin = (data: FieldValue<handleLoginProps>) => {
    console.log({ data });
    router.push("/dashboard/users");
  };

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <TextInput
        {...register("email")}
        type="text"
        placeholder="Email"
        required
      />
      <ErrorMessage
        errors={errors}
        name="email"
        as=<p className="error-message"></p>
      />

      <PasswordInput
        {...register("password")}
        placeholder="Password"
        required
      />
      <ErrorMessage
        errors={errors}
        name="password"
        as=<p className="error-message"></p>
      />
      <Link href="/" className="auth-link">
        Forget Pasword?
      </Link>
      <button disabled={isSubmitting || !isValid} type="submit">
        Log in
      </button>
    </form>
  );
}
