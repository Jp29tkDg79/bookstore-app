import { ChangeEvent, useState } from "react";

type ErrorTypes<U extends object> = { [k in keyof U]: string };

export const useInputState = <T extends object>(initalValue: T) => {
  const [controls, setControls] = useState<T>({ ...initalValue });
  const [ctrlsErrMsg, setCtrlsErrMsg] = useState<ErrorTypes<T>>(
    Object.fromEntries(
      Object.entries(initalValue).map(([k, v]) => [k, String(v)])
    )
  );

  const doChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setControls({ ...controls, [e.target.name]: e.target.value });
  };

  const setControlsError = (k: keyof T, msg: string) => {
    setCtrlsErrMsg({ ...ctrlsErrMsg, [k]: msg });
  };

  const isControlsError = (): boolean => {
    return !Object.values(ctrlsErrMsg).every((v) => v);
  };

  return {
    doChangeHandler,
    controls,
    isControlsError,
    setControlsError,
    ctrlsErrMsg,
  };
};
