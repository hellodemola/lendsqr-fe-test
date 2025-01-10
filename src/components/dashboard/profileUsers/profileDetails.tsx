interface ProfileDetailsProps {
  title: string;
  text: string | number;
  isStatus?: boolean;
}

const convertStatus = (status: string | number) => {
  if (typeof status === "string") {
    const formatStatus = status.toLocaleLowerCase();
    if (formatStatus === "uploaded" || formatStatus === "completed")
      return "active";
    return formatStatus;
  }
  return status;
};

export default function ProfileDetails({
  title,
  text,
  isStatus,
}: ProfileDetailsProps) {
  return (
    <div>
      <h4>{title}</h4>
      {isStatus ? (
        <span
          style={{ marginTop: "1em", display: "block", width: "fit-content" }}
          className={`status ${convertStatus(text)}`}
        >
          {text}
        </span>
      ) : (
        <p>{text}</p>
      )}
    </div>
  );
}
