export default function UserTable() {
  const headings = [
    "organizations",
    "username",
    "email",
    "phone number",
    "date joined",
    "status",
  ];
  return (
    <table>
      <thead>
        <tr>
          {headings.map((heading, index) => (
            <th key={index}>{heading}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Lendsqr</td>
          <td>Adedeji</td>
          <td>
            <a href="adedeji@lendsqr.com">adedeji@lendsqr.com</a>
          </td>
          <td>
            <a href="tel:08078903721">08078903721</a>
          </td>
          <td>May 15, 2020 10:00 AM</td>
          <td>
            <span className="status active">active</span>
          </td>
        </tr>
        <tr>
          <td>Lendsqr</td>
          <td>Adedeji</td>
          <td>
            <a href="adedeji@lendsqr.com">adedeji@lendsqr.com</a>
          </td>
          <td>
            <a href="tel:08078903721">08078903721</a>
          </td>
          <td>May 15, 2020 10:00 AM</td>
          <td>
            <span className="status active">active</span>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
