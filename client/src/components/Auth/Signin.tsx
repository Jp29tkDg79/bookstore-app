import { ReactNode, FormEvent } from "react";

import FormControl from "../UI/FormControl/FormControl";
import { useInputState } from "../../hooks/useInputState";
import { SigninTypes } from "../../types/Auth";

type SigninProps = {
  children: ReactNode;
};

const Signin = ({ children }: SigninProps) => {
  const { controls, doChangeHandler } = useInputState<SigninTypes>({
    email: "",
    password: "",
    name: "",
    confirmEmail: "",
    confirmPassword: "",
  });

  return (
    <form action="">
      <FormControl
        id="name"
        inputEle={{
          type: "text",
          name: "name",
          value: controls.name,
          onChange: (e) => doChangeHandler(e),
          required: true,
        }}
        text="名前"
      />
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
        id="confirmEmail"
        inputEle={{
          type: "email",
          name: "confirmEmail",
          value: controls.confirmEmail,
          onChange: (e) => doChangeHandler(e),
          required: true,
        }}
        text="メールアドレス確認用"
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
      <FormControl
        id="confirmPassword"
        inputEle={{
          type: "password",
          name: "confirmPassword",
          value: controls.confirmPassword,
          onChange: (e) => doChangeHandler(e),
          required: true,
        }}
        text="パスワード確認用"
      />
      {children}
    </form>
  );
};

export default Signin;
