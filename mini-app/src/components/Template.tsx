export default function Template({ value1, value2 }) {
  return (
    <tbody>
      <tr className="flex flex-row justify-between wmax-[15rem] mr-[1rem]">
        <th className="pr-3">{value1}</th>
        <td>{value2}</td>
      </tr>
    </tbody>
  );
}
