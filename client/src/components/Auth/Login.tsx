import { ReactNode, FormEvent } from "react";

import { LoginTypes } from "../../types/Auth";

import FormControl from "../UI/FormControl/FormControl";
import { useInputState } from "../../hooks/useInputState";

type LoginProps = {
  children: ReactNode;
};

const Login = ({ children }: LoginProps) => {
  const { doChangeHandler, controls } = useInputState<LoginTypes>({
    email: "",
    password: "",
  });

  return (
    <form action="">
      <FormControl
        id="email"
        inputEle={{
          type: "email",
          name: "email",
          value: controls.email,
          onChange: (e) => doChangeHandler(e),
          required: true,
        }}
        text="メールアドレス"
      />
      <FormControl
        id="password"
        inputEle={{
          type: "password",
          name: "password",
          value: controls.password,
          onChange: (e) => doChangeHandler(e),
          required: true,
        }}
        text="パスワード"
      />
      {children}
    </form>
  );
};

export default Login;
