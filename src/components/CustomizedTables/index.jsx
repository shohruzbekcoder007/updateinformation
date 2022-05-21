import React, { useEffect, useState, useMemo } from "react";
import axios from "../../baseUrl";
import RenderRow from "../RenderRow";


export default function CustomizedTables(props) {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    axios
      .get(`/v1/id_person/?id_person=${props.idPerson}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setRows(response.data.results);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <>
      {rows.length != 0 ? (
        rows.map((row) => <RenderRow row={row} />)
      ) : (
        <div>Loading.....</div>
      )}
    </>
  );
}

