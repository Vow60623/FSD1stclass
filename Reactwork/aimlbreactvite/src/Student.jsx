import React from "react";
import "./Student.css";

function student({ data }) {
  return (
    <div className="iCard">
      {/* {JSON.stringify(data)} */}
      <table>
        <tbody>
          <tr>
            <td colSpan={2}>{data.college}</td>
          </tr>
          <tr>
            <th colSpan={2}>
              <img src="{data.pic}" alt="" height={100} width={100} />
            </th>
          </tr>
          <tr>
            <td>Roll:</td>
            <td>{data.roll}</td>
          </tr>
          <tr>
            <td>Name:</td>
            <td>{data.name}</td>
          </tr>
          <tr>
            <td>Branch:</td>
            <td>{data.branch}</td>
          </tr>
          <tr>
            <td>Section:</td>
            <td>{data.section}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default student;
