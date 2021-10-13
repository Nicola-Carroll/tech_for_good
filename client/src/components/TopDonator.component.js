import React from 'react';

function TopDonator(props) {
  return (
    <tr>
      <td className="text-center">{props.name}</td>
      <td className="text-center">{props.donations}</td>
    </tr>
  );
}

export default TopDonator;
