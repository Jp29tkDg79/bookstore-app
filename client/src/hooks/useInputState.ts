import { ChangeEvent, useState } from "react";

export const useInputState = <T extends object>(initalValue: T) => {
  const [controls, setControls] = useState<T>(initalValue);

  const doChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setControls({ ...controls, [e.target.name]: e.target.value });
  };

  return { doChangeHandler, controls };
};
