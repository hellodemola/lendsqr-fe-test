export default function TextInput({
  type,
  placeholder,
}: Readonly<{
  type: string;
  placeholder: string;
}>) {
  return <input type={type} placeholder={placeholder} />;
}
