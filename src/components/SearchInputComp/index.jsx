import React, { useEffect, useState } from "react"
import { SearchInput } from "../styles"
import { setSearchInputsObject } from "../../globalState"

export default function SearchInputComp(props) {
  const [timer, setTimer] = useState(null);
  const [inputValue, setInputValue] = useState();

  const clearTimer = () => {
    if (timer) clearTimeout(timer);
  };

  useEffect(() => {

    clearTimer();

    const newTimer = setTimeout(() => {
      setSearchInputsObject(props.faild, inputValue)
    }, 1000);

    setTimer(newTimer);

  }, [inputValue]);

  return (
    <SearchInput
      type="text"
      disabled={props.disabled}
      onChange={(event) => {
        setInputValue(event.target.value);
      }}
    />
  );
}
