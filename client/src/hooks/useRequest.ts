import { useState } from "react";

import axios from "axios";

import { RequestTypes } from "../types/Request";

type doRequestTypes<T> = {
  body?: T;
};

type ErrorTypes = {
  message: string;
};

export const useRequest = <T>({ url, method, onSuccess }: RequestTypes<T>) => {
  const [error, setError] = useState<ErrorTypes>();

  axios.defaults.withCredentials = true;

  const doRequest = async <U>({ body }: doRequestTypes<U>) => {
    try {
      const { data } = await axios[method](url, { ...body });
      onSuccess(data);
    } catch (e: any) {
      console.log(e)
      axios.isAxiosError(e) && setError({ ...e });
    }
  };

  return { doRequest, error };
};
