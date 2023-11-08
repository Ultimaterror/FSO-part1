import React from "react";

export default function StatisticLine({ name, value }) {
  return (
    <tr>
      <td>{name}</td>
      <td>{value}</td>
    </tr>
  );
}
