import React, { useState } from "react";

function App() {
  const [number, setNumber] = useState("");
  const [tableData, setTableData] = useState([]);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setNumber(value);

    if (value !== "") {
      const table = generateTable(value);
      setTableData(table);
    } else {
      setTableData([]);
    }
  };

  const generateTable = (number) => {
    const table = [];
    for (let i = 1; i <= 10; i++) {
      table.push(
        <tr key={i}>
          <td>{i * number}</td>     
        </tr>
      );
    }
    return table;
  };

  return (
    <div><h1>Generate table</h1>
      <input
        type="number"
        value={number}
        onChange={handleInputChange}
        placeholder="Enter a number"
      />
      {number !== "" && (
        <table>
          <thead>
            <tr>
              <th>Number</th>
            </tr>
          </thead>
          <tbody>{tableData}</tbody>
        </table>
      )}
    </div>
  );
}

export default App;
