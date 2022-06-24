import React, { useMemo } from "react";
import codes from "../../codes.json";
import { setSearchInputsObject } from "../../globalState"

export default function HeaderSearchSelect({ content_table_id, selectedOption, faild }) {

    const handleChange = (event) => {
        setSearchInputsObject(faild, event.target.value)
      };
    
      const options = useMemo(() => {
        return codes.Z1.find( (element) => element.content_table_id == content_table_id )?.answers || [];
      }, []);

  return (
    <select
      style={{ width: "100%", height: "30px" }}
      onChange={handleChange}
    >
      <option value={selectedOption || ""}></option>
      {
        options.map(elem => <option key={elem.id} value={elem.id}>{elem.label}</option>)
      }
    </select>
  );
}
