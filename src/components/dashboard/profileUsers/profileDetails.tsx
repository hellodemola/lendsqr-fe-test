interface ProfileDetailsProps {
  title: string;
  text: string | number;
}

export default function ProfileDetails({ title, text }: ProfileDetailsProps) {
  return (
    <div>
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
}
